import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjectForm from "../project/ProjectForm";
import ServiceForm from "../project/ServiceForm";
import ServiceCard from "../project/ServiceCard";
import Loading from "../layout/Loading";
import Message from "../layout/Message";
import { v4 as uuidv4 } from "uuid";
import Modal from "../layout/Modal";
import { BsPencilSquare } from "react-icons/bs";
function Project() {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [services, setServices] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [showMessage, setShowMessage] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setServices(data.services);
      })
      .catch((err) => window.alert(err));
  }, [id]);
  if (!project) {
    return <Loading />;
  }
  function editPost(project) {
    setShowMessage("");
    if (project.budget < project.cost) {
      setShowMessage("O orçamento não pode ser menor que o custo do projeto!");
      setType("error");
      return false;
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(false);
        setShowMessage("Projeto Atualizado!");
        setType("success");
      })
      .catch((err) => window.alert(err));
  }

  function createService(project) {
    setShowMessage("");
    if (!project.services || project.services.length === 0) {
      return;
    }
    const lastService = project.services[project.services.length - 1];
    lastService.id = uuidv4();

    const lastServiceCost = lastService.cost;
    const newCost =
      parseFloat(project.cost || 0) + parseFloat(lastServiceCost || 0);

    if (newCost > parseFloat(project.budget)) {
      setShowMessage("Orçamento ultrapassado, verifique o valor do serviço");
      setType("error");
      project.services.pop();
      return false;
    }

    project.cost = newCost;

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setShowServiceForm(false);
      })
      .catch((err) => window.alert(err));
  }
  function removeService(id, costs) {
    const servicesUpdated = project.services.filter(
      (service) => service.id !== id,
    );
    const projectUpdated = project;
    projectUpdated.services = servicesUpdated;
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(costs);

    fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectUpdated),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(projectUpdated);
        setServices(servicesUpdated);
        setShowMessage("Serviço removido com sucesso!");
        setType("success");
      })
      .catch((err) => window.alert(err));
  }
  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }
  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm);
  }
  return (
    <div className="flex flex-col min-h-screen p-10 bg-gray-100">
      {showMessage && <Message type={type} msg={showMessage} />}
      <div className="flex justify-between">
        <h1 className="text-2xl">
          <b>Projeto:</b> {project.name}
        </h1>
        <button
          onClick={toggleProjectForm}
          className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 "
        >
          <BsPencilSquare />
        </button>
      </div>
      <div className="flex flex-col my-4 border-b-2 shadow-md text-lg pb-4 gap-3 p-5">
        <div className="flex ">
          <span>
            <b>Categoria:</b> {project.category.name}
          </span>
        </div>
        <div className="flex ">
          <span>
            <b>Total de Orçamento:</b> R${project.budget},00
          </span>
        </div>
        <div className="flex ">
          <span>
            <b>Gasto:</b> R${project.cost},00
          </span>
        </div>
      </div>
      {showProjectForm && (
        <Modal onClose={toggleProjectForm}>
          <ProjectForm
            handleSubmit={editPost}
            btnText={"Concluir Edição"}
            projectData={project}
          />
        </Modal>
      )}
      <div className="border-b-2 shadow-md gap-3 my-6 p-5 h-auto">
        <div className="flex justify-between w-full mb-5">
          <h1 className="text-2xl font-bold">Serviços</h1>
          <button
            onClick={toggleServiceForm}
            className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 "
          >
            + Adicionar Serviço
          </button>
        </div>
        {showServiceForm && (
          <Modal onClose={toggleServiceForm}>
            <ServiceForm
              handleSubmit={createService}
              btnText={"Confirmar!"}
              projectData={project}
            />
          </Modal>
        )}
        {services.length > 0 &&
          services.map((service) => (
            <ServiceCard
              id={service.id}
              name={service.name}
              cost={service.cost}
              description={service.description}
              key={service.id}
              handleRemove={removeService}
            />
          ))}
        {services.length === 0 && (
          <p className="text-gray-500 text-center">
            Não há serviços cadastrados.
          </p>
        )}
      </div>
    </div>
  );
}
export default Project;
