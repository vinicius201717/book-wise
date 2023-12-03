import {
  Container,
  ContainerImage,
  LogoImage,
  Social,
  SocialMidia,
  SocialMidiaContainer,
} from './styles'
import Image from 'next/image'

import { useSession, signIn } from 'next-auth/react'

import bookWiseImage from '../../assets/bookWiseImage.png'
import logo from '../../assets/logo.png'
import logoGoogle from '../../assets/logos_google-icon.png'
import logoGithub from '../../assets/akar-icons_github-fill.png'
import logoVisitor from '../../assets//RocketLaunch.png'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { prisma } from '@/src/lib/prisma'

export default async function Login() {
  const session = useSession()
  const router = useRouter()

  const isSignedIn = session.status === 'authenticated'

  if (isSignedIn) {
    router.push('/home')
  }

  async function handleSignIn() {
    await signIn('google')
  }

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
          <Social onClick={handleSignIn}>
            <Image src={logoGoogle} alt="" />
            <span>Entrar com Google</span>
          </Social>
          <Social>
            <Image src={logoGithub} alt="" />
            <span>Entrar com Github</span>
          </Social>
          <Link
            href={'/home'}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <Social>
              <Image src={logoVisitor} alt="" />
              <span>Entrar como visitante</span>
            </Social>
          </Link>
        </SocialMidia>
      </SocialMidiaContainer>
    </Container>
  )
}
