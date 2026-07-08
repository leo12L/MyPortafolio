import { GithubIcon, InstagramIcon, LinkedInIcon } from '@/components/atoms/icons'
import type { IconComponent } from '@/lib/types'

export type Red = { nombre: string; href: string; Icono: IconComponent }

export const REDES: Red[] = [
  { nombre: 'GitHub', href: 'https://github.com/leo12L', Icono: GithubIcon },
  {
    nombre: 'LinkedIn',
    href: 'https://www.linkedin.com/in/leonardo-mu%C3%B1oz-cavazos-b04a4938b/',
    Icono: LinkedInIcon,
  },
  { nombre: 'Instagram', href: 'https://www.instagram.com/_leonardo_mc/', Icono: InstagramIcon },
]
