import Sidebar from '@/src/components/Sidebar'
import React, { ReactNode } from 'react'
import { MainContainer } from './styles'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <MainContainer>
      <Sidebar />
      {children}
    </MainContainer>
  )
}

export default MainLayout
