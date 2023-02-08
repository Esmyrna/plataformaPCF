 
import Home from './pages/home'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from './components/Home/footer'
import Instituições from './pages/instituições'
import Empresa from './pages/cadastro/empresa/parte1'
import EmpresaParte2 from './pages/cadastro/empresa/parte2'
function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inst" element={<Instituições/>} />
        <Route path="/empresa" element={<Empresa/>} />
        <Route path="/empresa2" element={<EmpresaParte2/>} />
      </Routes>
      <Footer />
    </Router>
    
    </>
  )
}

export default App
