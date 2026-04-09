import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({ btnText }) {
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
            <Select name='category_id' text='Selecione a categoria'/>
             <SubmitButton text={btnText}/>
        </form>
    )
}
export default ProjectForm;