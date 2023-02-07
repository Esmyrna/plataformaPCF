import Mapa from '../../../Imagens/nacional.png'
import './style.scss'
function Sobre() {
    return(
       
        <div className="sobre-geral">
            <div className="title-sobre">
                <h1>Qual é o nosso propósito?</h1>
            </div>
            <div className="bloco-sobre">
                <div className="sobre-nos">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                </p>
                <button className="conecte">
                    Faça parte
                     </button>
            </div>
            <div className="imagem-sobre">
                <img src={Mapa}/>
            </div>
            </div>
            
        </div>
    )
}
export default Sobre;