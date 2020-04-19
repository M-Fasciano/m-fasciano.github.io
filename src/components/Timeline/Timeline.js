import React from 'react'
import * as Styled from './Styled'

import timelineData from '../../mocks/timeline'
import TimelineItem from './TimelineItem'

class Timeline extends React.Component {
  constructor() {
    super()
    this.state = {
      timelineData,
    }
  }

  render() {
    return (
      timelineData.length > 0 && (
        <Styled.Section>
          <Styled.SectionInner>
            <Styled.H2>Professional timeline</Styled.H2>
            <Styled.List>
              {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
              ))}
              <Styled.DivTimelineLine />
            </Styled.List>
          </Styled.SectionInner>
        </Styled.Section>
      )
    )
  }
}

export default Timeline
