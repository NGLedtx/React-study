import { useNavigate } from "react-router-dom";
import ProjectForm from "../project/ProjectForm";
function NewProject(){
    
    const navigate = useNavigate();

    function CreatePost(project){
        project.cost = 0;
        project.services = [];

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            //alert(data);
            navigate("/projects", {message: "Projeto criado com sucesso!"});
        }
        ).catch((err) => window.alert(err))
    }
    return(
        <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
            <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold text-gray-800">Criar Projeto</h1>
                <p className=" text-gray-500 my-2">Crie seu novo projeto para depois adicionar os serviços</p>
                <ProjectForm handleSubmit={CreatePost} btnText="Criar Projeto"/>
            </div>
        </div>
    )
}
export default NewProject;