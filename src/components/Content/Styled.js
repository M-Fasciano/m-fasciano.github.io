import styled from 'styled-components'
import { device } from '../Global/Breakpoints'

export const Div = styled.div`
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