function Greating({name}){
    function WhtGreating(WhtName){
        return`Olá, ${WhtName}, tudo bem?`
    }
    return(
        <>
            {name && <p>{WhtGreating(name)}</p>}
        </>
    )
}
export default Greating;