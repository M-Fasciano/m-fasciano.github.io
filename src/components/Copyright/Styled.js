import styled from 'styled-components'
import { colours } from '../Global/Variables'

export const P = styled.p`
  color: ${colours.white};
  font-size: 0.75rem;
  letter-spacing: 1px;
  margin: 2rem 0 0;

  img {
    position: relative;
    top: 3px;
    width: 15px;
  }
`

export const Copy = styled.p`
  color: ${colours.white};
  font-size: 0.75rem;
  letter-spacing: 1px;
  margin: .5rem 0 0;
`