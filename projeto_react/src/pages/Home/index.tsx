import SelecionarIdioma from '../../components/BotoesIdiomas'
import { Header } from '../../components/Header'
import {Container} from './style'

export function Home(){

    return(
        <Container>
            <Header />
            <SelecionarIdioma />
            <div></div>
        </Container>
    )
}