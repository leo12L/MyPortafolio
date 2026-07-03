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

// El recorrido original (árbol → destino) medía 620vh (420 de hero + 200 de
// "sección dos"). Al terminar, el destino queda acercado al montecito (imagen #7)
// y se SOSTIENE quieto durante ALTO_HOLD antes de arrancar el segundo alejamiento
// (cerca → medio → lejos). Todas las fases de antes se reescalan por
// ESCALA_ANTERIOR para conservar su mismo largo en vh dentro del total ampliado.
const ALTO_ANTERIOR = 420 + 200
const ALTO_HOLD = 100 // el destino (#7) se mantiene sólido antes de alejarse
const ALTO_ALEJAMIENTO = 260
const ALTO_TOTAL = ALTO_ANTERIOR + ALTO_HOLD + ALTO_ALEJAMIENTO
const ESCALA_ANTERIOR = ALTO_ANTERIOR / ALTO_TOTAL
// Inicio del segundo alejamiento, ya pasado el hold del destino.
const INICIO_ALEJAMIENTO = (ALTO_ANTERIOR + ALTO_HOLD) / ALTO_TOTAL

// Proporción que ocupaba el hero dentro del recorrido total,
// se usa para reconstruir las mismas fases de antes dentro de un solo progreso.
const LIMITE_HERO = 420 / ALTO_TOTAL

// La animación de la tarjeta (giro, escala, color, texto e iconos) debe
// terminar justo cuando el fondo-2 llega a su opacidad sólida (progreso 0.34
// del recorrido original, ver "salidaArbol" más abajo), para que no siga
// girando con el fondo ya quieto.
const LIMITE_TARJETA = 0.34 * ESCALA_ANTERIOR

/* ─── Página ─── */

