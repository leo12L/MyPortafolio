'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

import { ArrowRightIcon, ArrowUpRightIcon, FlagIcon, UserIcon } from '@/components/atoms/icons'
import { SocialLinks } from '@/components/molecules/SocialLinks'
import { imgPerfil } from '@/data/images'
import { LIMITE_TARJETA } from '@/lib/constants'

/**
 * HERO — contenido a la izquierda; la foto ocupa la mitad derecha y con el
 * scroll se transforma en card. Al final se revela el perfil (Sobre mí).
 */
export function Hero() {
  const seccionRef = useRef<HTMLDivElement>(null)
  const pantallaRef = useRef<HTMLDivElement>(null)
  const tarjetaRef = useRef<HTMLDivElement>(null)
  const tarjetaEnvoltorioRef = useRef<HTMLDivElement>(null)
  const fotoRef = useRef<HTMLImageElement>(null)
  const textoHeroRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const alScrollear = () => {
      const seccion = seccionRef.current
      const tarjeta = tarjetaRef.current
      if (!seccion || !tarjeta) return

      const rect = seccion.getBoundingClientRect()
      const totalDesplazable = seccion.offsetHeight - window.innerHeight
      const desplazado = Math.max(0, -rect.top)
      const progreso = Math.min(1, desplazado / totalDesplazable)

      // El giro/color de la tarjeta corre más rápido que el recorrido completo.
      const progresoTarjeta = Math.min(1, progreso / LIMITE_TARJETA)

      const vw = window.innerWidth
      const vh = window.innerHeight

      // Un solo avance (p) controla tamaño, posición, giro y color, para que la
      // transformación sea coherente. La foto empieza ocupando la mitad DERECHA
      // (a media pantalla, como fondo) y se convierte en una card arriba-izq.
      const p = progresoTarjeta

      const anchoPanel = vw * 0.5           // media pantalla al inicio
      const anchoCard = 370                 // ancho de la card al final
      const altoCard = 560                  // alto de la card al final
      const izquierdaFinal = vw * 0.12      // ~12% del borde izquierdo
      const arribaFinal = (vh - altoCard) / 2 // centrada verticalmente

      const ancho = anchoPanel + (anchoCard - anchoPanel) * p
      const alto = vh + (altoCard - vh) * p
      const left = vw * 0.5 + (izquierdaFinal - vw * 0.5) * p
      const top = arribaFinal * p

      // Card: se encoge, se redondea, gira 180° y pasa de blanco y negro a color.
      tarjeta.style.height = `${alto}px`
      tarjeta.style.borderRadius = `${p * 24}px`
      tarjeta.style.transform = `perspective(1600px) rotateY(${p * 180}deg)`
      tarjeta.style.filter = `grayscale(${1 - p})`

      // Al pasar los 90° (de canto) se voltea la imagen para que, ya girada, se
      // siga viendo hacia el mismo lado.
      if (fotoRef.current) {
        fotoRef.current.style.transform = p > 0.5 ? 'scaleX(-1)' : 'scaleX(1)'
      }

      // Envoltorio: lleva el ancho (la card lo hereda al 100%) y la posición.
      if (tarjetaEnvoltorioRef.current) {
        const env = tarjetaEnvoltorioRef.current
        env.style.left = `${left}px`
        env.style.top = `${top}px`
        env.style.width = `${ancho}px`
      }

      // Texto del hero: se desvanece y sube.
      if (textoHeroRef.current) {
        textoHeroRef.current.style.opacity = String(Math.max(0, 1 - p * 2))
        textoHeroRef.current.style.transform = `translateY(${-p * 40}px)`
      }

      // Fondo: cambia de color de forma continua según el scroll — un color al
      // inicio del recorrido y otro al final (sin banda fija).
      if (pantallaRef.current) {
        const c1 = [241, 238, 232] // #f1eee8 crema (inicio)
        const c2 = [228, 232, 236] // #e4e8ec azul grisáceo claro (final)
        // NOTA: el original usa (c1[i] - c1[i]) = 0, por lo que el fondo no cambia.
        // Se conserva igual para no alterar el comportamiento visual. Para activar
        // la transición, reemplazar por (c2[i] - c1[i]).
        const cz = (i: number) => Math.round(c1[i] + (c1[i] - c1[i]) * progreso)
        pantallaRef.current.style.backgroundColor = `rgb(${cz(0)}, ${cz(1)}, ${cz(2)})`
      }

      // Bloques "Sobre mí / Aspiraciones": aparecen cuando la card ya está en su
      // sitio (segunda parte del recorrido).
      if (infoRef.current) {
        const op = Math.max(0, Math.min(1, (progreso - 0.55) / 0.25))
        infoRef.current.style.opacity = String(op)
        infoRef.current.style.pointerEvents = op > 0.5 ? 'auto' : 'none'
      }
    }

    alScrollear()
    window.addEventListener('scroll', alScrollear, { passive: true })
    return () => window.removeEventListener('scroll', alScrollear)
  }, [])

  return (
    <section ref={seccionRef} id="inicio" className="hero-seccion">
      <div ref={pantallaRef} className="hero-pantalla">
        {/* Contenido izquierdo */}
        <div ref={textoHeroRef} className="hero-texto">
          <h1 className="hero-titulo">
            Full Stack
            <br />
            Developer
          </h1>

          <p className="hero-subtitulo">
            Construyo productos digitales simples, rápidos y bien pensados.
          </p>

          <div className="hero-botones">
            <a href="#proyectos" className="btn btn-primario">
              Ver proyectos
              <ArrowUpRightIcon className="btn-icono" />
            </a>
            <a href="#contacto" className="btn btn-secundario">
              Contactar
              <ArrowRightIcon className="btn-icono" />
            </a>
          </div>

          <div className="hero-social">
            <SocialLinks linkClassName="social-item" iconClassName="social-icono" showLabel />
          </div>
        </div>

        {/* Foto (mitad derecha) que se transforma en card */}
        <div ref={tarjetaEnvoltorioRef} className="tarjeta-envoltorio">
          <div className="tarjeta-contenedor">
            <div ref={tarjetaRef} className="card-rotate">
              <Image ref={fotoRef} src={imgPerfil} alt="Leonardo Muñoz" fill className="card-foto" />
            </div>
          </div>
        </div>

        {/* ── Estado final (perfil): se revela al hacer scroll ── */}
        <div ref={infoRef} className="hero-info">
          {/* Bloques de contenido a la derecha */}
          <div className="perfil-bloques">
            <div className="perfil-bloque perfil-bloque--sobre">
              <div className="perfil-bloque-texto">
                <span className="perfil-etiqueta">Perfil personal</span>
                <h2 className="perfil-titulo">Sobre mí</h2>
                <span className="perfil-dash" />
                <p className="perfil-parrafo">
                  Desarrollador full stack enfocado en crear productos digitales claros, rápidos y
                  bien pensados. Me interesa cuidar tanto la experiencia visual como el código que
                  sostiene cada proyecto, buscando siempre soluciones simples a problemas complejos.
                </p>
              </div>
              <div className="perfil-icono">
                <UserIcon />
              </div>
            </div>

            <div className="perfil-separador" />

            <div className="perfil-bloque perfil-bloque--asp">
              <div className="perfil-icono">
                <FlagIcon />
              </div>
              <div className="perfil-bloque-texto">
                <h2 className="perfil-titulo">Aspiraciones</h2>
                <p className="perfil-parrafo">
                  Quiero seguir creciendo como desarrollador, aportar en proyectos con impacto real y
                  aprender de equipos que empujan la calidad. Mi meta es crear productos que la gente
                  disfrute usar y que resuelvan necesidades de verdad.
                </p>
              </div>
            </div>
          </div>

          {/* Footer: solo redes a la derecha */}
          <div className="perfil-footer">
            <div className="perfil-footer-der">
              <SocialLinks linkClassName="perfil-social" iconClassName="perfil-social-ico" />
            </div>
          </div>
        </div>
      </div>
      {/* Ancla del navbar: punto del scroll donde "Sobre mí" queda visible */}
      <span id="sobre-mi" className="hero-ancla-sobremi" aria-hidden="true" />
    </section>
  )
}
