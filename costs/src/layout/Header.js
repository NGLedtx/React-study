import { FaBitcoin } from 'react-icons/fa';
import {Link} from 'react-router-dom';
function Header(){
    return(
        <div className="bg-gray-900 h-20 flex flex-row items-center justify-between pl-10 pr-10">
            <div className='flex'>
                <Link to="/"><FaBitcoin className="text-yellow-500 text-4xl hover:animate-spin hover:text-yellow-600 cursor-pointer" /></Link>
                <h1 className="text-yellow-500 text-4xl pl-2">Costs</h1>
            </div>
            <div>
                <ul className='flex text-white gap-5'>
                    <li><Link to="/" className='hover:text-gray-300'>Home</Link></li>
                    <li><Link to="/projects" className='hover:text-gray-300'>Projetos</Link></li>
                    <li><Link to="/enterprise" className='hover:text-gray-300'>Empresa</Link></li>
                    <li><Link to="/contact" className='hover:text-gray-300'>Contato</Link></li>
                </ul>
            </div>
            

        </div>
    )
}
export default Header;