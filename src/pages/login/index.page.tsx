import React, { useEffect } from 'react'
import Image from 'next/image'
import { useSession, signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Container,
  ContainerImage,
  LogoImage,
  Social,
  SocialMidia,
  SocialMidiaContainer,
} from './styles'

export default function Login() {
  const session = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/home')
    }
  }, [session, router])

  async function handleSignIn() {
    await signIn('google')
  }

  return (
    <Container>
      <ContainerImage>
        <Image src="/assets/bookWiseImage.png" alt="" width={400} height={10} />
        <LogoImage>
          <Image src="/assets/logo.png" alt="" width={200} height={50} />
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
            <Image
              src="/assets/logos_google-icon.png"
              alt=""
              width={25}
              height={25}
            />
            <span>Entrar com Google</span>
          </Social>
          <Social>
            <Image
              src="/assets/akar-icons_github-fill.png"
              alt=""
              width={25}
              height={25}
            />
            <span>Entrar com Github</span>
          </Social>
          <Link href="/home" passHref>
            <Social>
              <Image
                src="/assets/RocketLaunch.png"
                alt=""
                width={25}
                height={25}
              />
              <span>Entrar como visitante</span>
            </Social>
          </Link>
        </SocialMidia>
      </SocialMidiaContainer>
    </Container>
  )
}
