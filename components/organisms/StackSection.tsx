import { ArrowUpRightIcon, GithubIcon } from '@/components/atoms/icons'
import { CATEGORIAS, TECH } from '@/data/stack'
import { GITHUB_URL } from '@/lib/constants'

/** STACK — tecnologías por categoría. */
export function StackSection() {
  return (
    <section id="skills" className="stack-seccion" aria-label="Stack">
      <header className="st-header">
        <h2 className="st-titulo">Mi Stack</h2>
        <span className="st-dash" />
        <p className="st-sub">
          Una selección de tecnologías que uso para diseñar, construir y desplegar aplicaciones web
          full-stack.
        </p>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="st-gh">
          <GithubIcon className="st-gh-ico" /> @leo12L
          <ArrowUpRightIcon className="st-gh-ico" />
        </a>
      </header>

      <div className="st-grupos">
        {CATEGORIAS.map(({ titulo, items }) => (
          <div key={titulo} className="st-fila">
            <h3 className="st-cat">{titulo}</h3>
            <div className="st-items">
              {items.map((it) => {
                const t = TECH[it]
                return (
                  <span key={it} className="st-item">
                    <span className="st-item-ico">
                      {t && (
                        <t.Icono
                          className="st-item-svg"
                          style={{ width: 22, height: 22, color: t.color }}
                        />
                      )}
                    </span>
                    <span className="st-item-name">{it}</span>
                  </span>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
