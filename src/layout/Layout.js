import React from 'react'

import Header from '../components/header'
import { Container } from '../styles/LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Container>
     <Header/>
     {children}
    </Container>
  )
}
