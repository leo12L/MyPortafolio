import { REDES } from '@/data/social'

type SocialLinksProps = {
  /** Clase del <a> de cada red. */
  linkClassName: string
  /** Clase del icono SVG. */
  iconClassName: string
  /** Muestra el nombre de la red junto al icono. */
  showLabel?: boolean
}

/** Lista de redes sociales reutilizable (hero, perfil, proyectos, contacto). */
export function SocialLinks({ linkClassName, iconClassName, showLabel = false }: SocialLinksProps) {
  return (
    <>
      {REDES.map(({ nombre, href, Icono }) => (
        <a
          key={nombre}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={nombre}
          className={linkClassName}
        >
          <Icono className={iconClassName} />
          {showLabel && <span>{nombre}</span>}
        </a>
      ))}
    </>
  )
}
