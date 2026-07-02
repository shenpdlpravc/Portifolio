"use client"

import * as React from "react"
import { Menu, X, FileText } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false)

  // Toggle menu
  const toggleMenu = () => setIsOpen(!isOpen)

  // Close menu when clicking a link
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-background border-b shadow-lg z-50 flex flex-col p-4 space-y-4 animate-in slide-in-from-top-2">
          <Link 
            href="/#sobre" 
            onClick={closeMenu}
            className="text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60 py-2"
          >
            Sobre
          </Link>
          <Link 
            href="/#projetos" 
            onClick={closeMenu}
            className="text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60 py-2"
          >
            Projetos
          </Link>
          <Link 
            href="/#contato" 
            onClick={closeMenu}
            className="text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60 py-2"
          >
            Contato
          </Link>
          <hr className="my-2 border-muted" />
          <Link 
            href="/curriculo.pdf" 
            onClick={closeMenu}
            className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60 py-2"
          >
            <FileText className="mr-2 h-5 w-5" />
            Currículo
          </Link>
        </div>
      )}
    </div>
  )
}
