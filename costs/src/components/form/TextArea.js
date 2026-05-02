function TextArea({text, name, placeholder, handleOnChange, value }) {
    return(
        <div className="flex flex-col gap-2 my-0.5">
            <label className="font-medium text-gray-800" htmlFor={name}>{text}:</label>
            <textarea required className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent h-20"
                id={name} 
                name={name} 
                placeholder={placeholder} 
                onChange={handleOnChange} 
                value={value}
            />
        </div>
    )
}
export default TextArea;