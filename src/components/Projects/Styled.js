import styled from 'styled-components'
import { colours } from '../Global/Variables'
import { device } from '../Global/Breakpoints'
 
// PROJECTS
export const Section = styled.section`
  background-color: ${colours.aquamarine};
  padding: 4rem 2rem 0;
  position: relative;

  @media ${device.tablet} {
    padding-left: 0;
    padding-right: 0;
  }
`

export const SectionInner = styled.div`
  @media ${device.tablet} {
    margin-left: auto;
    margin-right: auto;
    max-width: 65%;
  }
`

export const H2 = styled.h2`
  color: ${colours.black};
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
`

// PROJECTS LIST
export const ParentDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  position: relative;

  li {
    display: inline-block;
    font-weight: bold;
    font-size: 0.875rem;

    &:last-child:after {
      content: '';
    }

    &:after {
      color: ${colours.mediumGrey};
      content: '•';
      padding: 0 .5rem;
    }
  }
`

export const ChildDiv = styled.div`
  padding-bottom: 56.25%;
  position: relative;
  overflow: hidden;
  
  &:after {
    background-color: rgba(0,0,0, 0.7);
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }  
`

export const ChildInnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  left: 0;
  height: 100%;
  padding: 1rem;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;

  @media ${device.laptopL} {
    padding: 2rem;
  }

  h2 {
    color: ${colours.white};
    font-weight: 500;
    margin: 0;
    position: relative;

    @media ${device.laptop} {
      font-size: 2rem;
    }
  }
`

export const Picture = styled.picture`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

export const P = styled.p`
  color: ${colours.black};
  font-size: 1rem;
  margin: 0.5rem 0 0;

  strong {
    font-weight: bold;
    font-size: 0.875rem;
  }

  a {
    color: ${colours.black};
    font-weight: bold;
    margin-left: 0.5rem;
    text-decoration: none;
    position: relative;
    z-index: 15;
    
    span {
      margin-right: 7px;
    }

    &:hover {
      color: ${colours.mediumGrey};
      transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
`

// PROJECTS SHAPES
export const Container = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 10;

  @media ${device.laptop} {
    display: block;
  }
`