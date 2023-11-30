import MainLayout from '@/src/layouts/DefaultLayout'
import {
  BookItemGrid,
  ContainerExplore,
  ContainerGrid,
  ContainerOptions,
  ContainerSearch,
  DialogAssessActions,
  DialogAssessFooter,
  DialogAssessments,
  DialogAssessmentsHeader,
  DialogAssessmentsHeaderProfile,
  DialogBookSelected,
  DialogBookSelectedInfo,
  DialogContainerAssessments,
  DialogFooter,
  DialogFooterItem,
  DialogFooterSubItem,
  DialogHeader,
  DialogOperation,
  DialogTextArea,
  DialogToAssess,
  HeaderExplore,
  HeaderTitleIcon,
  InfoItemBook,
  ItemOptions,
  SpanText,
} from './styles'
import { Binoculars, BookOpen, BookmarkSimple, X, Check } from 'phosphor-react'
import { Search } from '@/src/components/Search'
import Image from 'next/image'

import book from '@/src/assets/Book.png'
import StarRatings from 'react-star-ratings'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { Content, Overlay, Trigger } from '@/src/components/Dialog/styles'
import { Avatar } from '@/src/components/Avatar'

import avatar from '@/src/assets/Avatar.png'

export default function Explore() {
  const [open, setOpen] = useState(false)
  const [assess, setAssess] = useState(false)

  function openAssess() {
    if (assess) {
      setAssess(false)
    } else {
      setAssess(true)
    }
  }

  function closedModal() {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  return (
    <MainLayout>
      <ContainerExplore>
        <HeaderExplore>
          <HeaderTitleIcon>
            <Binoculars />
            <h2>Explorar</h2>
          </HeaderTitleIcon>
          <ContainerSearch>
            <Search type="text" placeholder="Buscar livro ou autor" />
          </ContainerSearch>
        </HeaderExplore>
        <ContainerOptions>
          <ItemOptions active={true}>
            <p>Tudo</p>
          </ItemOptions>
          <ItemOptions>
            <p>Computação</p>
          </ItemOptions>
        </ContainerOptions>
        <ContainerGrid>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Trigger>
              <BookItemGrid>
                <Image height={160} width={130} src={book} alt="" />
                <InfoItemBook>
                  <h2>A revolução dos bichos</h2>
                  <span>George Orwell</span>
                  <StarRatings
                    starRatedColor="yellow"
                    starEmptyColor="gray"
                    numberOfStars={5}
                    starDimension="20"
                  />
                </InfoItemBook>
              </BookItemGrid>
            </Trigger>
            <Dialog.Portal>
              <Overlay />
              <Content>
                <X
                  style={{ marginLeft: '95%' }}
                  width={20}
                  height={20}
                  onClick={closedModal}
                />
                <DialogBookSelected>
                  <DialogHeader>
                    <Image width={255} height={242} src={book} alt=""></Image>
                    <DialogBookSelectedInfo>
                      <h2>
                        14 Hábitos de Desenvolvedores Altamente Produtivos
                      </h2>
                      <span>Zeno Rocha</span>
                      <StarRatings
                        starDimension="20"
                        starRatedColor="yellow"
                        starEmptyColor="gray"
                        numberOfStars={5}
                      />
                    </DialogBookSelectedInfo>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogFooterItem>
                      <BookmarkSimple width={30} height={30} />
                      <DialogFooterSubItem>
                        <span>Categoria</span>
                        <p>Computação, educação</p>
                      </DialogFooterSubItem>
                    </DialogFooterItem>
                    <DialogFooterItem>
                      <BookOpen width={30} height={30} />
                      <DialogFooterSubItem>
                        <span>Categoria</span>
                        <p>Computação, educação</p>
                      </DialogFooterSubItem>
                    </DialogFooterItem>
                  </DialogFooter>
                </DialogBookSelected>
                <DialogOperation>
                  <span>Avaliações</span>
                  <span onClick={openAssess}>Avaliar</span>
                </DialogOperation>
                <DialogToAssess active={assess}>
                  <DialogAssessmentsHeader>
                    <DialogAssessmentsHeaderProfile>
                      <Avatar src={avatar} />
                      <p>Brandon Botosh</p>
                    </DialogAssessmentsHeaderProfile>
                    <StarRatings
                      rating={3}
                      starDimension="15"
                      starEmptyColor="gray"
                      starHoverColor="yellow"
                      starRatedColor="red"
                      numberOfStars={5}
                    />
                  </DialogAssessmentsHeader>
                  <DialogTextArea />
                  <DialogAssessFooter>
                    <DialogAssessActions onClick={openAssess}>
                      <X width={30} height={30} color="#8381D9" />
                    </DialogAssessActions>
                    <DialogAssessActions>
                      <Check width={30} height={30} color="#50B2C0" />
                    </DialogAssessActions>
                  </DialogAssessFooter>
                </DialogToAssess>
                <DialogContainerAssessments>
                  <DialogAssessments>
                    <DialogAssessmentsHeader>
                      <DialogAssessmentsHeaderProfile>
                        <Avatar src={avatar} />
                        <div>
                          <p>Brandon Botosh</p>
                          <SpanText>Há 2 dias</SpanText>
                        </div>
                      </DialogAssessmentsHeaderProfile>
                      <StarRatings
                        rating={3}
                        starDimension="15"
                        starEmptyColor="gray"
                        starHoverColor="yellow"
                        starRatedColor="red"
                        numberOfStars={5}
                      />
                    </DialogAssessmentsHeader>
                    <SpanText>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Illum modi voluptates mollitia beatae animi inventore
                      ratione ut quisquam ipsum, nulla delectus obcaecati nisi.
                      Esse quidem illum corporis animi voluptas minima!
                    </SpanText>
                  </DialogAssessments>
                </DialogContainerAssessments>
              </Content>
            </Dialog.Portal>
          </Dialog.Root>
        </ContainerGrid>
      </ContainerExplore>
    </MainLayout>
  )
}
