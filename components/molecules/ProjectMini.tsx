import Image from 'next/image'
import type { Proyecto } from '@/data/projects'

type ProjectMiniProps = {
  proyecto: Proyecto
  active: boolean
  onClick: () => void
}

/** Tarjeta pequeña del selector de proyectos. */
export function ProjectMini({ proyecto, active, onClick }: ProjectMiniProps) {
  return (
    <button
      type="button"
      className={`pf-mini${active ? ' activo' : ''}`}
      onClick={onClick}
      aria-pressed={active}
    >
      <span className="pf-mini-body">
        <span className="pf-mini-titulo">{proyecto.titulo}</span>
        <span className="pf-mini-desc">{proyecto.descripcion}</span>
        <span className="pf-mini-tags">
          {proyecto.tags.map((tag) => (
            <span key={tag} className="pf-mini-tag">
              {tag}
            </span>
          ))}
        </span>
      </span>
      <span className="pf-mini-media">
        <Image
          src={proyecto.imagen}
          alt={`Vista previa de ${proyecto.titulo}`}
          fill
          sizes="(max-width: 900px) 90vw, 18vw"
          className="pf-mini-img"
        />
      </span>
    </button>
  )
}
