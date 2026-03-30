import {useState} from 'react';
import YourName from './components/YourName';
import Greating from './components/Greating';
function App() {
  const [name, setName] = useState();
  return (
    <div className="bg-purple-200 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-lg min-h-screen bg-purple-400 shadow-lg rounded-lg text-center" >
          <h1>State Lift</h1>
           <YourName setName={setName}/>
           <Greating name={name}/>
        </div>
    </div>
  );
}

export default App;
