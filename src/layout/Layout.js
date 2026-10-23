import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Main, Page } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Page>
     <Header/>
     <Main>{children}</Main>
     <Footer/>
    </Page>
  )
}
