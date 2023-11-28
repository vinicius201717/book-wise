import { styled } from '../styles'

export const Container = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  padding: '$4',
  overflow: 'hidden',
})

export const ContainerImage = styled('div', {
  position: 'relative',
  '> img': {
    '&:first-child': {
      height: '97vh',
      borderRadius: '$sm',
    },
  },
})

export const LogoImage = styled('div', {
  position: 'absolute',
  left: '29%',
  top: '44%',
})

export const SocialMidiaContainer = styled('div', {
  display: 'flex',
  flex: '1',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
})

export const SocialMidia = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '$2',
})

export const Social = styled('div', {
  width: '372px',
  height: '60px',
  borderRadius: '$md',
  backgroundColor: '$gray600',
  display: 'flex',
  alignItems: 'center',
  padding: '$5',
  gap: '$5',
  cursor: 'pointer',
})
