import Navbar from '../../components/Home/navbar';
import Carrossel from './carrossel';
import './style.scss'

function Logado(){
    return(
        <>
        <Navbar />
        <div className="bloco-container">
            <div className="sub-div1">
                <h2>Últimas conexões</h2>
                <Carrossel />
            </div>
            <div className="sub-div2">
            <h2>Pesquisa</h2>
            </div>
        </div>
        </>
    )
}

export default Logado;