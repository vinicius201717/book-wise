import { styled } from '../styles'

export const MainContainer = styled('main', {
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  padding: '50px',
  paddingLeft: '100px',
  flex: '1',
})

export const Container = styled('main', {
  width: '100%',
  height: 'calc(100vh - 100px)',
  display: 'flex',
  justifyContent: 'space-around',
})

export const LastReading = styled('div', {
  width: '85%',
  height: '192px',
  minHeight: '192px',
  display: 'flex',
  padding: '20px 24px',
  borderRadius: '$md',
  backgroundColor: '$gray600',
})

export const ContaineTimeLineBookInfo = styled('div', {
  display: 'flex',
})

export const ContainerTimeLineBooks = styled('div', {
  width: '908px',
  height: '100%',
})

export const TimeLineBooks = styled('div', {
  width: '100%',
  height: '80%',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',

  '&::-webkit-scrollbar': {
    width: '7px',
  },
})

export const InfoUserBook = styled('div', {
  flex: '1',
  height: '200px',
  paddingTop: '10px',
  display: 'flex',
  justifyContent: 'space-between',
})

export const InfoUserPerfil = styled('div', {
  display: 'flex',
  gap: '$4',
})

export const InfoUserDescription = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  span: {
    fontSize: '$xs',
    opacity: '0.5',
  },
})

export const ItemBook = styled('div', {
  width: '85%',
  minHeight: '200px',
  marginBottom: '20px',
  borderRadius: '$md',
  backgroundColor: '$gray600',
  display: 'flex',
  justifyContent: 'center',
  padding: '$4',
})

export const TimeLineImg = styled('div', {
  width: '108px',
  height: '152px',
  borderRadius: '$md',
})

export const TimeLineBookInfo = styled('div', {
  flex: 1,
  height: '100%',
  padding: '0 $6',
  position: 'relative',
})

export const TimeLineBookInfoTitle = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',

  span: {
    fontSize: '$sm',
    color: '$gray400',
  },
})

export const TimeLineBookInfoDescription = styled('div', {
  maxHeight: '88px',
  position: 'absolute',
  bottom: '5px',
  color: '$gray300',
  opacity: 0.6,
})

export const Title = styled('header', {
  width: '110px',
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '20px',
  marginBottom: '10px',

  svg: {
    width: '40px',
    height: '40px',
    color: '#50B2C0',
  },
})

export const SubTitle = styled('h4', {
  margin: '20px 0 10px 20px',
  color: '$gray100',
})

export const ContaineOptionsBooks = styled('div', {
  width: '380px',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
})

export const OptionsBooks = styled('div', {
  height: '100vh',
  flex: 1,
  width: '100%',
  padding: '0 20px 0 20px',
})

export const TitleOptions = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '38px',

  button: {
    color: '$purple100',
    backgroundColor: 'transparent',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '$5',
    marginRight: '20px',
  },
})

export const PopularBook = styled('div', {
  width: '100%',
  borderRadius: '$md',
  marginBottom: '$2',
  display: 'flex',
  padding: '5px 8px',
  gap: '$2',
  alignItems: 'center',
  backgroundColor: '$gray700',
})

export const PopularBookImg = styled('div', {
  width: '64px',
  height: '96px',
  borderRadius: '$sm',
})

export const PopularBookInfo = styled('div', {
  flex: '1',
  paddingLeft: '20px',
})

export const PopularBookInfoTitle = styled('div', {
  marginBottom: '28px',
  span: {
    color: '$gray400',
    opacity: '0.7',
  },
})
