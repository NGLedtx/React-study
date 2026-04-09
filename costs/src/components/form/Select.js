function Select({ text, name, options, handleOnChange, value}){
    return(
        <div className="flex flex-col gap-2 my-0.5">
            <label className="font-medium text-gray-800" htmlFor={name}>{text}:</label>
            <select  name={name} id={name} className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent">
                <option className="text-gray-800">Selecione uma opção</option>
            </select>
        </div>
    )
}
export default Select;