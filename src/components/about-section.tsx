import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center md:flex-row md:space-y-0 md:space-x-12 md:text-left">
          
          {/* Avatar / Foto Placeholder */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-background bg-muted">
              <div className="flex h-full items-center justify-center text-4xl font-bold text-muted-foreground">
                M
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Construindo o futuro com <span className="text-primary bg-clip-text">código</span>
            </h1>
            
            <p className="text-muted-foreground md:text-xl leading-relaxed">
              Sou um desenvolvedor especializado em automação, criação de bots inteligentes e APIs escaláveis. Busco resolver problemas complexos com soluções simples, dinâmicas e incrivelmente responsivas.
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
              <Badge variant="secondary" className="hover:scale-105 transition-transform cursor-default">Next.js</Badge>
              <Badge variant="secondary" className="hover:scale-105 transition-transform cursor-default">React</Badge>
              <Badge variant="secondary" className="hover:scale-105 transition-transform cursor-default">TypeScript</Badge>
              <Badge variant="secondary" className="hover:scale-105 transition-transform cursor-default">Node.js</Badge>
              <Badge variant="secondary" className="hover:scale-105 transition-transform cursor-default">Tailwind CSS</Badge>
              <Badge variant="secondary" className="hover:scale-105 transition-transform cursor-default">APIs REST</Badge>
              <Badge variant="secondary" className="hover:scale-105 transition-transform cursor-default">Bots</Badge>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-6 justify-center md:justify-start">
              <Button size="lg" className="group" asChild>
                <a href="#projetos">
                  Ver Projetos
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group" asChild>
                <a href="/curriculo.pdf">
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                  Baixar Currículo
                </a>
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
