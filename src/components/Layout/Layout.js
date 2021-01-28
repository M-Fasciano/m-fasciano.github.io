import React from 'react'
import '../../styles/core.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import SEO from '../SEO/SEO'
import Header from '../Header/Header'
import Content from '../Content/Content'
import Footer from '../Footer/Footer'

library.add(fab)

const App = () => {
  return (
    <>
      <SEO />
      <Header />
      <Content />
      <Footer />
    </>
  ) 
}

export default App
