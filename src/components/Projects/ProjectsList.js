import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import * as Styled from './Styled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const ProjectsList = props => {
  const data = useStaticQuery(graphql`
    query imageQuery {
      source: allFile(filter: { absolutePath: { regex: "/images/projects/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 720) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {props.projects.map((project, index) => (
        <Styled.ParentDiv key={project.id}>
          <Styled.ChildDiv>
            { console.log(data.source.edges) }
            <Img key={index} fluid={data.source.edges[index].node.childImageSharp.fluid} />
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
