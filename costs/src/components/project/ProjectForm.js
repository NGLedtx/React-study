import { useState, useEffect } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({ handleSubmit, btnText, projectData }) {

    const[categories, setCategories] = useState([]);
    const[project, setProject] = useState(projectData || {});

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        },
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCategories(data);
    })
    .catch((err) => window.alert(err));
    }, []);

    const submit = (e) => {
        e.preventDefault();
        //console.log(project);
        handleSubmit(project);
    }

    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value});
    }

    function handleCategory(e){
        setProject({...project, category:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }});
    }

    return (
        <form onSubmit={submit} className="flex flex-col gap-5">
            <Input 
                type="text" 
                text="Nome do projeto" 
                name="name" 
                placeholder="Digite o nome do projeto" 
                handleOnChange={handleChange}
                value={project.name}
            />
            <Input 
                type="number" 
                text="Orçamento total" 
                name="budget" 
                placeholder="Digite o orçamento total" 
                handleOnChange={handleChange}
                value={project.budget}
            />
            <Select name='category_id' text='Selecione a categoria' options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : ""}/>
             <SubmitButton text={btnText}/>
        </form>
    )
}
export default ProjectForm;