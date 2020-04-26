import styled from 'styled-components'
import { colours } from '../Global/Variables'
import { device } from '../Global/Breakpoints'

// TIMELINE
export const Section = styled.section`
  background-color: deepskyblue;
  overflow-x: hidden;
  padding: 4rem 0;
`

export const SectionInner = styled.div`
  @media ${device.tablet} {
    margin-left: auto;
    margin-right: auto;
    max-width: 65%;
    padding: 0;
  }
`

export const H2 = styled.h2`
  color: ${colours.black};
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
  padding: 0 2rem;

  @media ${device.tablet} {
    padding: 0;
  }
`

export const List = styled.div`
  padding: 5rem 2rem 3rem 3.5rem;
  position: relative;

  @media ${device.tablet} {
    padding: 5rem 0rem 3rem 2.75rem;
  }

  &:before,
  &:after {
    color: ${colours.black};
    content: '';
    display: block;
    font-size: 1.25rem;
    left: 55px;
    line-height: normal;
    position: absolute;
    width: auto;
    z-index: 10;
  }

  &:before {
    content: "${new Date().getFullYear()}";
    top: -2px;
  }

  &:after {
    content: "2009";
    top: calc(100% - 21px);
  }
`

export const DivTimelineLine = styled.div`
  background-color: ${colours.black};
  bottom: 0;
  height: 100%;
  margin-left: 1rem;
  padding: 0;
  position: absolute;
  left: 9px;
  top: 0;
  width: 4px;
  z-index: 1;

  @media ${device.tablet} {
    left: -3px;
  } 

  &:after,
  &:before {
    background-color: ${colours.black};
    border: 4px solid ${colours.black};
    border-radius: 50%;
    content: "";
    position: absolute;
    height: 18px;
    width: 18px;
    z-index: 1;
  }

  &:before {
    left: -7px;
    top: 0;
  }

  &:after {
    left: -7px;
    bottom: 0;
  }
`

// TIMELINE ITEM
export const ListItem = styled.div`
  margin-bottom: 2rem;
  position: relative;
  filter: drop-shadow(0 2px 0 rgba(0,0,0, .1));
  z-index: 2;

  &:before {
    background-color: ${colours.white};
    border: 4px solid ${colours.black};
    border-radius: 50%;
    content: '';
    height: 18px;
    position: absolute;
    right: calc(100% + 1.25rem);
    top: 21px;
    width: 18px;
    z-index: 5;
  }
`

export const ListItemInner = styled.div`
  background-color: ${colours.white};
  border-radius: 5px;
  padding: 1rem;
  position: relative;
  filter: drop-shadow(0 2px 0 rgba(0,0,0, .1));
  z-index: 2;
  opacity: 0;
  transform: translate3d(20%,0,0);
  transition: opacity .35s cubic-bezier(.4,0,.2,1), transform .35s cubic-bezier(.4,0,.2,1);

  @media ${device.laptopL} {
    padding: 2rem;
  }

  &.active {
    opacity: 1;
    transform: translateZ(0);
  }

  &:after {
    border: 10px solid transparent;
    border-right: 10px solid ${colours.white};
    content: '';
    height: 0;
    position: absolute;
    right: 100%;
    top: 20px;
    width: 0;
  }

  h2,
  h3 {
    font-weight: bold;
    margin-bottom: .25rem;
  }

  h3 {
    font-size: 1rem;
  }

  span {
    color: ${colours.grey};
    display: inline-block;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  p {
    color: ${colours.grey};
    font-size: 1rem;
    line-height: 22px;
  }
`