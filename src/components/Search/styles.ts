import { styled } from '@/src/pages/styles'

export const ContainerSearch = styled('div', {
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
