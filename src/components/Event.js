
function Event({number}){ //Exemplo de evento
    function meuEvento(){
        alert(`Ativou o evento! ${number}`)
    }
    return(
        <div>
        <p>Clique aqui para me ativar: </p>
        <button onClick={meuEvento} className="btn-event bg-green-300 w-[200px] h-[50px] hover:bg-green-400">Ativar!</button>
        </div>
    )
}
export default Event;