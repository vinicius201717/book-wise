import { AvatarContainer } from './styles'

type AvatarImgProps = {
  src: string
}

export function Avatar({ src }: AvatarImgProps) {
  return <AvatarContainer src={src} alt="" />
}
