import Image from 'next/image'
import { SidebarContainer, Bar, LinkItem, FooterSidebar } from './styles'
import { ChartLineUp, Binoculars, SignIn, User } from 'phosphor-react'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/react'

export default function Sidebar() {
  const router = useRouter()

  async function handleLogout() {
    await signOut()
  }

  const link = router.pathname

  return (
    <SidebarContainer>
      <Image src="/assets/Logo.png" alt="" width={140} height={40} />
      <ul>
        <LinkItem href="/home" active={link === '/home'}>
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
      <FooterSidebar onClick={handleLogout}>
        <p>logout</p>
        <SignIn />
      </FooterSidebar>
    </SidebarContainer>
  )
}
