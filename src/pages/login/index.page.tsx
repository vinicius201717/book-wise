import {
  Container,
  ContainerImage,
  LogoImage,
  Social,
  SocialMidia,
  SocialMidiaContainer,
} from './styles'
import Image from 'next/image'

import bookWiseImage from '../../assets/bookWiseImage.png'
import logo from '../../assets/logo.png'
import logoGoogle from '../../assets/logos_google-icon.png'
import logoGithub from '../../assets/akar-icons_github-fill.png'
import logoVisitor from '../../assets//RocketLaunch.png'

export default function Login() {
  return (
    <Container>
      <ContainerImage>
        <Image src={bookWiseImage} alt="" />
        <LogoImage>
          <Image src={logo} alt="" />
        </LogoImage>
      </ContainerImage>
      <SocialMidiaContainer>
        <SocialMidia>
          <div>
            <h1>Boas vindas!</h1>
            <p>Faça seu login ou acesse como visitante.</p>
            <br />
          </div>
          <Social>
            <Image src={logoGoogle} alt="" />
            <span>Entrar com Google</span>
          </Social>
          <Social>
            <Image src={logoGithub} alt="" />
            <span>Entrar com Github</span>
          </Social>
          <Social>
            <Image src={logoVisitor} alt="" />
            <span>Entrar como visitante</span>
          </Social>
        </SocialMidia>
      </SocialMidiaContainer>
    </Container>
  )
}
