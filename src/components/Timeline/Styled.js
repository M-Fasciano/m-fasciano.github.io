import styled from 'styled-components'
import colours from '../../styles/export/colours.scss'
import { device } from '../Global/Breakpoints'

// TIMELINE
export const Section = styled.section`
  background: linear-gradient(-45deg, rgb(178, 219, 191) 0%, rgb(36, 123, 160) 100%);
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

export const List = styled.ul`
  padding: 5rem 2rem 3rem 3.5rem;
  position: relative;

  @media ${device.tablet} {
    padding: 5rem 0rem 3rem 2.75rem;
  }

  &:before,
  &:after {
    font-size: 1.25rem;
    position: absolute;
    left: 55px;
    z-index: 10;
    content: '';
    display: block;
    line-height: normal;
    width: auto;
    color: ${colours.black};
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
  margin: 0 0 0 -2px;
  padding: 0;
  position: absolute;
  top: 0;
  left: 9px;
  z-index: 1;
  width: 4px;
  height: 100%;
  background: ${colours.black};
  margin-left: 1rem;

  @media ${device.tablet} {
    left: -3px;
  } 

  &:after,
  &:before {
    height: 18px;
    width: 18px;
    position: absolute;
    z-index: 1;
    content: "";
    border: 4px solid ${colours.black};
    border-radius: 50%;
    background: ${colours.black};
  }

  &:before {
    top: 0;
    left: -7px;
  }

  &:after {
    top: calc(100% - 18px);
    left: -7px;
  }
`

// TIMELINE ITEM
export const ListItem = styled.li`
  margin-bottom: 2rem;
  position: relative;
  filter: drop-shadow(0 2px 0 rgba(0,0,0, .1));
  z-index: 2;

  &:before {
    content: '';
    height: 18px;
    width: 18px;
    position: absolute;
    top: 21px;
    right: calc(100% + 1.25rem);
    z-index: 5;
    border: 4px solid ${colours.black};
    border-radius: 50%;
    background: ${colours.white};
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
    content: '';
    position: absolute;
    top: 20px;
    right: 100%;
    height: 0;
    width: 0;
    border: 10px solid transparent;
    border-right: 10px solid ${colours.white};
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