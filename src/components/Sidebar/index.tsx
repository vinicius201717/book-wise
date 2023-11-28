import Image from 'next/image'
import { SidebarContainer, Bar, LinkItem, FooterSidebar } from './styles'
import logo from '../../assets/Logo.png'
import { ChartLineUp, Binoculars, SignIn, User } from 'phosphor-react'
import { useRouter } from 'next/router'

export default function Sidebar() {
  const router = useRouter()

  const link = router.pathname

  console.log(link)

  return (
    <SidebarContainer>
      <Image src={logo} alt="" width={140} />
      <ul>
        <LinkItem href="/" active={link === '/'}>
          {link === '/' ? <Bar /> : ''}
          <ChartLineUp />
          Início
        </LinkItem>
        <LinkItem href="/explore" active={link === '/explore'}>
          {link === '/explore' ? <Bar /> : ''}
          <Binoculars />
          Explorar
        </LinkItem>
        <LinkItem href="/perfil" active={link === '/perfil'}>
          {link === '/perfil' ? <Bar /> : ''}
          <User />
          Perfil
        </LinkItem>
      </ul>
      <FooterSidebar>
        <p>logout</p>
        <SignIn />
      </FooterSidebar>
    </SidebarContainer>
  )
}
