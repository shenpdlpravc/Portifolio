import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { Reveal } from "@/components/reveal"

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      <Reveal delay={0.1}>
        <AboutSection />
      </Reveal>

      <div className="container mx-auto px-4 md:px-6 w-full">
        <Reveal delay={0.2}>
          <ProjectsSection />
        </Reveal>
      
        <Reveal delay={0.2}>
          <section id="contato" className="py-24 border-t">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Vamos conversar?</h2>
              <p className="text-muted-foreground mb-8">Estou sempre aberto a novas oportunidades e desafios interessantes.</p>
              <Button size="lg" asChild>
                <a href="mailto:seu@email.com">Enviar Mensagem</a>
              </Button>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  )
}
