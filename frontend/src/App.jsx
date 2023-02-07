 
import Home from './pages/home'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from './components/Home/footer'
import Instituições from './pages/instituições'
import Empresa from './pages/cadastro/empresa'
function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inst" element={<Instituições/>} />
        <Route path="/empresa" element={<Empresa/>} />
      </Routes>
      <Footer />
    </Router>
    
    </>
  )
}

export default App
