import type { StaticImageData } from 'next/image'
import {
  ethMty1,
  ethMty2,
  innovaton1,
  innovaton2,
  innovaton3,
  mit1,
  mit2,
  mit3,
  mit4,
} from '@/data/images'

export type Experiencia = {
  periodo: string
  rol: string
  lugar: string
  descripcion: string
  tags: string[]
  fotos: StaticImageData[]
}

export const EXPERIENCIA: Experiencia[] = [
  {
    periodo: '2026',
    rol: 'Innovaton 2026',
    lugar: 'BecaHub',
    descripcion:
      'Una de mis experiencias más recientes, donde trabajé en el desarrollo de BecaHub. Además de lo técnico, desarrollé mucho más mis habilidades de liderazgo, coordinando y guiando al equipo.',
    tags: ['Liderazgo', 'BecaHub', 'Trabajo en equipo'],
    fotos: [innovaton1, innovaton2, innovaton3],
  },
  {
    periodo: '2025',
    rol: 'Hackaton Ethereum México',
    lugar: 'Hackathon',
    descripcion:
      'Desarrollo de liderazgo y trabajo de networking. Una experiencia que me enseñó lo grande que puede ser el panorama nacional.',
    tags: ['Liderazgo', 'Networking', 'Blockchain'],
    fotos: [ethMty1, ethMty2],
  },
  {
    periodo: '2025',
    rol: 'Hackaton MIT',
    lugar: 'Hackathon',
    descripcion:
      'Desarrollo de habilidades de comunicación y trabajo en equipo con desconocidos, colaborando bajo presión con personas de distintos perfiles.',
    tags: ['Comunicación', 'Trabajo en equipo', 'Colaboración'],
    fotos: [mit1, mit2, mit3, mit4],
  },
]
