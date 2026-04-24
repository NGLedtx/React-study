import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Enterprise from "./components/pages/Enterprise";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import NewProject from "./components/pages/NewProject";
import NotFound from "./components/pages/NotFound";
import EditProject from "./components/pages/EditProject";
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/editproject/:id" element={<EditProject />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
