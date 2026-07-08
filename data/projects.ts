import type { StaticImageData } from 'next/image'
import { becahubImg, cotiImg, electrowikiImg } from '@/data/images'

export type Proyecto = {
  id: string
  num: string
  titulo: string
  descripcion: string
  descripcionLarga: string
  tipo: string
  rol: string
  estado: string
  anio: string
  enfoque: string
  tags: string[]
  tecnologias: string[]
  acento: string
  categoria: string
  watermark: string
  nuevo?: boolean
  subtitulo?: string
  imagen: StaticImageData
  href: string
  github: string
}

export const PROYECTOS: Proyecto[] = [
  {
    id: 'electrowiki',
    num: '01',
    titulo: 'ElectroWiki',
    descripcion: 'Guía interactiva de componentes electrónicos para aprender desde cero.',
    descripcionLarga:
      'Guía interactiva de componentes electrónicos: la referencia más completa para aprender electrónica desde cero, con explicaciones claras y ejemplos prácticos.',
    tipo: 'Plataforma Web',
    rol: 'Full Stack Developer',
    estado: 'Completado',
    anio: '2024',
    enfoque: 'Educación, Electrónica',
    tags: ['Educación', 'Web'],
    tecnologias: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    acento: '#c8792e',
    categoria: 'web',
    watermark: 'APRENDE.',
    imagen: electrowikiImg,
    href: 'https://github.com/leo12L/Pagina-Electronica',
    github: 'https://github.com/leo12L/Pagina-Electronica',
  },
  {
    id: 'becahub',
    num: '02',
    titulo: 'BecaHub',
    descripcion: 'Portal que centraliza convocatorias y becas para estudiantes.',
    descripcionLarga:
      'Portal que centraliza convocatorias, requisitos y fechas de becas para que los estudiantes encuentren oportunidades académicas fácilmente.',
    tipo: 'Plataforma Web',
    rol: 'Full Stack Developer',
    estado: 'En desarrollo',
    anio: '2024',
    enfoque: 'Educación, Organización',
    tags: ['Educación', 'Plataforma'],
    tecnologias: ['Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MySQL'],
    acento: '#7a1f2b',
    categoria: 'web',
    watermark: 'ENCUENTRA.',
    imagen: becahubImg,
    href: 'https://github.com/leo12L/BecaHub',
    github: 'https://github.com/leo12L/BecaHub',
  },
  {
    id: 'coti',
    num: '03',
    titulo: 'Coti',
    descripcion: 'Herramienta para freelancers en LATAM que calcula rangos de precio justos.',
    descripcionLarga:
      'Herramienta para freelancers en LATAM que analiza el mercado, calcula tu rango de precio justo y genera propuestas profesionales en minutos.',
    tipo: 'Plataforma Web',
    rol: 'Full Stack Developer',
    estado: 'En desarrollo',
    anio: '2025',
    enfoque: 'Freelance, Finanzas',
    tags: ['Productividad', 'Web'],
    tecnologias: ['Next.js', 'TypeScript', 'IA'],
    acento: '#2a2620',
    categoria: 'web',
    watermark: 'COTIZA.',
    nuevo: true,
    subtitulo: 'Cotización con IA',
    imagen: cotiImg,
    href: '#',
    github: '#',
  },
]
