import logo from '../../../Imagens/logo.png'
import {BsInstagram}  from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {GrLinkedinOption} from 'react-icons/gr'
import {BsYoutube} from 'react-icons/bs'
import './style.scss'
function Footer() {
    return(
       <footer className="all-footer">
            <div className="logo">
                <img src={logo}/>
            </div>
            <div className="Contato">
                <h2>Contato</h2>
                 <ul className="list">
                    <li>E-mail: xxxxx@gmail.com </li>
                    <li>Telefone: (xx) xxxx-xxxx</li>
                    <li>Endereço : xxxxxxxxxxxx, xxx, 0000</li>
                 </ul>
                 <div className="social-midia">
                    <BsInstagram />
                    <FaFacebookF />
                    <BsTwitter />
                    <GrLinkedinOption />
                    <BsYoutube />


                 </div>
            </div>
       </footer>
    )
}

export default Footer;