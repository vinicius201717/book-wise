import MainLayout from '@/src/layouts/DefaultLayout'
import {
  MainContainer,
  Container,
  ContaineOptionsBooks,
  TimeLineBooks,
  Title,
  ItemBook,
  SubTitle,
  ContainerTimeLineBooks,
  TitleOptions,
  OptionsBooks,
  PopularBook,
  PopularBookImg,
  PopularBookInfo,
  PopularBookInfoTitle,
  TimeLineBookInfo,
  TimeLineBookInfoTitle,
  TimeLineBookInfoDescription,
  LastReading,
  InfoUserBook,
  ContaineTimeLineBookInfo,
  InfoUserDescription,
  InfoUserPerfil,
} from './styles'
import { CaretRight, ChartLineUp } from 'phosphor-react'

import book from '@/src/assets/Book.png'
import book1 from '@/src/assets/Book (1).png'
import avatar from '@/src/assets/Avatar.png'

import Image from 'next/image'
import { useState } from 'react'
import StarRatings from 'react-star-ratings'
import { Avatar } from '@/src/components/Avatar'

export default function Home() {
  const [rating, setRating] = useState(0)

  const changeRating = (newRating: number) => {
    setRating(newRating)
  }

  return (
    <MainLayout>
      <MainContainer>
        <Container>
          <ContainerTimeLineBooks>
            <Title>
              <ChartLineUp />
              <h2>Início</h2>
            </Title>
            <SubTitle>Sua última leitura</SubTitle>
            <LastReading>
              <Image src={book1} alt="" />
              <TimeLineBookInfo>
                <TimeLineBookInfoTitle>
                  <span>Há 2 dias</span>
                  <StarRatings
                    rating={rating}
                    starRatedColor="yellow"
                    starEmptyColor="gray"
                    numberOfStars={5}
                    starDimension="20"
                  />
                </TimeLineBookInfoTitle>
                <p>Entendendo Algoritmos</p>
                <span>Adtya Bhargava</span>

                <TimeLineBookInfoDescription>
                  Nec tempor nunc in egestas. Euismod nisi eleifend at et in
                  sagittis. Penatibus id vestibulum imperdiet a at imperdiet
                  lectu...
                </TimeLineBookInfoDescription>
              </TimeLineBookInfo>
            </LastReading>
            <SubTitle>Avaliações mais recentes</SubTitle>
            <TimeLineBooks>
              <ItemBook>
                <InfoUserBook>
                  <InfoUserPerfil>
                    <Avatar src={avatar} />
                    <InfoUserDescription>
                      <p>Jaxson Dias</p>
                      <span>Hoje</span>
                    </InfoUserDescription>
                  </InfoUserPerfil>
                  <StarRatings
                    rating={rating}
                    starRatedColor="yellow"
                    starEmptyColor="gray"
                    numberOfStars={5}
                    starDimension="20"
                  />
                </InfoUserBook>
                <ContaineTimeLineBookInfo>
                  <Image src={book1} alt="" />
                  <TimeLineBookInfo>
                    <TimeLineBookInfoTitle>
                      <span>Há 2 dias</span>
                    </TimeLineBookInfoTitle>
                    <p>Entendendo Algoritmos</p>
                    <span>Adtya Bhargava</span>

                    <TimeLineBookInfoDescription>
                      Nec tempor nunc in egestas. Euismod nisi eleifend at et in
                      sagittis. Penatibus id vestibulum imperdiet a at imperdiet
                      lectu...
                    </TimeLineBookInfoDescription>
                  </TimeLineBookInfo>
                </ContaineTimeLineBookInfo>
              </ItemBook>
              <ItemBook>
                <Image src={book1} alt="" />
                <TimeLineBookInfo>
                  <TimeLineBookInfoTitle>
                    <span>Há 2 dias</span>
                    <StarRatings
                      rating={rating}
                      starRatedColor="yellow"
                      starEmptyColor="gray"
                      numberOfStars={5}
                      starDimension="20"
                    />
                  </TimeLineBookInfoTitle>
                  <p>Entendendo Algoritmos</p>
                  <span>Adtya Bhargava</span>

                  <TimeLineBookInfoDescription>
                    Nec tempor nunc in egestas. Euismod nisi eleifend at et in
                    sagittis. Penatibus id vestibulum imperdiet a at imperdiet
                    lectu...
                  </TimeLineBookInfoDescription>
                </TimeLineBookInfo>
              </ItemBook>
              <ItemBook>
                <Image src={book1} alt="" />
                <TimeLineBookInfo>
                  <TimeLineBookInfoTitle>
                    <span>Há 2 dias</span>
                    <StarRatings
                      rating={rating}
                      starRatedColor="yellow"
                      starEmptyColor="gray"
                      numberOfStars={5}
                      starDimension="20"
                    />
                  </TimeLineBookInfoTitle>
                  <p>Entendendo Algoritmos</p>
                  <span>Adtya Bhargava</span>

                  <TimeLineBookInfoDescription>
                    Nec tempor nunc in egestas. Euismod nisi eleifend at et in
                    sagittis. Penatibus id vestibulum imperdiet a at imperdiet
                    lectu...
                  </TimeLineBookInfoDescription>
                </TimeLineBookInfo>
              </ItemBook>
              <ItemBook>
                <Image src={book1} alt="" />
                <TimeLineBookInfo>
                  <TimeLineBookInfoTitle>
                    <span>Há 2 dias</span>
                    <StarRatings
                      rating={rating}
                      starRatedColor="yellow"
                      starEmptyColor="gray"
                      numberOfStars={5}
                      starDimension="20"
                    />
                  </TimeLineBookInfoTitle>
                  <p>Entendendo Algoritmos</p>
                  <span>Adtya Bhargava</span>

                  <TimeLineBookInfoDescription>
                    Nec tempor nunc in egestas. Euismod nisi eleifend at et in
                    sagittis. Penatibus id vestibulum imperdiet a at imperdiet
                    lectu...
                  </TimeLineBookInfoDescription>
                </TimeLineBookInfo>
              </ItemBook>
              <ItemBook>
                <Image src={book1} alt="" />
                <TimeLineBookInfo>
                  <TimeLineBookInfoTitle>
                    <span>Há 2 dias</span>
                    <StarRatings
                      rating={rating}
                      starRatedColor="yellow"
                      starEmptyColor="gray"
                      numberOfStars={5}
                      starDimension="20"
                    />
                  </TimeLineBookInfoTitle>
                  <p>Entendendo Algoritmos</p>
                  <span>Adtya Bhargava</span>

                  <TimeLineBookInfoDescription>
                    Nec tempor nunc in egestas. Euismod nisi eleifend at et in
                    sagittis. Penatibus id vestibulum imperdiet a at imperdiet
                    lectu...
                  </TimeLineBookInfoDescription>
                </TimeLineBookInfo>
              </ItemBook>
            </TimeLineBooks>
          </ContainerTimeLineBooks>
          <ContaineOptionsBooks>
            <TitleOptions>
              <SubTitle>Livros populares</SubTitle>
              <button>
                Ver todos <CaretRight />
              </button>
            </TitleOptions>
            <OptionsBooks>
              <PopularBook>
                <PopularBookImg>
                  <Image src={book} alt="" />
                </PopularBookImg>
                <PopularBookInfo>
                  <PopularBookInfoTitle>
                    <h4>A revoloção dos bichos</h4>
                    <span>George Orwell</span>
                  </PopularBookInfoTitle>
                  <StarRatings
                    rating={rating}
                    starRatedColor="yellow"
                    starEmptyColor="gray"
                    changeRating={changeRating}
                    numberOfStars={5}
                    name="rating"
                    starDimension="20"
                  />
                </PopularBookInfo>
              </PopularBook>
            </OptionsBooks>
          </ContaineOptionsBooks>
        </Container>
      </MainContainer>
    </MainLayout>
  )
}
