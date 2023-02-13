import './style.scss'
import logo from '../../../Imagens/logo-nav.png'
import { Link } from 'react-router-dom';
function Navbar() {
    return(
        <div className="nav">
            <Link to="/">
              <img src={logo} width="100%" />
            </Link>
 
             
             <div className="btns">
                  <button className="btn-cadastro">
                      <Link to="/inst">Cadastre-se</Link>  
                  </button>
                 <button className="btn-login">
                     Login
                </button>
             </div>
            
        </div>
    )
}

export default Navbar;