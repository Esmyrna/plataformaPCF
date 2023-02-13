import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import foto1 from '../../Imagens/carrossel1.png'
import foto2 from '../../Imagens/carrossel2.png'
import foto3 from '../../Imagens/carrossel3.png'
import './style.scss'
function Carrossel() {
    return(
        <Carousel>
               
                <div className="carrossel-text">
                    <img src={foto2}  />
                    <h1>Tia Nastacia</h1>
                    <h3>Terceiro setor</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat harum quis esse? Odit, perferendis similique voluptates asperiores veniam harum quaerat sint alias voluptas pariatur ut id nisi. Vel, officia commodi.</p>
                    <button className="btn-carrossel">Saiba Mais</button>
                </div>
                <div className="carrossel-text">
                    <img src={foto3}  />
                    <h1>Tia Nastacia</h1>
                    <h3>Terceiro setor</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat harum quis esse? Odit, perferendis similique voluptates asperiores veniam harum quaerat sint alias voluptas pariatur ut id nisi. Vel, officia commodi.</p>
                    <button className="btn-carrossel">Saiba Mais</button>
                </div>
                <div className="carrossel-text">
                    <img src={foto1}  />
                    <h1>Tia Nastacia</h1>
                    <h3>Terceiro setor</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat harum quis esse? Odit, perferendis similique voluptates asperiores veniam harum quaerat sint alias voluptas pariatur ut id nisi. Vel, officia commodi.</p>
                    <button className="btn-carrossel">Saiba Mais</button>
                </div>
            </Carousel>
    )
}

export default Carrossel;