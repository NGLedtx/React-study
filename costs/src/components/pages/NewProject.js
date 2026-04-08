import ProjectForm from "../project/ProjectForm";
function NewProject(){
    return(
        <div className="bg-gray-100 h-screen flex flex-col items-center justify-center gap-5">
            <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md gap-10">
                <h1 className="text-3xl font-bold">Criar Projeto</h1>
                <p className="text-lg text-gray-500">Crie seu novo projeto para depois adicionar os serviços</p>
                <ProjectForm />
            </div>
        </div>
    )
}
export default NewProject;