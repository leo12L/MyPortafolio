import Image from 'next/image'
import type { StaticImageData } from 'next/image'

type LightboxProps = {
  fotos: StaticImageData[]
  index: number
  rol: string
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

/** Visor de fotos a pantalla completa (presentacional). */
export function Lightbox({ fotos, index, rol, onClose, onPrev, onNext }: LightboxProps) {
  const seguro = Math.min(index, fotos.length - 1)
  return (
    <div
      className="exp-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Visor de fotos"
      onClick={onClose}
    >
      <button className="exp-lb-cerrar" onClick={onClose} aria-label="Cerrar">
        ✕
      </button>

      {fotos.length > 1 && (
        <button
          className="exp-lb-nav exp-lb-prev"
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          aria-label="Foto anterior"
        >
          ‹
        </button>
      )}

      <div className="exp-lb-marco" onClick={(e) => e.stopPropagation()}>
        <Image src={fotos[seguro]} alt={`${rol} — foto ${seguro + 1}`} className="exp-lb-foto" />
      </div>

      {fotos.length > 1 && (
        <button
          className="exp-lb-nav exp-lb-next"
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          aria-label="Foto siguiente"
        >
          ›
        </button>
      )}
    </div>
  )
}
