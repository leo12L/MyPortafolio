import type { CSSProperties, ReactElement } from 'react'

/** Props comunes a todos los iconos SVG. */
export type IconProps = { className?: string; style?: CSSProperties }

/** Firma de un componente de icono. */
export type IconComponent = (p: IconProps) => ReactElement
