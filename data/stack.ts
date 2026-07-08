import {
  CssIcon,
  ExpressIcon,
  GitIcon,
  GithubIcon,
  HtmlIcon,
  JavaIcon,
  JavaScriptIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  ServerIcon,
  ShellIcon,
  TailwindIcon,
  TypeScriptIcon,
} from '@/components/atoms/icons'
import type { IconComponent } from '@/lib/types'

/** Icono oficial + color de marca (ajustado para leerse sobre fondo claro). */
export const TECH: Record<string, { Icono: IconComponent; color: string }> = {
  TypeScript: { Icono: TypeScriptIcon, color: '#3178c6' },
  JavaScript: { Icono: JavaScriptIcon, color: '#e0b100' },
  Java: { Icono: JavaIcon, color: '#e76f00' },
  HTML5: { Icono: HtmlIcon, color: '#e34f26' },
  CSS3: { Icono: CssIcon, color: '#1572b6' },
  React: { Icono: ReactIcon, color: '#149eca' },
  'Next.js': { Icono: NextjsIcon, color: '#1a2338' },
  'Tailwind CSS': { Icono: TailwindIcon, color: '#0ea5c4' },
  'Node.js': { Icono: NodejsIcon, color: '#5fa04e' },
  Express: { Icono: ExpressIcon, color: '#3a4256' },
  'REST APIs': { Icono: ServerIcon, color: '#0e9488' },
  Git: { Icono: GitIcon, color: '#f05033' },
  GitHub: { Icono: GithubIcon, color: '#1a2338' },
  Shell: { Icono: ShellIcon, color: '#4b5563' },
}

export const CATEGORIAS: { titulo: string; items: string[] }[] = [
  { titulo: 'Lenguajes', items: ['TypeScript', 'JavaScript', 'Java', 'HTML5', 'CSS3'] },
  { titulo: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
  { titulo: 'Backend', items: ['Node.js', 'Express', 'REST APIs'] },
  { titulo: 'Herramientas', items: ['Git', 'GitHub', 'Shell'] },
]
