import React from 'react'
import Particles from 'react-particles-js'

const canvasStyle = {
  opacity: '0.5',
  position: 'absolute',
  left: '0',
  right: '0',
  bottom: '0',
  top: '0',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
}

const particles = () => {
  return (
    <Particles
      style={canvasStyle}
      params={{
        particles: {
          number: {
            value: 15,
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
            },
          },
        },
      }}
    />
  )
}

export default particles
