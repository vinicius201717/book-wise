import MainLayout from '@/src/layouts/DefaultLayout'
import {
  BookItemGrid,
  ComponentIsSignIn,
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
  SearchIconInput,
  SearchInput,
  SpanText,
} from './styles'
import {
  Binoculars,
  BookOpen,
  BookmarkSimple,
  X,
  Check,
  MagnifyingGlass,
} from 'phosphor-react'
import Image from 'next/image'

import StarRatings from 'react-star-ratings'
import * as Dialog from '@radix-ui/react-dialog'
import { useEffect, useState } from 'react'
import { Content, Overlay, Trigger } from '@/src/components/Dialog/styles'
import { Avatar } from '@/src/components/Avatar'
import { api } from '@/src/lib/axios'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSession } from 'next-auth/react'

interface AssessmentsInterface {
  id: string
  rating: number
  createdAt: string
  userId: string
  postId: string
}

interface BookInterface {
  id: string
  title: string
  content: string
  image: string
  author: string
  assessments: AssessmentsInterface[]
}

export default function Explore({ books }: any) {
  const [activeCategory, setActiveCategory] = useState('tudo')
  const [booksSearch, setBooksSearch] = useState([])
  const [open, setOpen] = useState(false)
  const [assess, setAssess] = useState(false)
  const [containerIlsLogin, setContainerIsLogin] = useState(false)
  const [bookSelect, setBookSelect] = useState<BookInterface | null>(null)

  const session = useSession()

  // #region functions

  function handleBookSelected(book: BookInterface) {
    setBookSelect(book)
  }

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

  function handleSetBooks(data: any) {
    setBooksSearch(data)
  }

  async function handleSetActiveCategory(category: string) {
    setActiveCategory(category)
    if (category === 'tudo') {
      handleSetBooks(books)
    } else {
      await api.get(`/books/${category}`).then((resp) => {
        handleSetBooks(resp.data)
      })
    }
  }

  function handleVerifyIsSignIn() {
    if (session.status === 'authenticated') {
      setAssess(false)
      setContainerIsLogin(true)
    } else {
      setAssess(true)
      setContainerIsLogin(false)
    }
  }

  // #endregion

  useEffect(() => {
    handleSetBooks(books)
  }, [])

  const searchSchema = z.object({
    search: z.string(),
  })

  type SearchData = z.infer<typeof searchSchema>

  async function handleSearch(data: SearchData) {
    const results = books.filter((item: any) => {
      return item.title.toLowerCase().includes(data.search.toLowerCase())
    })
    setBooksSearch(results)
  }

  const { register, handleSubmit } = useForm<SearchData>({
    resolver: zodResolver(searchSchema),
  })
  return (
    <MainLayout>
      <ComponentIsSignIn active={assess} />
      <ContainerExplore>
        <HeaderExplore>
          <HeaderTitleIcon>
            <Binoculars />
            <h2>Explorar</h2>
          </HeaderTitleIcon>
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
        </HeaderExplore>
        <ContainerOptions>
          <ItemOptions
            active={activeCategory === 'tudo'}
            onClick={() => handleSetActiveCategory('tudo')}
          >
            <p>Tudo</p>
          </ItemOptions>
          <ItemOptions
            active={activeCategory === 'computacao'}
            onClick={() => handleSetActiveCategory('computacao')}
          >
            <p>Computação</p>
          </ItemOptions>
          <ItemOptions
            active={activeCategory === 'ficcao'}
            onClick={() => handleSetActiveCategory('ficcao')}
          >
            <p>Ficção científica</p>
          </ItemOptions>
          <ItemOptions
            active={activeCategory === 'horror'}
            onClick={() => handleSetActiveCategory('horror')}
          >
            <p>Horror</p>
          </ItemOptions>
          <ItemOptions
            active={activeCategory === 'hqs'}
            onClick={() => handleSetActiveCategory('hqs')}
          >
            <p>HQs</p>
          </ItemOptions>
          <ItemOptions
            active={activeCategory === 'suspense'}
            onClick={() => handleSetActiveCategory('suspense')}
          >
            <p>Suspense</p>
          </ItemOptions>
        </ContainerOptions>
        <ContainerGrid>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            {booksSearch?.map((book: any) => {
              return (
                <Trigger key={book.id} onClick={() => handleBookSelected(book)}>
                  <BookItemGrid>
                    <Image height={160} width={130} src={book.image} alt="" />
                    <InfoItemBook>
                      <h2>{book.title}</h2>
                      <span>{book.author}</span>
                      <StarRatings
                        rating={book.assessments[0]?.rating}
                        starRatedColor="red"
                        starEmptyColor="gray"
                        numberOfStars={5}
                        starDimension="12"
                      />
                    </InfoItemBook>
                  </BookItemGrid>
                </Trigger>
              )
            })}
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
                    <Image
                      width={255}
                      height={242}
                      src={bookSelect?.image ?? ''}
                      alt=""
                    ></Image>
                    <DialogBookSelectedInfo>
                      <h2>{bookSelect?.title}</h2>
                      <span>{bookSelect?.author}</span>
                      <StarRatings
                        rating={bookSelect?.assessments[0]?.rating}
                        starDimension="12"
                        starRatedColor="red"
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
                  <span onClick={handleVerifyIsSignIn}>Avaliar</span>
                </DialogOperation>
                <DialogToAssess active={assess}>
                  <DialogAssessmentsHeader>
                    <DialogAssessmentsHeaderProfile>
                      <Avatar src="/assets/avatar.png" />
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
                        <Avatar src="/assets/avatar.png" />
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

export async function getServerSideProps() {
  const response = await api.get('http://localhost:3000/api/books')

  return {
    props: {
      books: response.data,
    },
  }
}
