import { styled } from '@/src/pages/styles'
import * as Dialog from '@radix-ui/react-dialog'

export const Trigger = styled(Dialog.Trigger, {
  maxHeight: '184px',
  background: 'transparent',
  border: 'none',
})

export const Content = styled(Dialog.Content, {
  width: '560px',
  height: '100vh',
  position: 'absolute',
  backgroundColor: '$gray800',
  top: '0',
  right: '0',
  padding: '$3',
  overflowY: 'auto',

  '&::-webkit-scrollbar': {
    width: '7px',
  },
})

export const Overlay = styled(Dialog.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
})
