import {useState} from 'react';
function Conditional(){ //Exemplo de renderização condicional
    const [email, setEmail] =useState();
    const [userEmail, setUserEmail] = useState();
    function enviarEmail(e){
        e.preventDefault();
        setUserEmail(email);
        alert('E-mail enviado com sucesso!');
    }
    function limparEmail(e){
        setUserEmail('');
        setEmail('');
        
    }
    return(
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input type="email" className='inputEmail' placeholder="Digite seu e-mail..." on onChange={(e) => setEmail(e.target.value)}></input>
                <button onClick={enviarEmail} type="submit">Enviar</button>
                {userEmail &&(
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar</button>
                    </div>
                )}
            </form>
        </div>
    )
}
export default Conditional;