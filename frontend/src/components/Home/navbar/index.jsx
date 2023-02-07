import './style.scss'
import logonav from '../../../Imagens/logonav.png'
import { Link } from 'react-router-dom';
function Navbar() {
    return(
        <div className="nav">
            <Link to="/">
              <img src={logonav} />
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