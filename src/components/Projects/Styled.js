import styled from 'styled-components'
import colours from '../../styles/export/colours.scss'
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
  padding-bottom: 4rem;
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
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 200px;
  position: relative;
  
  &:after {
    background-color: rgba(0,0,0, 0.7);
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }

  @media ${device.laptopL} {
    min-height: 300px;
  }
`

export const ChildInnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 200px;
  padding: 1rem;
  position: relative;
  z-index: 1;

  @media ${device.laptopL} {
    min-height: 300px;
  }

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

export const shape = styled.svg `
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
  height: 30px;
  width: 30px;

  &--1 {
    background-image: url("../../components/Projects/images/circle.svg");
    left: 5%;
    top: 5%;
  }

  &--2 {
    background-image: url("../../components/Projects/images/pentagon.svg");
    left: 2.5%;
    top: 15%;
    height: 25px;
    width: 25px;
  }

  &--3 {
    background-image: url("../../components/Projects/images/square.svg");
    right: 30%;
    top: 3.5%;
  }

  &--4 {
    background-image: url("../../components/Projects/images/triangle.svg");
    left: 7.5%;
    top: 25%;
  }

  &--5 {
    background-image: url("../../components/Projects/images/circle.svg");
    right: 5%;
    top: 2.5%;
    height: 25px;
    width: 25px;
  }

  &--6 {
    background-image: url("../../components/Projects/images/pentagon.svg");
    right: 20%;
    top: 35%;
  }

  &--7 {
    background-image: url("../../components/Projects/images/square.svg");
    right: 5.5%;
    top: 12.5%;
    height: 20px;
    width: 20px;
  }

  &--8 {
    background-image: url("../../components/Projects/images/triangle.svg");
    right: 8.5%;
    top: 20%;
    height: 25px;
    width: 25px;
  }

  &--9 {
    background-image: url("../../components/Projects/images/circle.svg");
    left: 2.5%;
    bottom: 0%;
    height: 25px;
    width: 25px;
  }

  &--10 {
    background-image: url("../../components/Projects/images/pentagon.svg");
    right: 7%;
    bottom: 10%;
    height: 20px;
    width: 20px;
  }

  &--11 {
    background-image: url("../../components/Projects/images/square.svg");
    left: 4.5%;
    top: 45%;
  }

  &--12 {
    background-image: url("../../components/Projects/images/triangle.svg");
    left: 5%;
    bottom: 25%;
    height: 25px;
    width: 25px;
  }

  &--13 {
    background-image: url("../../components/Projects/images/circle.svg");
    right: 5%;
    bottom: 15%;
  }

  &--14 {
    background-image: url("../../components/Projects/images/pentagon.svg");
    left: 7%;
    bottom: 7%;
  }

  &--15 {
    background-image: url("../../components/Projects/images/square.svg");
    right: 10%;
    bottom: 40%;
    height: 20px;
    width: 20px;
  }

  &--16 {
    background-image: url("../../components/Projects/images/triangle.svg");
    right: 35%;
    bottom: 30%;
  }
`
