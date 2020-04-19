import React from 'react'
// import * as Styled from './Styled'

import Projects from '../Projects/Projects'
import Timeline from '../Timeline/Timeline'

import styled from 'styled-components'
import { device } from '../Global/Breakpoints'

const Div = styled.div`
  margin: 0;
  padding: 0;

  @media ${device.laptop} {
    margin-left: 35%;
    width: 65%;
  }

  @media ${device.laptopL} {
    margin-left: 30%;
    width: 70%;
  }
`

const Content = () => {
  return (
    <Div>
      <Projects />
      <Timeline />
    </Div>
  )
}

export default Content
