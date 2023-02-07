import './style.scss'
import image1 from '../../../Imagens/Foto1.png'
import image2 from '../../../Imagens/Foto2.png'
import image3 from '../../../Imagens/Foto3.png'

function Container() {
    return(
        <div className="container">
             <div className="about">
                <div className="conteudo">
                       <h1 className="connections">
                    Realize Conexões
                     </h1>
                      <p className='texto-inicial'>
                 À nível nacional com iniciativas de <br/>setores privados e terceiro setor.
                     </p>
                     <button className="conecte">
                    Conecte-se
                     </button>
                </div>
                 
             </div>
             <div className="imgs">
                <div className="bloco-img">
                    <img className="img1"src={image1}/>
                    <img className="img2"src={image2}/>
                    <img className="img3"src={image3}/>
                </div>
               
             </div>
        </div>
    )
}

export default Container;