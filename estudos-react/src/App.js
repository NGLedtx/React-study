import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Empresa from './pages/Enterprise';
import Contato from './pages/Contact';
import NavBar from './layout/NavBar';
function App() {
  return (
    <div>
        <div> 
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/enterprise' element={<Empresa/>} />
              <Route path='/contact' element={<Contato/>} />
            </Routes>
          </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
