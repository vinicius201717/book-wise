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
} from './styles'
import { CaretRight, ChartLineUp } from 'phosphor-react'

export default function Home() {
  return (
    <MainLayout>
      <MainContainer>
        <Container>
          <ContainerTimeLineBooks>
            <Title>
              <ChartLineUp />
              <h2>Início</h2>
            </Title>
            <SubTitle>Teste teste teste teste</SubTitle>
            <TimeLineBooks>
              <ItemBook></ItemBook>
              <ItemBook></ItemBook>
              <ItemBook></ItemBook>
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
              <PopularBook></PopularBook>
              <PopularBook></PopularBook>
              <PopularBook></PopularBook>
            </OptionsBooks>
          </ContaineOptionsBooks>
        </Container>
      </MainContainer>
    </MainLayout>
  )
}
