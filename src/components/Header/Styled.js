import styled from 'styled-components'
import colours from '../../styles/export/colours.scss'
import { device } from '../Global/Breakpoints'

// HEADER
export const Header = styled.header`
  background-color: ${colours.black};
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  @media ${device.tablet} {
    height: 50vh;
    padding: 0;

    div {
      max-width: 65%;
    }
  }

  @media ${device.laptop} {
    align-items: flex-start;
    height: 100vh;
    left: 0;
    padding: 2rem;
    position: fixed;
    top: 0;
    width: 35%;

    div {
      max-width: 100%;
    }
  }

  @media ${device.laptopL} {
    padding: 4rem;
    width: 30%;
  }
`

export const H1 = styled.h1`
  background-image: -webkit-linear-gradient(90deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 30s infinite linear;
  color: ${colours.white};
  font-family: 'Major Mono Display', monospace;
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 45px;
  margin: 0;
  position: relative;
  z-index: 1;

  @-webkit-keyframes hue {
    from {
      -webkit-filter: hue-rotate(0deg);
    }
    to {
      -webkit-filter: hue-rotate(-360deg);
    }
  }

  @-moz-keyframes hue {
    from {
      -webkit-filter: hue-rotate(0deg);
    }
    to {
      -webkit-filter: hue-rotate(-360deg);
    }
  }

  @keyframes hue {
    from {
      -webkit-filter: hue-rotate(0deg);
    }
    to {
      -webkit-filter: hue-rotate(-360deg);
    }
  }
`

// INTRO
export const P = styled.p`
  color: ${colours.white};
  font-size: 1rem;
  line-height: 22px;
  letter-spacing: 1px;
  margin: 0;

  &:before {
    background-color: ${colours.white};
    content: '';
    display: block;
    height: 2px;
    margin: 1.5rem 0;
    width: 50px;
  }
`

// TITLE
export const Span = styled.span`
  color: ${colours.white};
  font-family: 'Major Mono Display', monospace;
  display: block;
  font-size: 1.125rem;
  margin-top: 0.5rem;
  font-weight: bold;
`