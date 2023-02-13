import projeto from '../../../Imagens/projeto.png'
import './style.scss'
function Projetos() {
    return(
        <div className="geral-projetos">
        <div className="title-sobre">
            <h1>Conheça alguns dos nossos projetos</h1>
        </div>
        <div className="projetos">
        <div className="project-1">
                <img src={projeto} />
            <div className="text-project">
                <h2>Our project</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, unde accusantium, ratione veniam ad provident magni, sint labore rerum vel itaque! Expedita, a. Id exercitationem ex iusto fugit ea velit.</p>
            </div>
           </div>
           <div className="project-1">
                <img src={projeto} />
            <div className="text-project">
                <h2>Our project</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, unde accusantium, ratione veniam ad provident magni, sint labore rerum vel itaque! Expedita, a. Id exercitationem ex iusto fugit ea velit.</p>
            </div>
           </div>
        </div>
           
         </div>
    )
}

export default Projetos;