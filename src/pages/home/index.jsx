import Navbar from '../../components/Home/navbar'
import Container from '../../components/Home/container'
import Sobre from '../../components/Home/sobre'
import   './style.scss'
 
import Projetos from '../../components/Home/projetos'
import SobreUp from '../../components/Home/sobre-up'
import Infos from '../../components/Home/infos'
 
function Home() {
    return(
        <>
        <Navbar />
        <Container />
        <SobreUp />
        <Infos />
        <Sobre />
        
        
        <Projetos />
         
        </>
    )
}

export default Home;