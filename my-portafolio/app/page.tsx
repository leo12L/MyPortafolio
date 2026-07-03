'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

/* ─── SVG Icons ─── */

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

/* ─── Datos ─── */

const REDES = [
  { nombre: 'GitHub', href: '#', Icono: GithubIcon },
  { nombre: 'X', href: '#', Icono: XIcon },
  { nombre: 'Instagram', href: '#', Icono: InstagramIcon },
  { nombre: 'LinkedIn', href: '#', Icono: LinkedInIcon },
]

// El giro/color de la tarjeta ocurre en la primera parte del scroll; el resto
// del recorrido se usa para que termine de bajar hasta su posición final.
const LIMITE_TARJETA = 0.6

/* ─── Página ─── */

export default function Page() {
  const seccionRef = useRef<HTMLDivElement>(null)
  const tarjetaRef = useRef<HTMLDivElement>(null)
  const tarjetaEnvoltorioRef = useRef<HTMLDivElement>(null)
  const fotoRef = useRef<HTMLImageElement>(null)
  const textoHeroRef = useRef<HTMLDivElement>(null)
  const redesRef = useRef<HTMLDivElement>(null)

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

      // Tarjeta: gira 180° en horizontal, crece y pasa de blanco y negro a color
      const rotacion = progresoTarjeta * 180
      const escala = 1 + progresoTarjeta * 0.8
      const sinColor = Math.max(0, 1 - progresoTarjeta * 2)
      const saturacion = 1 + progresoTarjeta * 2.5
      const matiz = progresoTarjeta * 50

      tarjeta.style.transform = `perspective(1200px) rotateY(${rotacion}deg) scale(${escala})`
      tarjeta.style.filter = `grayscale(${sinColor}) saturate(${saturacion}) hue-rotate(${matiz}deg)`

      // Al pasar los 90° (de canto, invisible) se voltea la imagen para que,
      // ya girada, siga viéndose hacia el mismo lado que al inicio.
      if (fotoRef.current) {
        fotoRef.current.style.transform = rotacion > 90 ? 'scaleX(-1)' : 'scaleX(1)'
      }

      // Texto del hero: se desvanece y sube
      if (textoHeroRef.current) {
        textoHeroRef.current.style.opacity = String(Math.max(0, 1 - progresoTarjeta * 2.5))
        textoHeroRef.current.style.transform = `translateY(${-progresoTarjeta * 50}px)`
      }

      // Íconos de redes: se mantienen sólidos y siguen a la tarjeta mientras crece
      if (redesRef.current) {
        const alturaTarjeta = 180 // aprox. alto de .card-rotate
        const desplazamientoRedes = ((escala - 1) * alturaTarjeta) / 2
        const escalaRedes = 1 + progresoTarjeta * 0.5
        redesRef.current.style.transform = `translateY(${desplazamientoRedes}px) scale(${escalaRedes})`
      }

      // Tarjeta: inicia ARRIBA y centrada, y al bajar por el scroll se desplaza
      // hacia el centro/izquierda (una diagonal). El envoltorio está anclado al
      // centro del viewport (left:50% top:50%) y se mueve con transform en px.
      if (tarjetaEnvoltorioRef.current) {
        const remPx = 16
        const anchoTarjeta = tarjetaEnvoltorioRef.current.offsetWidth
        const altoTarjeta = tarjetaEnvoltorioRef.current.offsetHeight
        const centroViewportX = window.innerWidth / 2
        const alturaViewport = window.innerHeight

        // Horizontal: de centrada (0 respecto al centro) a 8rem del borde izq.
        const xCentrada = -anchoTarjeta / 2
        const xIzquierda = 8 * remPx - centroViewportX
        const traslacionX = xCentrada + (xIzquierda - xCentrada) * progreso

        // Vertical: de arriba (cerca del nav) a un poco por debajo del centro.
        const yArriba = -altoTarjeta / 2 - alturaViewport * 0.3
        const yFinal = -altoTarjeta / 2 + alturaViewport * 0.08
        const traslacionY = yArriba + (yFinal - yArriba) * progreso

        tarjetaEnvoltorioRef.current.style.transform = `translate(${traslacionX}px, ${traslacionY}px)`
      }
    }

    alScrollear()
    window.addEventListener('scroll', alScrollear, { passive: true })
    return () => window.removeEventListener('scroll', alScrollear)
  }, [])

  return (
    <div>
      {/* ═══════════════════════════════════════
          HERO — fondo beige sólido; la tarjeta inicia arriba y baja al scrollear
      ═══════════════════════════════════════ */}
      <section ref={seccionRef} className="hero-seccion">
        <div className="hero-pantalla">

          {/* Pastilla de navegación */}
          <div className="nav-envoltorio">
            <div className="nav-pastilla">
              <span className="nav-nombre">Leonardo Muñoz</span>
              <span className="nav-puntos">• • •</span>
            </div>
          </div>

          {/* Texto grande FULL STACK DEVELOPER */}
          <div ref={textoHeroRef} className="hero-texto">
            <div className="hero-linea-uno">
              <svg className="hero-estrella" viewBox="0 0 40 40" fill="currentColor">
                <path d="M20 0 L21.8 18.2 L40 20 L21.8 21.8 L20 40 L18.2 21.8 L0 20 L18.2 18.2 Z" />
              </svg>
              <span className="hero-titulo">FULL STACK</span>
            </div>
            <div className="hero-linea-dos">
              <span className="hero-titulo">DEVELOPER</span>
              <svg className="hero-rayo" viewBox="0 0 28 48" fill="currentColor">
                <path d="M18 0 L2 26 L13 26 L10 48 L26 22 L15 22 Z" />
              </svg>
            </div>
          </div>

          {/* Tarjeta giratoria + redes sociales */}
          <div ref={tarjetaEnvoltorioRef} className="tarjeta-envoltorio">
            <div className="tarjeta-contenedor">
              <div ref={tarjetaRef} className="card-rotate">
                <Image ref={fotoRef} src="/hero.jpg" alt="Leonardo Muñoz" fill className="card-foto" />
              </div>
              <div ref={redesRef} className="redes-sociales">
                {REDES.map(({ nombre, href, Icono }) => (
                  <a key={nombre} href={href} aria-label={nombre} className="red-boton">
                    <Icono className="red-icono" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Año y eslogan en la parte inferior */}
          <div className="hero-barra-inferior">
            <span className="hero-anio">©2026</span>
            <span className="hero-eslogan">/Creating since 2020</span>
          </div>
        </div>
      </section>
    </div>
  )
}
