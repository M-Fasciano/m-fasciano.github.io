import React from "react"
import "../../styles/core.scss"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

const xTwitter = {
  prefix: "fab",
  iconName: "x-twitter",
  icon: [512, 512, [], "e61b", "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z"],
}

import SEO from "../SEO/SEO"
import Header from "../Header/Header"
import Content from "../Content/Content"
import Footer from "../Footer/Footer"

library.add(fab, xTwitter)

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
