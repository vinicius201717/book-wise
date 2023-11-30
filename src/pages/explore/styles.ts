import { styled } from '../styles'

export const ContainerExplore = styled('div', {
  width: '100vw',
  height: '100vh',
  marginLeft: '100px',
  marginRight: '100px',
  paddingTop: '$10',
})

// #region Header

export const HeaderExplore = styled('header', {
  height: '50px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const HeaderTitleIcon = styled('div', {
  display: 'flex',
  gap: '$3',

  svg: {
    color: '$gray500',
    width: '35px',
    height: '35px',
  },

  h2: {
    color: '$white',
    fontSize: '$2xl',
  },
})

export const ContainerSearch = styled('div', {
  width: '500px',
})
// #endregion

// #region Options

export const ContainerOptions = styled('ul', {
  width: '100%',
  height: '40px',
  marginTop: '30px',
  display: 'flex',
  justifyContent: 'start',
  gap: '$5',
})

export const ItemOptions = styled('li', {
  minWidth: '70px',
  padding: '0 $3',
  border: '1px solid $purple100',
  borderRadius: '$lg',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  p: {
    fontSize: '$sm',
    color: '$purple100',
  },

  variants: {
    active: {
      true: {
        backgroundColor: '$purple100',
        p: {
          color: 'white',
        },
      },
    },
  },
})

// #endregion

// #region Book-grid

export const ContainerGrid = styled('main', {
  flex: 1,
  height: 'calc(100vh - 200px)',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  padding: '20px',
  marginTop: '20px',
  overflowY: 'auto',

  '&::-webkit-scrollbar': {
    width: '7px',
  },
})

export const BookItemGrid = styled('div', {
  flex: '1',
  height: '184px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$4',
  backgroundColor: '$gray700',
  gap: '$4',
  borderRadius: '$md',
})

export const InfoItemBook = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h2: {
    color: 'white',
  },

  span: {
    color: '$gray400',
    opacity: '0.7',
    marginBottom: '60px',
  },
})

// #endregion

// #region Dialog-Open

export const DialogBookSelected = styled('div', {
  width: '100%',
  borderRadius: '$md',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 32px',

  backgroundColor: '$gray700',

  img: {
    marginRight: '20px',
  },
})

export const DialogHeader = styled('header', {
  display: 'flex',
})

export const DialogBookSelectedInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  h2: {
    fontSize: '$lg',
    color: 'white',
  },

  span: {
    marginBottom: '140px',
    color: '$gray400',
    opacity: '0.7',
  },
})

export const DialogFooter = styled('footer', {
  width: '100%',
  height: '92px',
  display: 'flex',
  marginTop: '40px',
  borderTop: '1px solid $gray500',
})

export const DialogFooterItem = styled('div', {
  display: 'flex',
  flex: 1,
  justifyContent: 'space-around',
  alignItems: 'center',
})

export const DialogFooterSubItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  span: {
    fontSize: '$sm',
    color: '$gray400',
    opacity: '0.7',
  },
})

export const DialogOperation = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: '50px',
  marginTop: '40px',

  '& > span:nth-of-type(2)': {
    color: '$gray400',
    cursor: 'pointer',
  },
})

export const DialogContainerAssessments = styled('div', {
  width: '100%',
  height: 'calc(100vh - 530px)',
  overflowY: 'auto',
})

export const DialogAssessments = styled('div', {
  width: '100%',
  minHeight: '134px',
  padding: '$4',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray700',
  borderRadius: '$md',
})

export const DialogAssessmentsHeader = styled('header', {
  flex: '1',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '20px',
})

export const DialogAssessmentsHeaderProfile = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  div: {
    p: {
      color: 'white',
    },
  },
})

export const SpanText = styled('span', {
  color: '$gray400',
  opacity: '0.7',
  fontSize: '$sm',
})

export const DialogToAssess = styled('form', {
  variants: {
    active: {
      true: {
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        borderRadius: '$md',
        backgroundColor: '$gray700',
      },
      false: {
        display: 'none',
      },
    },
  },
})

export const DialogTextArea = styled('textarea', {
  minWidth: '100%',
  maxWidth: '100%',
  height: '200px',

  backgroundColor: '$gray600',
  border: '1px solid $gray500',
  borderRadius: '$sm',

  '&:focus': {
    outline: 'none',
  },
})

export const DialogAssessFooter = styled('footer', {
  width: '100%',
  display: 'flex',
  justifyContent: 'end',
})

export const DialogAssessActions = styled('button', {
  width: '50px',
  height: '50px',
  marginLeft: '10px',
  borderRadius: '$sm',
  backgroundColor: '$gray600',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  marginTop: '5px',
})
// #endregion
