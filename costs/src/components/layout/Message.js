import { useState, useEffect } from "react";
function Message({type, msg}){
   
    const [visible, setVisible] = useState(false);
     const colors ={
        success: "bg-green-400 p-4 flex items-center justify-center text-white w-96 rounded-lg shadow-md", 
        error: "bg-red-400 p-4 flex items-center justify-center text-white w-30 rounded-lg",
    };

    useEffect(() => {

        if(!msg){
            setVisible(false);
            return;
        }
        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000)
        return () => clearTimeout(timer);
    }, [msg])
    return(
        <>
        {visible && (
            <div className="flex justify-center items-center text-center mb-9">
                <div className={`message ${colors[type]} flex text-center justify-center items-center`} >
                    {msg}
                </div>
            </div>
        )}
        </>
    )
}
export default Message;