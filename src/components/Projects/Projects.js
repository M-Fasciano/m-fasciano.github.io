import React from 'react'
import * as Styled from './Styled'

import projects from '../../mocks/projects'
import ProjectsList from './ProjectsList'

class Projects extends React.Component {
  constructor() {
    super()
    this.state = {
      projects,
    }
  }

  render() {
    return (
      <Styled.Section>
        <Styled.SectionInner>
          <Styled.H2>Recent projects</Styled.H2>
          <ProjectsList projects={this.state.projects} />
        </Styled.SectionInner>
      </Styled.Section>
    )
  }
}

export default Projects
