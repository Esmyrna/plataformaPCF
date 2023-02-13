import './style.scss'
import connection from '../../../Imagens/connection-icon.png'
import colaboration from '../../../Imagens/colaboracao-icon.png'
import data from '../../../Imagens/dados-icon.png'
import esg from '../../../Imagens/esg-icon.png'
import { Link } from 'react-router-dom'
function SobreUp() {
    return (
        <div className='all-sobreup'>
            <div className='text-sobreup'>
                <h1>Por quê se conectar?</h1>
                <p className="strong">
                    Hub social é uma iniciativa do Pacto contra fome, um movimento suprapartidário que abrange todos os setores da sociedade.
                </p>
                <p>

                    Nosso proposito é criar aqui um um espaço que utiliza da tecnologia para articular indivíduos e organizações de multissetores, com proposito  incentivar a atuação coordenada para impulsionar o combate à fome e a redução do desperdício de alimentos no Brasil.
                </p>
                <Link to="/inst">
                <button className="btn-sobruep">
                    Conecte-se
                </button>
                </Link>
                
            </div>
            <div className="icons-sobreup">
                <div className='column1'>
                    <img src={connection} />
                    <h3>Conexão</h3>
                    <p>Lorem ipsum, or lipsum as it is sometimes known. Lorem ipsum, or lipsum as it is sometimes known</p>

                    <img src={colaboration} />
                    <h3>Colaboração</h3>
                    <p>Lorem ipsum, or lipsum as it is sometimes known. Lorem ipsum, or lipsum as it is sometimes known</p>
                </div>
                <div className="column2">
                <img src={data} />
                    <h3>Mensuração de dados</h3>
                    <p>Lorem ipsum, or lipsum as it is sometimes known. Lorem ipsum, or lipsum as it is sometimes known</p>

                    <img src={esg} />
                    <h3>Metodologia ESG</h3>
                    <p>Lorem ipsum, or lipsum as it is sometimes known. Lorem ipsum, or lipsum as it is sometimes known</p>
                </div>
            </div>
        </div>
    )
}

export default SobreUp;