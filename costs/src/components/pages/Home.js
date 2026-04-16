import LinkButton from "../layout/LinkButton";
import Loading from "../layout/Loading";

function Home(){
    return(
        <div className="bg-gray-100 h-screen flex flex-col items-center justify-center gap-5">
            <h1 className="text-5xl font-bold">
                Bem vindo ao <span className="text-yellow-500 bg-gray-900 rounded">Costs</span>
            </h1>
            <p className="text-1xl font-semibold">Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/NewProject" text="Criar Projeto" />
        </div>
    )
}
export default Home;