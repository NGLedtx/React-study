import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjectForm from "../project/ProjectForm";
import Loading from "../layout/Loading";
import Message from "../layout/Message";
function EditProject() {
  const { id } = useParams();

  const [editProject, setEditProject] = useState(null);
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
        setEditProject(data);
      })
      .catch((err) => window.alert(err));
  }, [id]);
  if (!editProject) {
    return <Loading />;
  }
  function editPost(EditProject) {
    setShowMessage("");
    if (EditProject.budget < EditProject.cost) {
      setShowMessage("O orçamento não pode ser menor que o custo do projeto!");
      setType("error");
      return false;
    }

    fetch(`http://localhost:5000/projects/${EditProject.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(EditProject),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setEditProject(data);
        setShowProjectForm(false);
        setShowMessage("Projeto Atualizado!");
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
          <b>Projeto:</b> {editProject.name}
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
              <b>Categoria:</b> {editProject.category.name}
            </span>
          </div>
          <div className="flex ">
            <span>
              <b>Total de Orçamento:</b> R${editProject.budget},00
            </span>
          </div>
          <div className="flex ">
            <span>
              <b>Gasto:</b> R${editProject.cost},00
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
            projectData={editProject}
          />
        </div>
      )}
      <div className="flex flex-col my-5">
        <div className="flex justify-between ">
          <h2 className="text-2xl font-bold">Serviços</h2>
          <button
            onClick={toggleServiceForm}
            className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 "
          >
            {!showServiceForm ? "Adicionar serviço" : "Fechar Formulário"}
          </button>
        </div>
        <div className="border-b-2 shadow-md gap-3 my-6">
          {showServiceForm && (
            <div className="p-5 rounded-md">
            <ProjectForm btnText={"Salvar Serviço"}/>
            </div>
            )}
        </div>
      </div>
    </div>
  );
}
export default EditProject;
