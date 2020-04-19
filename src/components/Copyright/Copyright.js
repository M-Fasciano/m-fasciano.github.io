import React from 'react'
import * as Styled from './Styled'

import logo from './images/react-logo.svg'

const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
)

const Copyright = () => {
  return (
    <>
      <Styled.P>
        Made by Michele with <Emoji label="love" symbol="❤️"/> using <img src={logo} alt="React js logo" />
      </Styled.P>
      <Styled.Copy>
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </Styled.Copy>
    </>
  )
}

export default Copyright
