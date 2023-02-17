import Navbar from '../../components/Home/navbar';
import Carrossel from './carrossel';
import {BsSearch} from 'react-icons/bs'
import foto from '../../Imagens/foto-if.png'
import mapa from '../../Imagens/mapa.png'
import './style.scss'

function Logado() {
   
    return (
        <>
            <Navbar />
            <div className="bloco-container">
                <div className="sub-div1">
                    <h2>Últimas conexões</h2>
                    <Carrossel />
                </div>
                <div className="sub-div2">
                    <h2>Pesquisa</h2>
                    <form>
                        <input type="text" />
                        <button class="submit-lente" type="submit">
                             <BsSearch />
                        </button>
                    </form>
                    <div className="sessao-1">
                        <div className="lista">
                            <ul>
                                <li>
                                    <div className="info-iniciativas">
                                        <div className="imagem">
                                            <img src={foto} />
                                        </div>
                                        <h2>Title</h2>
                                        <h4>Setor</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, ratione earum. Magnam perferendis, ea cupiditate quod libero dolor reprehenderit.</p>
                                    </div>
                                </li>

                                <li>
                                    <div className="info-iniciativas">
                                        <div className="imagem">
                                            <img src={foto} />
                                        </div>
                                        <h2>Title</h2>
                                        <h4>Setor</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, ratione earum. Magnam perferendis, ea cupiditate quod libero dolor reprehenderit.</p>
                                    </div>
                                </li>

                               
                            </ul>
                        </div>
                        <div className="mapa">
                            <img src={mapa} />
                        </div>
                        <div className="lista2">
                            <ul>
                                <li>
                                    <div className="info-iniciativas">
                                        <div className="imagem">
                                            <img src={foto} />
                                        </div>
                                        <h2>Title</h2>
                                        <h4>Setor</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, ratione earum. Magnam perferendis, ea cupiditate quod libero dolor reprehenderit.</p>
                                    </div>
                                </li>
                                </ul>
                            </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Logado;