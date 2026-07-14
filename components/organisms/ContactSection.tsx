import { ArrowUpRightIcon } from '@/components/atoms/icons'
import { SocialLinks } from '@/components/molecules/SocialLinks'
import { EMAIL_COMPOSE_URL } from '@/lib/constants'

/** CONTACTO — Trabajemos juntos. */
export function ContactSection() {
  return (
    <section id="contacto" className="cta-seccion" aria-label="Contacto">
      <div className="cta-inner">
        <span className="cta-etiqueta">Contacto</span>
        <h2 className="cta-titulo">Trabajemos juntos</h2>
        <p className="cta-sub">
          ¿Tienes un proyecto en mente o una idea que quieras construir? Escríbeme y hablemos de cómo
          puedo ayudarte a hacerla realidad.
        </p>
        <a
          href={EMAIL_COMPOSE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-boton"
        >
          Enviar un correo
          <ArrowUpRightIcon className="cta-boton-flecha" />
        </a>

        <div className="cta-redes">
          <SocialLinks linkClassName="cta-red" iconClassName="cta-red-ico" showLabel />
        </div>
      </div>

      <div className="cta-pie">
        <span>© {new Date().getFullYear()} Leonardo Muñoz</span>
        <span>Full Stack Developer</span>
      </div>
    </section>
  )
}
