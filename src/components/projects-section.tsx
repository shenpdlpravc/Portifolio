"use client"

import * as React from "react"
import { projects, type ProjectCategory } from "@/data/projects"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Bot } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type FilterOption = "all" | ProjectCategory

export function ProjectsSection() {
  const [filter, setFilter] = React.useState<FilterOption>("all")

  const filteredProjects = React.useMemo(() => {
    if (filter === "all") return projects
    return projects.filter((p) => p.category === filter)
  }, [filter])

  return (
    <section id="projetos" className="w-full py-24 border-t">
    <div className="flex flex-col items-center justify-center space-y-6 mb-10 text-center">
    <h2 className="text-3xl font-bold tracking-tight">Projetos em Destaque</h2>
        
    <div className="flex flex-wrap items-center justify-center gap-2">
    <Button 
            variant={filter === "all" ? "default" : "outline"} 
            size="sm" 
            onClick={() => setFilter("all")}
          >
            Todos
    </Button>
    <Button 
            variant={filter === "bot" ? "default" : "outline"} 
            size="sm" 
            onClick={() => setFilter("bot")}
          >
            Bots
    </Button>
    <Button 
            variant={filter === "api" ? "default" : "outline"} 
            size="sm" 
            onClick={() => setFilter("api")}
          >
            APIs
    </Button>
    <Button 
            variant={filter === "landing-page" ? "default" : "outline"} 
            size="sm" 
            onClick={() => setFilter("landing-page")}
          >
            Landing Pages
    </Button>
    </div>
    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
    <div 
                key={project.id} 
                className="flex flex-col h-full rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md hover:-translate-y-1 overflow-hidden"
              >
              {project.coverImage && (
    <div className="w-full h-48 overflow-hidden border-b">
    <img 
                    src={project.coverImage} 
                    alt={`Cover de ${project.title}`} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
    </div>
              )}
    <div className="p-6 flex flex-col h-full space-y-3">
    <div className="flex items-start justify-between">
    <div className="flex items-center gap-2">
                    {project.category === "bot" && <Bot className="h-5 w-5 text-primary" />}
    <h3 className="text-xl font-semibold leading-none tracking-tight">{project.title}</h3>
    </div>
                  {project.githubLink && (
    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
    <Github className="h-5 w-5" />
    </a>
                  )}
    </div>
    <p className="text-sm text-muted-foreground flex-1">
                  {project.description}
    </p>
    <div className="flex flex-wrap gap-2 pt-4 mt-auto">
                  {project.tags.map(tag => (
    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
    </div>
                {project.docLink && (
    <div className="pt-4 mt-2">
    <Button variant="outline" size="sm" className="w-full" asChild>
    <a href={project.docLink} target="_blank" rel="noopener noreferrer">
    <ExternalLink className="mr-2 h-4 w-4" />
                        Ver Documentação
    </a>
    </Button>
    </div>
                )}
      </div>
      </div>
            ))
          ) : (
    <div className="col-span-full flex h-[200px] items-center justify-center rounded-lg border border-dashed">
    <p className="text-muted-foreground">Nenhum projeto encontrado para esta categoria.</p>
    </div>
          )}
    </div>
    </section>
  )
}