export default function Page() {
  const seccionRef = useRef<HTMLDivElement>(null)
  const fondoRef = useRef<HTMLDivElement>(null)
  const fondoRef2 = useRef<HTMLDivElement>(null)
  const fondoDosRef = useRef<HTMLDivElement>(null)
  const fondoDosDestinoRef = useRef<HTMLDivElement>(null)
  const fondoPanoramaRef = useRef<HTMLDivElement>(null)
  const fondoMedioRef = useRef<HTMLDivElement>(null)
  const fondoMontanaRef = useRef<HTMLDivElement>(null)
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

      // Progreso "local" de cada mitad, calculado a partir del progreso único
      // de toda la sección — así todo corre sobre un solo scroll continuo.
      const progresoTarjeta = Math.min(1, progreso / LIMITE_TARJETA)
      // El desvanecimiento de la tarjeta debe conservar su ventana original de
      // 200vh (LIMITE_HERO → ESCALA_ANTERIOR), sin estirarse hacia los 260vh
      // del nuevo alejamiento añadidos después.
      const progresoSeccionDos = Math.max(
        0,
        Math.min(1, (progreso - LIMITE_HERO) / (ESCALA_ANTERIOR - LIMITE_HERO))
      )

      // Fondo: imágenes encadenadas por crossfades continuos y superpuestos
      // (sin cortes binarios), calculados directamente sobre el progreso único
      // — así se ven igual de suaves subiendo que bajando.
      const rampa = (inicio: number, fin: number) =>
        Math.min(1, Math.max(0, (progreso - inicio) / (fin - inicio)))

      // Fases del recorrido original, reescaladas por ESCALA_ANTERIOR para
      // conservar su mismo largo en vh dentro del recorrido total ampliado.
      const salidaArbol = rampa(0.2 * ESCALA_ANTERIOR, 0.34 * ESCALA_ANTERIOR) // árbol → panorámica
      const salidaPanoramica = rampa(0.56 * ESCALA_ANTERIOR, 0.74 * ESCALA_ANTERIOR) // panorámica → alejamiento (revela el montecito)
      const zoomMontecito = rampa(0.74 * ESCALA_ANTERIOR, 0.88 * ESCALA_ANTERIOR) // acercamiento notorio hacia el montecito, ya revelado
      const salidaAlejamiento = rampa(0.88 * ESCALA_ANTERIOR, 0.98 * ESCALA_ANTERIOR) // alejamiento (ya acercado) → destino

      // Alejar y volver a enfocar: tras el hold del montecito, la cámara se
      // ALEJA hasta el panorama (revela el paisaje) y luego se ACERCA a la
      // montaña más grande. Ocupa el tramo [A0, 1]; pa(f) mapea una fracción
      // f∈[0,1] del tramo a su progreso global.
      const A0 = INICIO_ALEJAMIENTO
      const pa = (f: number) => A0 + f * (1 - A0)

      // Escala de cámara COMPARTIDA por todas las capas de este tramo: primero
      // zoom-out (1.5 → 1.0, alejarse) y luego zoom-in (1.0 → 1.6, acercarse a
      // la montaña). Al compartir la misma escala en cada instante no hay saltos
      // en los crossfades: solo cambia la imagen de fondo bajo un movimiento
      // continuo de cámara.
      const alejar = rampa(pa(0), pa(0.42)) // fase A: 1.5 → 1.0
      const acercar = rampa(pa(0.42), pa(1)) // fase B: 1.0 → 1.6
      const escalaCamara = 1.5 - alejar * 0.5 + acercar * 0.6

      // Opacidad — Fase A (alejar): montecito → panorama.
      //           Fase B (acercar): panorama → medio → montaña.
      const opPanorama = Math.min(
        rampa(pa(0.02), pa(0.2)),
        1 - rampa(pa(0.5), pa(0.62))
      )
      const opMedio = Math.min(
        rampa(pa(0.5), pa(0.62)),
        1 - rampa(pa(0.78), pa(0.9))
      )
      const opMontana = rampa(pa(0.78), pa(0.9))

      const zoomFase = Math.min(1, progreso / (0.2 * ESCALA_ANTERIOR))
      if (fondoRef.current) {
        fondoRef.current.style.transform = `scale(${1 + zoomFase * 0.6})`
        fondoRef.current.style.opacity = String(1 - salidaArbol)
      }
      if (fondoRef2.current) {
        fondoRef2.current.style.transform = `scale(${1.2 - salidaArbol * 0.2})`
        fondoRef2.current.style.opacity = String(Math.min(salidaArbol, 1 - salidaPanoramica))
      }

      // Tarjeta: gira 360° en horizontal, crece x2.4 y pasa de blanco y negro a color
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
        const alturaTarjeta = 210 // debe coincidir con .card-rotate en card-rotate.css
        const desplazamientoRedes = ((escala - 1) * alturaTarjeta) / 2
        const escalaRedes = 1 + progresoTarjeta * 0.5
        redesRef.current.style.transform = `translateY(${desplazamientoRedes}px) scale(${escalaRedes})`
      }

      // Alejamiento: primero se revela (entra cerca y se aleja, 1.15 → 1.0)
      // y, ya revelado, hace un acercamiento notorio hacia el montecito
      // (el punto marcado) antes de cambiar a la imagen de destino
      if (fondoDosRef.current) {
        const escalaRevelado = 1.15 - salidaPanoramica * 0.15
        fondoDosRef.current.style.transform = `scale(${escalaRevelado + zoomMontecito * 0.5})`
        fondoDosRef.current.style.opacity = String(Math.min(salidaPanoramica, 1 - salidaAlejamiento))
      }
      if (fondoDosDestinoRef.current) {
        // El montecito llega a su zoom final (imagen #7), se sostiene durante el
        // hold y luego se ALEJA (1.5 → 1.0) mientras se desvanece hacia el panorama.
        const zoomFinal = rampa(0.88 * ESCALA_ANTERIOR, ESCALA_ANTERIOR)
        fondoDosDestinoRef.current.style.opacity = String(
          Math.min(salidaAlejamiento, 1 - rampa(pa(0.02), pa(0.2)))
        )
        fondoDosDestinoRef.current.style.transform = `scale(${1.15 + zoomFinal * 0.35 - alejar * 0.5})`
      }

      // Alejar y volver a enfocar: las 3 capas comparten escalaCamara (zoom-out
      // en la fase de alejar, zoom-in en la de acercarse a la montaña grande).
      if (fondoPanoramaRef.current) {
        fondoPanoramaRef.current.style.opacity = String(opPanorama)
        fondoPanoramaRef.current.style.transform = `scale(${escalaCamara})`
      }
      if (fondoMedioRef.current) {
        fondoMedioRef.current.style.opacity = String(opMedio)
        fondoMedioRef.current.style.transform = `scale(${escalaCamara})`
      }
      if (fondoMontanaRef.current) {
        fondoMontanaRef.current.style.opacity = String(opMontana)
        fondoMontanaRef.current.style.transform = `scale(${escalaCamara})`
      }

      // La tarjeta se mantiene sólida durante todo el recorrido del hero, y se
      // desvanece rápido apenas empezamos a bajar por la segunda mitad
      if (tarjetaEnvoltorioRef.current) {
        const desvanecimientoTarjeta = Math.min(1, progresoSeccionDos * 6)
        tarjetaEnvoltorioRef.current.style.opacity = String(1 - desvanecimientoTarjeta)
        tarjetaEnvoltorioRef.current.style.pointerEvents =
          desvanecimientoTarjeta >= 1 ? 'none' : 'auto'

        // Arranca centrada y se desplaza a 8rem del borde izquierdo al bajar
        const centradoFase = Math.min(1, progreso / (0.15 * ESCALA_ANTERIOR))
        const remPx = 16
        const anchoTarjeta = tarjetaEnvoltorioRef.current.offsetWidth
        const centroViewport = window.innerWidth / 2
        const posicionCentrada = -anchoTarjeta / 2
        const posicionIzquierda = 8 * remPx - centroViewport
        const traslacionX =
          posicionCentrada + (posicionIzquierda - posicionCentrada) * centradoFase
        tarjetaEnvoltorioRef.current.style.transform = `translate(${traslacionX}px, -50%)`
      }
    }

    alScrollear()
    window.addEventListener('scroll', alScrollear, { passive: true })
    return () => window.removeEventListener('scroll', alScrollear)
  }, [])

  return (
    <div>
      {/* ═══════════════════════════════════════
          HERO — una sola animación continua controlada por scroll
      ═══════════════════════════════════════ */}
      <section ref={seccionRef} className="hero-seccion">
        <div className="hero-pantalla">

          {/* Las 4 capas de fondo: árbol → frame intermedio → alejamiento → destino */}
          <div ref={fondoRef} className="hero-fondo" />
          <div ref={fondoRef2} className="hero-fondo-2" />
          <div ref={fondoDosRef} className="seccion-dos-fondo" />
          <div ref={fondoDosDestinoRef} className="seccion-dos-fondo-destino" />
          <div ref={fondoPanoramaRef} className="hero-fondo-panorama" />
          <div ref={fondoMedioRef} className="hero-fondo-medio" />
          <div ref={fondoMontanaRef} className="hero-fondo-montana" />
          <div className="hero-fondo-velo" />

          {/* Pastilla de navegación */}
          <div className="nav-envoltorio">
            <div className="nav-pastilla">
              <span className="nav-nombre">Leonardo Muñoz</span>
              <span className="nav-puntos">• • •</span>
            </div>
          </div>

          {/* Texto grande SOFTWARE ENGINEER */}
          <div ref={textoHeroRef} className="hero-texto">
            <div className="hero-linea-uno">
              <svg className="hero-estrella" viewBox="0 0 40 40" fill="currentColor">
                <path d="M20 0 L21.8 18.2 L40 20 L21.8 21.8 L20 40 L18.2 21.8 L0 20 L18.2 18.2 Z" />
              </svg>
              <span className="hero-titulo">FULL STACL</span>
            </div>
            <div className="hero-linea-dos">
              <span className="hero-titulo">DEVELOPER</span>
              <svg className="hero-rayo" viewBox="0 0 28 48" fill="currentColor">
                <path d="M18 0 L2 26 L13 26 L10 48 L26 22 L15 22 Z" />
              </svg>
            </div>
          </div>

          {/* Tarjeta giratoria + redes sociales — columna izquierda */}
          <div ref={tarjetaEnvoltorioRef} className="tarjeta-envoltorio">
            <div className="tarjeta-contenedor">
              <div ref={tarjetaRef} className="card-rotate">
                <Image ref={fotoRef} src="/hero.jpg" alt="Alex García" fill className="card-foto" />
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
