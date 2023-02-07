import esg from '../../../Imagens/esg.png'
import './style.scss'
function AgendaESG() {
    return(
        <div className="esg-geral">
            <div className="title-sobre">
                <h1>Compromisso com a agenda 2030</h1>
            </div>
            <div className="bloco-sobre">
                <div className="sobre-nos">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                </p>
            </div>
            <div className="imagem-esg">
                <img className="fundo "src={esg} />
            </div>
            </div>
            
        </div>
    )
}
export default AgendaESG;