import * as Dialog from '@radix-ui/react-dialog'
import { Portal, Trigger } from './styles'

export function DialogComponent() {
  return (
    <Dialog.Root>
      <Trigger>Open Dialog</Trigger>
      <Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title>Your Dialog Title</Dialog.Title>
          <Dialog.Description>Dialog Description Goes Here</Dialog.Description>
          <Dialog.Close>Close Dialog</Dialog.Close>
        </Dialog.Content>
      </Portal>
    </Dialog.Root>
  )
}
