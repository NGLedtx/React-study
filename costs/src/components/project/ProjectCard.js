import {BsPencilSquare, BsFillTrashFill} from 'react-icons/bs';
import LinkIcon from '../layout/LinkIcon';
function ProjectCard({id, name, budget, category, handleRemove}) {

    const remove = (e) => {
        e.preventDefault();
        const confirm = window.confirm("Deseja realmente remover o projeto?");
        if(!confirm){
            return;
        }else{
            handleRemove(id);
        }  
    }

    return(
        <div className="flex border rounded-md justify-between items-center p-5 bg-white shadow-md">
            <div className='flex flex-col gap-2'>
                <label><b>Nome:</b> {name}</label>
                <label><b>Orçamento:</b> R$ {budget},00</label>
                <label><b>Categoria:</b> {category}</label>
            </div>
            <div className='flex flex-col gap-4'>
                <LinkIcon to={`/EditProject/${id}`} icon={<BsPencilSquare/>} tooltip="Editar Projeto"/>
                <button onClick={remove} className="border rounded-md p-2 hover:bg-gray-200 text-red-600" title="Remover Projeto">
                    <BsFillTrashFill/>
                </button>
            </div>
        </div>
    )
}
export default ProjectCard;