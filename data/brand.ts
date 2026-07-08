import { AiIcon, MySQLIcon, NextjsIcon, NodejsIcon, TailwindIcon, TypeScriptIcon } from '@/components/atoms/icons'
import type { IconComponent } from '@/lib/types'

/** Registro de marca para las tecnologías mostradas en proyectos. */
export const BRAND: Record<string, { Icono: IconComponent; color: string }> = {
  'Next.js': { Icono: NextjsIcon, color: '#e9e5e0' },
  TypeScript: { Icono: TypeScriptIcon, color: '#3178c6' },
  'Tailwind CSS': { Icono: TailwindIcon, color: '#38bdf8' },
  'Node.js': { Icono: NodejsIcon, color: '#5fa04e' },
  MySQL: { Icono: MySQLIcon, color: '#00758f' },
  IA: { Icono: AiIcon, color: '#a855f7' },
}
