import {BsPencilSquare, BsFillTrashFill} from 'react-icons/bs';
import LinkIcon from '../layout/LinkIcon';
function ProjectCard({id, name, budget, category, handleRemove}) {
    return(
        <div className="flex border rounded-md justify-between items-center p-5 bg-white shadow-md">
            <div className='flex flex-col gap-2'>
                <label><b>Nome:</b> {name}</label>
                <label><b>Orçamento:</b> R$ {budget},00</label>
                <label><b>Categoria:</b> {category}</label>
            </div>
            <div className='flex flex-col gap-4'>
                <LinkIcon to={`/projects/${id}`} icon={<BsPencilSquare/>} tooltip="Editar Projeto"/>
                <LinkIcon to={`/projects/${id}/delete`} icon={<BsFillTrashFill/>} tooltip="Excluir Projeto"/>
            </div>
        </div>
    )
}
export default ProjectCard;