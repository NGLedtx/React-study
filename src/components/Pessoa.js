function Pessoa({name, age, profession, picture}){
    return(
        <div>
            <img src={picture} alt="Imagem da pessoa"/>
            <h2>Nome: {name}</h2>
            <h2>Idade: {age}</h2>
            <h2>Profissão: {profession}</h2>
        </div>
    )
}
export default Pessoa;