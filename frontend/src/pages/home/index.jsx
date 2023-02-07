import Navbar from '../../components/Home/navbar'
import Container from '../../components/Home/container'
import Sobre from '../../components/Home/sobre'
import Seguidores from '../../components/home/seguidores'
import Pilares from '../../components/Home/pilares'
import AgendaESG from '../../components/Home/agendaESG'
import Projetos from '../../components/Home/projetos'
 
function Home() {
    return(
        <>
        <Navbar />
        <Container />
        <Sobre />
        <Seguidores />
        <Pilares />
        <AgendaESG />
        <Projetos />
         
        </>
    )
}

export default Home;