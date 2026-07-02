import Link from "next/link"
import { Github, Linkedin, FileText, Menu } from "lucide-react"
import { Button } from "./ui/button"
import { ThemeToggle } from "./theme-toggle"
import { MobileMenu } from "./mobile-menu"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link href="/" className="font-bold text-lg tracking-tight text-foreground">
            MeuPortfólio<span className="text-primary">.dev</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/#sobre" className="transition-colors hover:text-foreground/80 text-foreground/60">Sobre</Link>
            <Link href="/#projetos" className="transition-colors hover:text-foreground/80 text-foreground/60">Projetos</Link>
            <Link href="/#contato" className="transition-colors hover:text-foreground/80 text-foreground/60">Contato</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/curriculo.pdf">
                <FileText className="mr-2 h-4 w-4" />
                Currículo
              </Link>
            </Button>
            <ThemeToggle />
          </div>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
