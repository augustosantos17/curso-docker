"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Code, Database, Cloud } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-bounce" />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary/30 rounded-full animate-pulse" />
        <Code className="absolute top-32 right-40 w-8 h-8 text-primary/30 animate-bounce" />
        <Database className="absolute bottom-32 right-32 w-6 h-6 text-secondary/40 animate-pulse" />
        <Cloud className="absolute top-60 left-40 w-10 h-10 text-primary/20 animate-bounce" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
            Augusto dos Santos
            <span className="block text-primary mt-2">Barbosa</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Desenvolvedor de Software em formação, especializado em{" "}
            <span className="text-primary font-semibold">C#</span>,{" "}
            <span className="text-primary font-semibold">Docker</span>,{" "}
            <span className="text-primary font-semibold">Azure</span> e{" "}
            <span className="text-primary font-semibold">Python</span>
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Estudante de Ciência da Computação sempre em busca de novos aprendizados e tecnologias inovadoras
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg animate-pulse-glow"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Projetos
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg bg-transparent"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Entre em Contato
            </Button>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-primary hover:text-primary/80 transition-colors duration-200"
          >
            <ArrowDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  )
}
