'use client'

import Image from 'next/image'
import { useState } from 'react'

import { ArrowRightIcon, GithubIcon } from '@/components/atoms/icons'
import { ProjectMini } from '@/components/molecules/ProjectMini'
import { SocialLinks } from '@/components/molecules/SocialLinks'
import { BRAND } from '@/data/brand'
import { PROYECTOS } from '@/data/projects'

/** PROYECTOS — tarjeta destacada + selector (tema claro). */
export function ProjectsSection() {
  const [activeId, setActiveId] = useState(PROYECTOS[0].id)
  const proyectoActivo = PROYECTOS.find((p) => p.id === activeId) ?? PROYECTOS[0]

  return (
    <section id="proyectos" className="proyectos-seccion" aria-label="Proyectos">
      <header className="pf-head">
        <h2 className="pf-head-titulo">Proyectos</h2>
        <span className="pf-head-dash" />
        <p className="pf-head-sub">Selección de proyectos que he diseñado y desarrollado.</p>
      </header>

      {/* ── Tarjeta destacada (proyecto activo) ── */}
      <article className="pf-card">
        <div className="pf-preview">
          <div className="pf-preview-media">
            <Image
              src={proyectoActivo.imagen}
              alt={`Vista previa de ${proyectoActivo.titulo}`}
              fill
              sizes="(max-width: 1024px) 92vw, 50vw"
              className="pf-preview-img"
              priority
            />
          </div>
        </div>

        <div className="pf-info">
          <span className="pf-eyebrow">Proyecto destacado</span>
          <h3 className="pf-titulo">{proyectoActivo.titulo}</h3>
          <p className="pf-desc">{proyectoActivo.descripcionLarga}</p>

          <div className="pf-acciones">
            <a
              href={proyectoActivo.href}
              className="pf-btn pf-btn--primario"
              {...(proyectoActivo.href !== '#'
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              Ver proyecto <ArrowRightIcon className="pf-btn-ico" />
            </a>
            <a
              href={proyectoActivo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pf-btn pf-btn--ghost"
            >
              <GithubIcon className="pf-btn-ico" /> Código en GitHub
            </a>
          </div>

          <div className="pf-sep" />

          <span className="pf-tech-lbl">Tecnologías utilizadas</span>
          <div className="pf-tech">
            {proyectoActivo.tecnologias.map((t) => {
              const marca = BRAND[t]
              return (
                <span key={t} className="pf-tech-chip">
                  {marca && (
                    <span className="pf-tech-badge" style={{ color: marca.color }}>
                      <marca.Icono className="pf-tech-ico" />
                    </span>
                  )}
                  {t}
                </span>
              )
            })}
          </div>
        </div>
      </article>

      {/* ── Selector de proyectos ── */}
      <div className="pf-grid">
        {PROYECTOS.map((p) => (
          <ProjectMini
            key={p.id}
            proyecto={p}
            active={p.id === activeId}
            onClick={() => setActiveId(p.id)}
          />
        ))}
      </div>

      {/* Footer con redes (como en la sección "Sobre mí") */}
      <div className="pf-footer">
        <SocialLinks linkClassName="pf-footer-red" iconClassName="pf-footer-red-ico" />
      </div>
    </section>
  )
}
