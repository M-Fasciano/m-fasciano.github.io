import React from 'react'
import * as Styled from './Styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Social = () => {
  return (
    <Styled.SocialList>
      <li>
        <a
          href="https://github.com/M-Fasciano"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
      </li>
      <li>
        <a
          href="https://codepen.io/m-fasciano"
          target="_blank"
          rel="noopener noreferrer"
        >
          Codepen
          <FontAwesomeIcon icon={['fab', 'codepen']} />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/Michele-Fasciano-front-end-web-developer-142030352544894/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
          <FontAwesomeIcon icon={['fab', 'facebook']} />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/webmf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/michele-fasciano-66110824/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </a>
      </li>
    </Styled.SocialList>
  )
}

export default Social
