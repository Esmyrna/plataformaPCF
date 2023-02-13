import { Link } from 'react-router-dom';
import './style.scss'

function Container() {
    return(
        <div className="container">
            <div className="left">
                <div className="left-text">
                <h1>Conecte-se</h1>
                <p>Faça parte da rede que atua contra a fome e desperdício de alimentos. Nós acreditamos, é possível juntos.</p>
                <Link to="/inst">
                <buttom className="btn-transparent">Cadastre-se</buttom>
                </Link>
       
                </div>
                
            </div>
            <div>

            </div>
             
        </div>
    )
}

export default Container;