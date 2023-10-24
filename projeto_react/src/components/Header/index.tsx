import { Container, Content, ImageLogo } from "./style";
import logoSvg from '../../assets/images/logo_stackx.svg'

export function Header() {

    return(
        <Container>
            <Content>
                <ImageLogo src={logoSvg} />
            </Content>
        </Container>
    )
}