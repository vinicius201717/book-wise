// styles.js
import { styled } from '../styles'

export const MainContainer = styled('main', {
  width: '100%',
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

export const ContainerTimeLineBooks = styled('div', {
  width: '60%',
  height: '100%',
})

export const TimeLineBooks = styled('div', {
  width: '100%',
  height: '90%',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',

  '&::-webkit-scrollbar': {
    width: '7px',
  },
})

export const ItemBook = styled('div', {
  width: '85%',
  minHeight: '400px',
  marginBottom: '20px',
  borderRadius: '$md',
  backgroundColor: '$green300',
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
  width: '35%',
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
  height: '130px',
  borderRadius: '$md',
  backgroundColor: 'red',
  marginBottom: '$2',
})
