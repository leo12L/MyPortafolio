import { ContactSection } from '@/components/organisms/ContactSection'
import { ExperienceSection } from '@/components/organisms/ExperienceSection'
import { Hero } from '@/components/organisms/Hero'
import { Navbar } from '@/components/organisms/Navbar'
import { ProjectsSection } from '@/components/organisms/ProjectsSection'
import { StackSection } from '@/components/organisms/StackSection'

/** Estructura de la página: ensambla los organisms en orden. */
export function PortfolioTemplate() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ExperienceSection />
      <ProjectsSection />
      <StackSection />
      <ContactSection />
    </div>
  )
}
