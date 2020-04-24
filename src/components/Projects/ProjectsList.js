import React from 'react'
import * as Styled from './Styled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const ProjectsList = props => {
  return (
    <>
      {props.projects.map(project => (
        <Styled.ParentDiv key={project.id}>
          <Styled.ChildDiv>
            <Styled.Picture>
              <source type="image/webp" srcSet={project.srcWebp} />
              <source type="image/jpeg" srcSet={project.src} />
              <img src={project.src} alt={project.alt} style={{width: '100%'}} />
            </Styled.Picture>
            <Styled.ChildInnerDiv>
              <h2>{project.title}</h2>
            </Styled.ChildInnerDiv>
          </Styled.ChildDiv>
          <Styled.P>
            {project.desc}
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View project</span>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </Styled.P>
          <Styled.P>
            <strong>
              Technologies:
            </strong>
          </Styled.P>
          <ul>
            <li>{project.technologies.html}</li>
            <li>{project.technologies.js}</li>
            <li>{project.technologies.css}</li>
            <li>{project.technologies.tool}</li>
          </ul>
        </Styled.ParentDiv>
      ))}
    </>
  )
}

export default ProjectsList
