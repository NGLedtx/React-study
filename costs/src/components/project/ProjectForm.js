import { useState, useEffect } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({ btnText }) {

    const[categories, setCategories] = useState([]);

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

    return (
        <form className="flex flex-col gap-5">
            <Input 
                type="text" 
                text="Nome do projeto" 
                name="name" 
                placeholder="Digite o nome do projeto" 
            />
            <Input 
                type="number" 
                text="Orçamento total" 
                name="budget" 
                placeholder="Digite o orçamento total" 
            />
            <Select name='category_id' text='Selecione a categoria' options={categories}/>
             <SubmitButton text={btnText}/>
        </form>
    )
}
export default ProjectForm;