import Message from "../layout/Message";
import {useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";
import Loading from "../layout/Loading";
function Projects(){
    const [projects, setprojects] = useState([])
    const [removeLoading, setremoveLoading] = useState(false)

    const location = useLocation();
    let message = "";
    if(location.state){
        message = location.state.message;
    }

    useEffect(() => {
        setTimeout(() => {
                fetch("http://localhost:5000/projects", {
                method: "GET",
                headers:{
                    'Content-Type': 'application/json'
                },}).then(resp => resp.json())
                    .then(data => {
                    setprojects(data)
                    setremoveLoading(true)})
            .catch(err => console.log(err))
            }, 1000)
    }, [])

    function removeProject(id){
        fetch(`http://localhost:5000/projects/${id}`,{
            method: "DELETE",
            headers:{
                'content-Type': 'application/json'
            },
        }).then(resp => resp.json()).catch(err => window.alert(err))
        .then((data) => {
            setprojects(projects.filter((project) => project.id !== id))
        })

    }

    return(
        <div className="bg-gray-100 flex-grow">
            <div className="flex items-center justify-between p-10">
                <h1 className="text-2xl font-bold">Meus Projetos</h1>
                <LinkButton to="/NewProject" text=" + Novo projeto"/>
            </div>
            {message && <Message type="success" msg={message}/>}
            <div className="flex flex-col gap-10 p-10">
                {!removeLoading ? (
                    <Loading/>
                ): projects.length > 0 ?(
                    projects.map((project) =>(
                        <ProjectCard id={project.id} name={project.name} budget={project.budget} category={project.category.name} key={project.id} handleRemove={removeProject}/>
                    ))) :(
                    <div className="flex items-center justify-center">
                        <h1 className="bold text-2xl">Nenhum projeto adicionado 😔</h1>
                    </div>
                    )}
            </div>
            
        </div>
    )
}
export default Projects;