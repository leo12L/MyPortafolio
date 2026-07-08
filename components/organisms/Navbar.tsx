/** Navbar flotante fijo con menú desplegable al pasar el ratón. */
export function Navbar() {
  return (
    <nav className="nav-envoltorio" aria-label="Navegación principal">
      <div className="nav-menu">
        <div className="nav-pastilla">
          <span className="nav-nombre">Leonardo Muñoz</span>
          <span className="nav-puntos">···</span>
          <div className="nav-links">
            <a href="#inicio" className="nav-link">Inicio</a>
            <a href="#sobre-mi" className="nav-link">Sobre mí</a>
            <a href="#experiencia" className="nav-link">Experiencia</a>
            <a href="#proyectos" className="nav-link">Proyectos</a>
            <a href="#skills" className="nav-link">Habilidades</a>
            <a href="#contacto" className="nav-link">Contacto</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
