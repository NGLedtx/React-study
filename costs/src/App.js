import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './components/Home';
import Enterprise from './components/Enterprise';
import Contact from './components/Contact';
import Projects from './components/Projects';
function App(){
  return(
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/enterprise' element={<Enterprise/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App;
