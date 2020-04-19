import equiomImg from '../images/equiom-group.jpg'
import hyundaiImg from '../images/hyundai-life.jpg'
import wolvesImg from '../images/wolves.jpg'

const projects = [
  {
    id: 1,
    title: 'Equiom group',
    src: `${equiomImg}`,
    alt: 'Equiom group',
    desc: 'Website development for Equiom group',
    link: 'https://www.equiomgroup.com/',
    technologies: {
      html: 'HTML5',
      js: 'ES6',
      css: 'BEMIT / SCSS',
      tool: 'Gulp',
    },
  },
  {
    id: 2,
    title: 'Hyundai Life',
    src: `${hyundaiImg}`,
    alt: 'Hyundai life',
    desc: 'Website development for Hyundai Life',
    link: 'https://blog.hyundai.co.uk/',
    technologies: {
      html: 'HTML5',
      js: 'ES6',
      css: 'BEMIT / SCSS',
      tool: 'Gulp',
    },
  },
  {
    id: 3,
    title: 'Wolverhampton Wanderers F.C.',
    src: `${wolvesImg}`,
    alt: 'Wolverhampton Wanderers F.C.',
    desc: 'Website development for Wolverhampton Wanderers F.C.',
    link: 'https://www.wolves.co.uk/',
    technologies: {
      html: 'HTML5',
      js: 'ES6',
      css: 'BEM / SCSS',
      tool: 'Gulp',
    },
  },
]

export default projects
