import type { Experiencia } from '@/data/experience'

type ExperienceCardProps = {
  exp: Experiencia
  active: boolean
  onClick: () => void
}

/** Ítem del timeline de experiencia (botón seleccionable). */
export function ExperienceCard({ exp, active, onClick }: ExperienceCardProps) {
  return (
    <button
      type="button"
      className={`exp-item${active ? ' activo' : ''}`}
      onClick={onClick}
      aria-pressed={active}
    >
      <span className="exp-periodo">{exp.periodo}</span>
      <div className="exp-contenido">
        <h3 className="exp-rol">{exp.rol}</h3>
        <p className="exp-lugar">{exp.lugar}</p>
        <p className="exp-desc">{exp.descripcion}</p>
        <div className="exp-tags">
          {exp.tags.map((t) => (
            <span key={t} className="exp-tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </button>
  )
}
