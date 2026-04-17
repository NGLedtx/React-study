function LinkIcon({to, icon, tooltip}){
    return(
        <div className="border rounded-md p-2 hover:bg-gray-200 cursor-pointer" to={to} title={tooltip}>
            {icon}
        </div>
    )
}
export default LinkIcon;