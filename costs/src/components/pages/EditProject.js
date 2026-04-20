import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjectForm from "../project/ProjectForm";
import Loading from "../layout/Loading";
function EditProject() {

    const {id} = useParams();
    const [editProject, setEditProject] = useState(null);
    const [showProjectForm, setShowProjectForm] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
        },
        }).then(resp => resp.json())
        .then((data) => {
            setEditProject(data);
        })
        .catch((err) => window.alert(err));
    }, [id])
    if (!editProject) {
        return <Loading/>}
        function editPost(EditProject){
           
        }
        function toggleProjectForm() {
            setShowProjectForm(!showProjectForm);
        }
    return (
        <div className="flex flex-col p-10 flex-grow bg-gray-100">
            <div className="flex justify-between">
                <h1 className="text-3xl"><b>Projeto:</b> {editProject.name}</h1>
                <button onClick={toggleProjectForm} className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800">
                    {!showProjectForm ? 'Editar Projeto' : 'Fechar Formulário'}
                </button>
            </div>
                {!showProjectForm ? (
                    <div className="flex flex-col my-4 border-b-2 shadow-md text-lg pb-4 gap-3 p-5">
                        <h2 className="text-2xl font-bold">Editar Projeto</h2>
                        <div className="flex ">
                             <span><b>Categoria:</b> {editProject.category.name}</span>
                        </div>
                       <div className="flex ">
                             <span><b>Total de Orçamento:</b> R${editProject.budget},00</span>
                        </div>
                        <div className="flex ">
                             <span><b>Gasto:</b> R${editProject.cost},00</span>
                        </div>
                    </div>
                ):(
                    <div className="mt-4">
                        <h2 className="text-xl font-bold">Formulário de Edição</h2>
                        <p>Aqui você pode editar os detalhes do projeto.</p>
                        <ProjectForm handleSubmit={editPost} btnText="Concluir Edição" projectData={editProject}/>
                    </div>
                )}
            </div>
    );
}
export default EditProject;