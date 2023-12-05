// #region Container-Time-Line-Book
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

export const ContainerTimeLineBookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'row!important',
})

export const ContainerTimeLineBooks = styled('div', {
  width: '708px',
  height: '100%',
})

export const TimeLineBooks = styled('div', {
  width: '100%',
  height: '90%',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  marginTop: '20px',
  '&::-webkit-scrollbar': {
    width: '7px',
  },
})

export const ItemBook = styled('div', {
  width: '100%',
  height: 'auto',
  marginBottom: '20px',
  marginTop: '1px',
  borderRadius: '$md',
  backgroundColor: '$gray600',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '$4',
})

export const InfoTimesPublish = styled('span', {
  color: '$gray400',
  opacity: '0.5',
  margin: '5px',
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
  marginBottom: '80px',
  span: {
    fontSize: '$sm',
    color: '$gray400',
  },
})

export const TimeLineBookInfoDescription = styled('div', {
  color: '$gray300',
  opacity: 0.6,
  marginTop: '20px',
})

export const Title = styled('header', {
  width: '110px',
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '20px',
  marginBottom: '20px',

  svg: {
    width: '40px',
    height: '40px',
    color: '#50B2C0',
  },
})
// #endregion

// #region Container-Perfil
export const ContainerInfoPerfil = styled('section', {
  width: '300px',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
})

export const ProfileContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$3',

  span: {
    color: '$gray400',
    opacity: '0.8',
  },
})

export const ProfileIcon = styled('div', {
  width: '72px',
  height: '72px',
  borderRadius: '$full',
})

export const TitleProfile = styled('h2', {
  fontSize: '$md',
})

export const UnderLine = styled('div', {
  width: '30px',
  height: '5px',
  backgroundImage:
    'linear-gradient(90deg, rgba(174,238,229,1) 0%, rgba(167,218,229,1) 36%, rgba(159,143,200,1) 100%)',
  marginTop: '10px',
  borderRadius: '$sm',
})

export const ItemListProfile = styled('li', {
  width: '200px',
  marginTop: '50px',
  marginLeft: '20px',
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '$5',
  svg: {
    width: '40px',
    height: '40px',
    color: '$gray500',
  },
})

export const ItemListProfileInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: '$2',

  span: {
    textAlign: 'end',
    flex: '1',
    color: '$gra400',
    opacity: '0.7',
  },
})
// #endregion

export const ContainerSearch = styled('form', {
  width: '500px',
  position: 'relative',
})

export const SearchInput = styled('input', {
  width: '100%',
  height: '50px',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  padding: '$2 $5',
  border: '1px solid $gray500',
  color: 'white',
  fontSize: '$md',
})

export const SearchIconInput = styled('button', {
  position: 'absolute',
  right: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  width: '50px',
  height: '50px',
  backgroundColor: 'transparent',
  border: 'none',
  color: 'white',

  svg: {
    width: '20px',
    height: '20px',
  },
})
