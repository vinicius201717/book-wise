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
} from './styles'
import { CaretRight, ChartLineUp } from 'phosphor-react'

import Image from 'next/image'
import StarRatings from 'react-star-ratings'
import { api } from '@/src/lib/axios'
import { useSession } from 'next-auth/react'
import React from 'react'

export default function Home({ books }: any) {
  const session = useSession()

  return (
    <MainLayout>
      <MainContainer>
        <Container>
          <ContainerTimeLineBooks>
            <Title>
              <ChartLineUp />
              <h2>Início</h2>
            </Title>

            {books?.map((book: any) => {
              if (book.user) {
                return (
                  <React.Fragment key={book.id}>
                    <SubTitle>Sua última leitura</SubTitle>
                    <LastReading>
                      <Image src="/teste.png" alt="" />
                      <TimeLineBookInfo>
                        <TimeLineBookInfoTitle>
                          <span>Há 2 dias</span>
                          <StarRatings
                            starRatedColor="yellow"
                            starEmptyColor="gray"
                            numberOfStars={5}
                            starDimension="20"
                          />
                        </TimeLineBookInfoTitle>
                        <p>{book.title}</p>
                        <span>{book.author}</span>

                        <TimeLineBookInfoDescription>
                          {book.content}
                        </TimeLineBookInfoDescription>
                      </TimeLineBookInfo>
                    </LastReading>
                  </React.Fragment>
                )
              } else {
                return ''
              }
            })}

            <SubTitle>Avaliações mais recentes</SubTitle>
            <TimeLineBooks>
              {books.map((book: any) => {
                console.log(book)
                return (
                  <ItemBook key={book.id}>
                    <Image src={book.image} width={100} height={160} alt="" />
                    <TimeLineBookInfo>
                      <TimeLineBookInfoTitle>
                        <span>Há 2 dias</span>
                        <StarRatings
                          rating={book.assessments[0]?.rating}
                          starRatedColor="yellow"
                          starEmptyColor="gray"
                          numberOfStars={5}
                          starDimension="20"
                        />
                      </TimeLineBookInfoTitle>
                      <p>{book.title}</p>
                      <span>{book.author}</span>

                      <TimeLineBookInfoDescription>
                        {book.content}
                      </TimeLineBookInfoDescription>
                    </TimeLineBookInfo>
                  </ItemBook>
                )
              })}
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
              {books.map((book: any) => {
                if (book.assessments[0]?.rating > 3) {
                  return (
                    <PopularBook key={book.id}>
                      <PopularBookImg>
                        <Image
                          src={book.image}
                          width={60}
                          height={100}
                          alt=""
                        />
                      </PopularBookImg>
                      <PopularBookInfo>
                        <PopularBookInfoTitle>
                          <h4>A revoloção dos bichos</h4>
                          <span>George Orwell</span>
                        </PopularBookInfoTitle>
                        <StarRatings
                          starRatedColor="yellow"
                          starEmptyColor="gray"
                          numberOfStars={5}
                          name="rating"
                          starDimension="12"
                        />
                      </PopularBookInfo>
                    </PopularBook>
                  )
                } else {
                  return ''
                }
              })}
            </OptionsBooks>
          </ContaineOptionsBooks>
        </Container>
      </MainContainer>
    </MainLayout>
  )
}

export async function getServerSideProps() {
  const response = await api.get('http://localhost:3000/api/books')

  return {
    props: {
      books: response.data,
    },
  }
}
