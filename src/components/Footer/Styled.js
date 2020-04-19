import styled from 'styled-components'
import colours from '../../styles/export/colours.scss'
import { device } from '../Global/Breakpoints'

export const Footer = styled.footer`
  align-items: center;
  background-color: ${colours.black};
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;
  
  @media ${device.laptop} {
    background-color: transparent;
    bottom: 0;
    display: block;
    left: 0;
    padding: 2rem;
    position: fixed;
    text-align: left;
    width: 35%;
  }

  @media ${device.laptopL} {
    padding: 2rem 4rem;
    width: 30%;
  }
`