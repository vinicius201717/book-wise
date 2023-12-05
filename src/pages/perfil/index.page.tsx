import MainLayout from '@/src/layouts/DefaultLayout'
import {
  MainContainer,
  Container,
  ContainerInfoPerfil,
  TimeLineBooks,
  Title,
  ItemBook,
  ContainerTimeLineBooks,
  TimeLineBookInfo,
  TimeLineBookInfoTitle,
  TimeLineBookInfoDescription,
  ContainerTimeLineBookInfo,
  InfoTimesPublish,
  ProfileContainer,
  ProfileIcon,
  TitleProfile,
  UnderLine,
  ItemListProfileInfo,
  ItemListProfile,
  ContainerSearch,
  SearchInput,
  SearchIconInput,
} from './styles'
import {
  BookOpen,
  BookmarkSimple,
  Books,
  MagnifyingGlass,
  User,
  UserList,
} from 'phosphor-react'

import Image from 'next/image'
import StarRatings from 'react-star-ratings'
import { useForm } from 'react-hook-form'
import z from 'zod'

const searchSchema = z.object({
  search: z.string(),
})

type SearchData = z.infer<typeof searchSchema>

async function handleSearch(data: SearchData) {
  console.log(data)
}

export default function Perfil() {
  const { register, handleSubmit } = useForm<SearchData>({})

  return (
    <MainLayout>
      <MainContainer>
        <Container>
          <ContainerTimeLineBooks>
            <Title>
              <User />
              <h2>Perfil</h2>
            </Title>
            <ContainerSearch onSubmit={handleSubmit(handleSearch)}>
              <SearchInput
                type="text"
                placeholder="Procurar livro"
                {...register('search')}
              />
              <SearchIconInput type="submit">
                <MagnifyingGlass />
              </SearchIconInput>
            </ContainerSearch>
            <TimeLineBooks>
              <div>
                <InfoTimesPublish>Há 2 dias</InfoTimesPublish>
                <ItemBook>
                  <ContainerTimeLineBookInfo>
                    <Image
                      src="/assets/Book1.png"
                      alt=""
                      width={150}
                      height={200}
                    />
                    <TimeLineBookInfo>
                      <p>Entendendo Algoritmos</p>
                      <TimeLineBookInfoTitle>
                        <span>Adtya Bhargava</span>
                      </TimeLineBookInfoTitle>
                      <StarRatings
                        starRatedColor="yellow"
                        starEmptyColor="gray"
                        numberOfStars={5}
                        starDimension="20"
                      />
                    </TimeLineBookInfo>
                  </ContainerTimeLineBookInfo>
                  <TimeLineBookInfoDescription>
                    Nec tempor nunc in egestas. Euismod nisi eleifend at et in
                    sagittis. Penatibus id vestibulum imperdiet a at imperdiet
                    lectu... Nec tempor nunc in egestas. Euismod nisi eleifend
                    at et in sagittis. Penatibus id vestibulum imperdiet a at
                    imperdiet lectu... Nec tempor nunc in egestas. Euismod nisi
                    eleifend at et in sagittis. Penatibus id vestibulum
                    imperdiet a at imperdiet lectu... Nec tempor nunc in
                    egestas. Euismod nisi eleifend at et in sagittis. Nec tempor
                    nunc in egestas. Euismod nisi eleifend at et in sagittis.
                    Penatibus id vestibulum imperdiet a at imperdiet lectu...
                    Nec tempor nunc in egestas. Euismod nisi eleifend at et in
                    sagittis. Penatibus id vestibulum imperdiet a at imperdiet
                    lectu... Nec tempor nunc in egestas. Euismod nisi eleifend
                    at et in sagittis.
                  </TimeLineBookInfoDescription>
                </ItemBook>
              </div>
            </TimeLineBooks>
          </ContainerTimeLineBooks>
          <ContainerInfoPerfil>
            <ProfileContainer>
              <ProfileIcon>
                <Image
                  src="/assets/Avatar.png"
                  width={72}
                  height={72}
                  alt=""
                ></Image>
              </ProfileIcon>
              <TitleProfile>Cristofer Rosser</TitleProfile>
              <span>membro desde 2019</span>
              <UnderLine />
            </ProfileContainer>
            <ul>
              <ItemListProfile>
                <BookOpen />
                <ItemListProfileInfo>
                  2912
                  <span>Páginas lidas</span>
                </ItemListProfileInfo>
              </ItemListProfile>
              <ItemListProfile>
                <Books />
                <ItemListProfileInfo>
                  10
                  <span>Livros avaliados</span>
                </ItemListProfileInfo>
              </ItemListProfile>
              <ItemListProfile>
                <UserList />
                <ItemListProfileInfo>
                  8<span>Autores lidos</span>
                </ItemListProfileInfo>
              </ItemListProfile>
              <ItemListProfile>
                <BookmarkSimple />
                <ItemListProfileInfo>
                  Computação
                  <span>Categoria mais lida</span>
                </ItemListProfileInfo>
              </ItemListProfile>
            </ul>
          </ContainerInfoPerfil>
        </Container>
      </MainContainer>
    </MainLayout>
  )
}
