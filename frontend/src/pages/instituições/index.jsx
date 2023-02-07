import { Link } from 'react-router-dom';
import bloco from '../../Imagens/bloco-cadastro.png'
import './style.scss'
function Instituições() {
    return(
        <div className="geral-cadastro">
            <div className="bloco-cadastro">
                <img src={bloco}/>
            </div>
            
            <div className="bloco-inst">
             <div className="back">
                    <Link to="/">Voltar</Link>
                </div>
               <div className="setores">
                <h1>Qual é a sua instituição?</h1>
                
                <button className="inst-1">ONG
                   
                </button>
                <button className="inst-2">
                      <Link to="/empresa">Empresa privada</Link>
                </button>
                <button className="inst-3">Setor público</button>
               </div>
               
            </div>

         </div>
    )
}

export default Instituições;