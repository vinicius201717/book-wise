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
} from './styles'
import { BookOpen, BookmarkSimple, Books, User, UserList } from 'phosphor-react'

import book1 from '@/src/assets/Book (1).png'
import avatar from '@/src/assets/Avatar.png'

import Image from 'next/image'
import StarRatings from 'react-star-ratings'
import { Search } from '@/src/components/Search'

export default function Perfil() {
  return (
    <MainLayout>
      <MainContainer>
        <Container>
          <ContainerTimeLineBooks>
            <Title>
              <User />
              <h2>Perfil</h2>
            </Title>
            <Search type="text" placeholder="Buscar livro avaliado" />
            <TimeLineBooks>
              <div>
                <InfoTimesPublish>Há 2 dias</InfoTimesPublish>
                <ItemBook>
                  <ContainerTimeLineBookInfo>
                    <Image src={book1} alt="" />
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
                <Image src={avatar} width={72} alt=""></Image>
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
