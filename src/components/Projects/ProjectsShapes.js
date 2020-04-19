import React from 'react'
import { useSpring, animated } from 'react-spring'
import * as Styled from './Styled'
import Circle from '../../images/svgs/circle.svg'
import Pentagon from '../../images/svgs/pentagon.svg'
import Square from '../../images/svgs/square.svg'
import Triangle from '../../images/svgs/triangle.svg'
import '../../styles/shapes/shapes.scss'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x * .1}px, ${y * .15}px,0)`
const trans2 = (x, y) => `translate3d(${x * .05}px, ${y * .025}px,0)`
const trans3 = (x, y) => `translate3d(${x * .02}px, ${y * .03}px,0)`
const trans4 = (x, y) => `translate3d(${x * .015}px, ${y * .05}px,0)`

const Shapes = () => {
  const [props, set] = useSpring(() => ({ 
    xy: [0, 0],
    config: { 
      mass: 5, 
      tension: 750,
      friction: 150 
    } 
  }))

  return (
    <Styled.Container onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div className="shape shape--1" style={{ transform: props.xy.interpolate(trans1) }} >
        <Circle />
      </animated.div>
      <animated.div className="shape shape--2" style={{ transform: props.xy.interpolate(trans2) }} >
        <Pentagon />
      </animated.div>
      <animated.div className="shape shape--3" style={{ transform: props.xy.interpolate(trans3) }} >
        <Square />
      </animated.div>
      <animated.div className="shape shape--4" style={{ transform: props.xy.interpolate(trans4) }} >
        <Triangle />
      </animated.div>
      <animated.div className="shape shape--5" style={{ transform: props.xy.interpolate(trans4) }} >
        <Circle />
      </animated.div>
      <animated.div className="shape shape--6" style={{ transform: props.xy.interpolate(trans3) }} >
        <Pentagon />
      </animated.div>
      <animated.div className="shape shape--7" style={{ transform: props.xy.interpolate(trans2) }} >
        <Square />
      </animated.div>
      <animated.div className="shape shape--8" style={{ transform: props.xy.interpolate(trans1) }} >
        <Triangle />
      </animated.div>
      <animated.div className="shape shape--9" style={{ transform: props.xy.interpolate(trans4) }} >
        <Circle />
      </animated.div>
      <animated.div className="shape shape--10" style={{ transform: props.xy.interpolate(trans3) }} >
        <Pentagon />
      </animated.div>
      <animated.div className="shape shape--11" style={{ transform: props.xy.interpolate(trans2) }} >
        <Square />
      </animated.div>
      <animated.div className="shape shape--12" style={{ transform: props.xy.interpolate(trans1) }} >
        <Triangle />
      </animated.div>
      <animated.div className="shape shape--13" style={{ transform: props.xy.interpolate(trans1) }} >
        <Circle />
      </animated.div>
      <animated.div className="shape shape--14" style={{ transform: props.xy.interpolate(trans2) }} >
        <Pentagon />
      </animated.div>
      <animated.div className="shape shape--15" style={{ transform: props.xy.interpolate(trans3) }} >
        <Square />
      </animated.div>
      <animated.div className="shape shape--16" style={{ transform: props.xy.interpolate(trans4) }} >
        <Triangle />
      </animated.div>
    </Styled.Container>
  )
}

export default Shapes
