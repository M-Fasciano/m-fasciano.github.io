import React from 'react'
import { useInView } from 'react-intersection-observer'
import * as Styled from './Styled'

// require('intersection-observer')

const TimelineItem = props => {
  const [ref, inView] = useInView({
    threshold: 0.75,
    triggerOnce: true,
  })

  return (
    <Styled.ListItem ref={ref}>
      <Styled.ListItemInner className={inView ? 'active' : ''}>
        <h2>{props.data.title}</h2>
        <h3>{props.data.company}</h3>
        <span>{props.data.date}</span>
        <p>{props.data.desc}</p>
      </Styled.ListItemInner>
    </Styled.ListItem>
  )
}

export default TimelineItem
