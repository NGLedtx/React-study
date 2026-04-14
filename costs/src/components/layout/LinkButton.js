import { Link } from 'react-router-dom';
function LinkButton({to, text}){
    return(
        <div>
            
            <Link className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded" to={to}>
                {text}
            </Link>
        </div>
    )
}
export default LinkButton;