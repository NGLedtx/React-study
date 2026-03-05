import logo from './logo.svg';
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="bg-purple-200 min-h-screen flex items-center justify-center">
        <div className="w-96 min-h-screen bg-purple-400 shadow-lg rounded-lg text-center" >
            <SayMyName name="Cici"/>
            <Pessoa picture="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" name="Natan" age="19" profession="Desenvolvedor"/>
        </div>
    </div>
  );
}

export default App;
