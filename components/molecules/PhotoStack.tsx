import Image from 'next/image'
import type { StaticImageData } from 'next/image'

type PhotoStackProps = {
  fotos: StaticImageData[]
  rol: string
  onSelect: (index: number) => void
}

/** Stack de fotos abanicado de la experiencia seleccionada. */
export function PhotoStack({ fotos, rol, onSelect }: PhotoStackProps) {
  return (
    <div className="exp-fotos">
      {fotos.map((foto, i, arr) => {
        const centro = (arr.length - 1) / 2
        const rot = (i - centro) * 6
        const desliz = (i - centro) * 14
        return (
          <button
            key={i}
            type="button"
            className="exp-foto"
            style={{
              transform: `translate(calc(-50% + ${desliz}px), -50%) rotate(${rot}deg)`,
              zIndex: i + 1,
            }}
            onClick={() => onSelect(i)}
            aria-label={`Ver foto ${i + 1} de ${rol}`}
          >
            <Image
              src={foto}
              alt={`${rol} — foto ${i + 1}`}
              fill
              sizes="(max-width: 900px) 80vw, 30vw"
              className="exp-foto-img"
            />
          </button>
        )
      })}
    </div>
  )
}
