import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import LinkButton from "../layout/LinkButton";
function Projects(){
    const location = useLocation();
    let message = "";
    if(location.state){
        message = location.state.message;
    }
    return(
        <div className="bg-gray-100 h-screen">
            <div className="flex items-center justify-between p-10">
                <h1>MeusProjetos</h1>
                <LinkButton to="/NewProject" text=" + Novo projeto"/>
            </div>
            {message && <Message type="success" msg={message}/>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
                <p>Em construção...</p>
            </div>
            
        </div>
    )
}
export default Projects;