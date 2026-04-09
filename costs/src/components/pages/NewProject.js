import ProjectForm from "../project/ProjectForm";
function NewProject(){
    return(
        <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
            <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold text-gray-800">Criar Projeto</h1>
                <p className=" text-gray-500 my-2">Crie seu novo projeto para depois adicionar os serviços</p>
                <ProjectForm btnText="Criar Projeto"/>
            </div>
        </div>
    )
}
export default NewProject;