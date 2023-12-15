import { type IData } from '../interfaces/IData.interface'

const dataNav: Array<Partial<IData>> = [
  {
    title: 'foto personal',
    img: 'https://www.dropbox.com/s/8wbz6m7ewhgn9ak/meme_gato-mini.png?raw=1'
  },
  {
    title: 'Wanderlee Max',
    icon: 'fxemoji:sunbehindcloud',
    description: 'Programador Frontend autodidacta familiarizado con las sigientes tecnologias: ',
    tec: [
      'HTML',
      'CSS',
      'JavaScript',
      'Typescript',
      'Sass',
      'Angular',
      'React',
      'Tailwind',
      'RxJs'
    ]
  },
  {
    title: 'mis skills',
    icon: 'bi:tools'
    // icon: 'flat-color-icons:old-time-camera'
  },
  {
    title: 'mis proyectos',
    icon: 'flat-color-icons:folder'
  },
  {
    title: 'clima',
    icon: 'fxemoji:sunbehindcloud'
  },
  {
    title: 'Contacto',
    subIcons: [
      'icon-park:github',
      'logos:google-gmail',
      'logos:linkedin-icon'
    ]
  },
  {
    title: 'Browser',
    icon: 'simple-icons:internetexplorer'
  },
  {
    title: 'spotify',
    icon: 'logos:spotify-icon'
  },
  {
    title: 'extras',
    subIcons: ['wpf:message', 'ic:baseline-calculate', 'ph:book-fill', 'fa-solid:graduation-cap']
  },
  {
    title: 'Ocio',
    subIcons: ['dashicons:games', 'wpf:stack-of-photos', 'vaadin:music', 'flat-color-icons:old-time-camera']
  },
  {
    title: 'Configuración',
    icon: 'icon-park-outline:config'
  }
]

export default dataNav
