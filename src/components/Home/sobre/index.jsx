import Mapa from '../../../Imagens/nacional.png'
import './style.scss'
function Sobre() {
    return(
       
        <div className="sobre-geral">
         
            <div className="bloco-sobre">
                <div className="sobre-nos">
                    <h1>Quem somos</h1>
                <p>
                O Pacto Contra Fome é uma associação sem fins lucrativos que utiliza de inteligência de dados, articulação de indivíduos e organizações e incentivos a melhores práticas. Contribuímos assim para a atuação coordenada do setor público, setor privado, terceiro setor, academia e indivíduos, de forma a impulsionar o combate à fome e a redução do desperdício de alimentos no Brasil.
                </p>
                <button className="conecte">
                    Saiba mais
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