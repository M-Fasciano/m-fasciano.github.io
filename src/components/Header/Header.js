import React from 'react'
import * as Styled from './Styled'

import Particles from './Particles'

const Header = () => (
  <Styled.Header>
    <div>
      <Styled.H1>michele fAsciAno</Styled.H1>
      <Styled.Span>front-end web developer</Styled.Span>
      <Styled.P>
        Creative front-end web developer, with focus on creating web standard code
        that works equally well on multiple devices and browsers.
      </Styled.P>
      <Particles />
    </div>
  </Styled.Header>
)

export default Header
