import { styled } from '@/src/pages/styles'
import Link from 'next/link'

export const SidebarContainer = styled('aside', {
  height: '96vh',
  borderRadius: '$lg',
  backgroundImage:
    'linear-gradient(to left top, #151525, #141c2a, #16232c, #1b282e, #232e30);',

  display: 'flex',
  flex: '0 0 250px',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',

  paddingTop: '$8',

  ul: {
    marginTop: '70px',
    listStyle: 'none',
  },
})

export const LinkItem = styled(Link, {
  width: '130px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
  fontSize: '$md',
  marginBottom: '25px',
  cursor: 'pointer',
  position: 'relative',
  paddingLeft: '10px',
  textDecoration: 'none',
  color: 'white',

  svg: {
    marginRight: '10px',
  },

  variants: {
    active: {
      true: {
        opacity: '1',
      },
      false: {
        opacity: '0.4',
      },
    },
  },
})

export const Bar = styled('div', {
  width: '3px',
  height: '20px',
  borderRadius: '$md',
  background:
    'linear-gradient(90deg, rgba(174,238,229,1) 0%, rgba(167,229,189,1) 36%, rgba(59,95,170,1) 100%)',

  position: 'absolute',
  left: 0,
})

export const FooterSidebar = styled('footer', {
  position: 'absolute',
  bottom: '40px',
  gap: 10,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',

  svg: {
    width: '25px',
    height: '25px',
    color: '#50B2C0',
  },
})
