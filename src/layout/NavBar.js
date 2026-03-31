import {Link} from 'react-router-dom';
function NavBar(){
    return(
        <div className='NavBar flex text-center bg-slate-100'>
            <ul className='text-center justify-center flex w-full'>
              <li className='pr-2'><Link to="/">Home</Link></li>
               <li className='pr-2'><Link to="/enterprise">Empresa</Link></li>
                <li className='pr-2'><Link to="/contact">Contato</Link></li>
            </ul>
        </div>
    )
}
export default NavBar;