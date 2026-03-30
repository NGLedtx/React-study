 function RenderList({itens}){ //Criando um componente para renderizar uma lista de itens
    return(
        <div>
            <h2>Itens:</h2>
            {itens.length > 0 ?(
            itens.map((item, index) => 
                <p key={index}>{item}</p>)
            ):(
                <p>Não há itens na lista.</p>
            )}
        </div>
    )
}
export default RenderList;