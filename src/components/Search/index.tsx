import { MagnifyingGlass } from 'phosphor-react'
import { ContainerSearch, SearchIconInput, SearchInput } from './styles'

type SearchData = {
  type: string
  placeholder: string
}

export function Search({ type, placeholder }: SearchData) {
  return (
    <ContainerSearch>
      <SearchInput type={type} placeholder={placeholder} />
      <SearchIconInput>
        <MagnifyingGlass />
      </SearchIconInput>
    </ContainerSearch>
  )
}
