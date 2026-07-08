'use client'

import { useEffect, useState } from 'react'

import { ExperienceCard } from '@/components/molecules/ExperienceCard'
import { Lightbox } from '@/components/molecules/Lightbox'
import { PhotoStack } from '@/components/molecules/PhotoStack'
import { EXPERIENCIA } from '@/data/experience'

/** EXPERIENCIA — timeline seleccionable con stack de fotos y visor. */
export function ExperienceSection() {
  // Estado: experiencia seleccionada (controla el stack de fotos).
  const [expActiva, setExpActiva] = useState(0)
  // Estado: foto abierta en el visor (lightbox); null = cerrado.
  const [fotoAbierta, setFotoAbierta] = useState<number | null>(null)

  const experiencia = EXPERIENCIA[expActiva]
  const fotosExp = experiencia.fotos

  useEffect(() => {
    if (fotoAbierta === null) return
    const onKey = (ev: globalThis.KeyboardEvent) => {
      if (ev.key === 'Escape') setFotoAbierta(null)
      else if (ev.key === 'ArrowRight') setFotoAbierta((n) => (n === null ? n : (n + 1) % fotosExp.length))
      else if (ev.key === 'ArrowLeft')
        setFotoAbierta((n) => (n === null ? n : (n - 1 + fotosExp.length) % fotosExp.length))
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [fotoAbierta, fotosExp.length])

  return (
    <section id="experiencia" className="exp-seccion" aria-label="Experiencia">
      <header className="exp-header">
        <h2 className="exp-titulo">Experiencia</h2>
        <span className="exp-dash" />
        <p className="exp-sub">
          Mi recorrido construyendo productos digitales y creciendo como desarrollador.
        </p>
      </header>

      <div className="exp-layout">
        <div className="exp-timeline">
          {EXPERIENCIA.map((e, i) => (
            <ExperienceCard
              key={i}
              exp={e}
              active={i === expActiva}
              onClick={() => setExpActiva(i)}
            />
          ))}
        </div>

        <PhotoStack fotos={fotosExp} rol={experiencia.rol} onSelect={setFotoAbierta} />
      </div>

      {fotoAbierta !== null && (
        <Lightbox
          fotos={fotosExp}
          index={fotoAbierta}
          rol={experiencia.rol}
          onClose={() => setFotoAbierta(null)}
          onPrev={() => setFotoAbierta((n) => (n === null ? n : (n - 1 + fotosExp.length) % fotosExp.length))}
          onNext={() => setFotoAbierta((n) => (n === null ? n : (n + 1) % fotosExp.length))}
        />
      )}
    </section>
  )
}
