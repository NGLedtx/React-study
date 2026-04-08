import {Link} from 'react-router-dom';
import {FaHome} from 'react-icons/fa';
import {FaBuilding} from 'react-icons/fa';
import {FaPhone} from 'react-icons/fa';
function NavBar(){
    return(
        <div className='NavBar flex text-center bg-slate-100'>
            <ul className='text-center justify-center flex w-full p-5'>
              <li className='pr-10 ' title='Home'><Link to="/"><FaHome/></Link></li>
               <li className='pr-10' title='Empresa'><Link to="/enterprise"><FaBuilding/></Link></li>
                <li className='' title='Contato'><Link to="/contact"><FaPhone/></Link></li>
            </ul>
        </div>
    )
}
export default NavBar;