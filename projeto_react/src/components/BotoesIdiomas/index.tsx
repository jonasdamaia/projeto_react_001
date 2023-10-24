import { useState } from "react"
import {Titulo, ListaTecnologias, Botao1, Botao2, Botao3, Botoes, Lista1, Lista2, Lista3} from './style'
import bandeiraBrasil from '../../assets/images/brazil.svg'
import bandeiraEstadosUnidos from '../../assets/images/united-states.svg'
import bandeiraEspanha from '../../assets/images/spain 2.svg'

const SelecionarIdioma: React.FC = () => {
    const[idioma, setIdioma] = useState('pt')

    const handleAlterarIdioma = (novoIdioma: string) => {
        setIdioma(novoIdioma)
    }

    return(
        <>
            <Titulo>
                <p>
                    {idioma === 'pt' && 'Olá, meu nome é Jonas da Maia e eu sou Desenvolvedor Front-end, Tecnologias que tenho experiência:'}
                    {idioma === 'en' && 'Hello, my name is Jonas da Maia and I am a Front-end Developer, Technologies I have experience in:'}
                    {idioma === 'es' && 'Hola, mi nombre es Jonas da Maia y soy Desarrollador Front-end, Tecnologías en las que tengo experiencia:'}
                </p>
            </Titulo>
            <ListaTecnologias>
                <Lista1>
                    <p>Javascrip</p>
                    <p>React</p>
                    <p>Vue</p>
                    <p>Tailwind CSS</p>
                </Lista1>
                <Lista2>
                    <p>Styled Components</p>
                    <p>Saas</p>
                    <p>Node</p>
                    <p>TypeScrypt</p>
                </Lista2>
                <Lista3>
                    <p>Angular</p>
                    <p>Java</p>
                </Lista3>
            </ListaTecnologias>
            <Botoes>
            <Botao1>
                <button onClick={() => handleAlterarIdioma('pt')}>
                    <img src={bandeiraBrasil} />
                    <p>Portugês</p>
                </button>
            </Botao1>
            <Botao2>
                <button onClick={() => handleAlterarIdioma('en')}>
                    <img src={bandeiraEstadosUnidos} />
                    <p>Inglês</p>
                </button>
            </Botao2>
            <Botao3>
                <button onClick={() => handleAlterarIdioma('es')}>
                    <img src={bandeiraEspanha} />
                    <p>Espanhol</p>
                </button>
            </Botao3>
            </Botoes>

        </>
    )
}

export default SelecionarIdioma