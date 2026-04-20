import { Link } from "react-router-dom";
function LinkIcon({to, icon, tooltip}){
    return(
        <Link className="border rounded-md p-2 hover:bg-gray-200 cursor-pointer" to={to} title={tooltip}> {icon}</Link>    
    )
}
export default LinkIcon;