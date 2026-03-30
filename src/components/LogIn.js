import { useState } from 'react';
function Form(){
    function cadastroUser(e){ //Usando useState para armazenar os dados do formulário
        e.preventDefault();
       if(name === "Natan" && password === "admin"){
        alert("Bem Vindo, Natan!")
       }else{
        alert("Intruso detectado, acesso negado!")
       }
    }
    const [name, setName] = useState();
    const [password, setPassword] = useState();

    return(
        <div className="LogIn bg-purple-800 w-60 h-96 shadow-lg rounded-lg text-center flex flex-col items-center justify-center">
            <h1>Cadastro de Usuário</h1>
            <form onSubmit={cadastroUser}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome"
                    onChange= {(e) => setName(e.target.value)}
                    />
                    
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type= "password" id="password" name="password" placeholder="Digite sua senha"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}
export default Form;