import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjectForm from "../project/ProjectForm";
import ServiceForm from "../project/ServiceForm";
import Loading from "../layout/Loading";
import Message from "../layout/Message";
import {parse, v4 as uuidv4} from "uuid"
function Project() {
  const { id } = useParams();

  const [project, setProject] = useState(null);
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
    setShowMessage("")
    const lastService = project.services[project.services.length - 1]
    lastService.id = uuidv4()

    const lastServiceCost = lastService.cost
    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

    if(newCost > parseFloat(project.budget)){
      setShowMessage('Orçamento ultrapassado, verifique o valor do serviço')
      setType('error')
      project.services.pop()
      return false
    }

    project.cost = newCost

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
      }).then((resp) => resp.json())
      .then((data) => {

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
          {!showProjectForm ? "Editar Projeto" : "Fechar Formulário"}
        </button>
      </div>
      {!showProjectForm ? (
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
      ) : (
        <div className="flex flex-col my-4">
          <div className="mb-5">
            <h2 className="text-xl font-bold">Formulário de Edição</h2>
            <p className="text-gray-500">
              Aqui você pode editar os detalhes do projeto.
            </p>
          </div>
          <ProjectForm
            handleSubmit={editPost}
            btnText="Concluir Edição"
            projectData={project}
          />
        </div>
      )}
      <div className="flex flex-col my-5">
        <div className="flex justify-between border-b-2 shadow-md gap-3 my-6 p-3">
          <h2 className="text-2xl font-bold">Adicione um serviço:</h2>
          <button
            onClick={toggleServiceForm}
            className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 "
          >
            {!showServiceForm ? "Adicionar serviço" : "Fechar Formulário"}
          </button>
        </div>
        <div>
          {showServiceForm && (
            <div className="p-5 rounded-md">
              <ServiceForm
                handleSubmit={createService}
                btnText={"Adicionar Serviço"}
                projectData={project}
              />
            </div>
          )}
        </div>
        <div className="border-b-2 shadow-md gap-3 my-6">
          <h1 className="text-2xl font-bold" >Serviços</h1>
        </div>
      </div>
    </div>
  );
}
export default Project;
