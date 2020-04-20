import styled from 'styled-components'
import { colours } from '../Global/Variables'

export const SocialList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;

  li {
    list-style: none;
    margin: 0 10px 0 0;
  }

  li a {
    align-items: center;
    border: 2px solid ${colours.white};
    border-radius: 50%;
    color: ${colours.white};
    display: flex;
    font-size: 0;
    height: 42px;
    justify-content: center;
    transition: background 0.35s ease-in-out;
    width: 42px;

    &:hover {
      background: ${colours.white};

      svg {
        transition: fill 0.35s ease-in-out;
        path {
          fill: ${colours.black};
        }
      }
    }

    svg {
      font-size: 20px;
    }
  }
`