"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Augusto</h3>
            <p className="text-muted-foreground leading-relaxed">
              Desenvolvedor de Software apaixonado por tecnologia e inovação, sempre em busca de novos desafios e
              aprendizados.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Sobre
              </button>
              <button
                onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Habilidades
              </button>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Projetos
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Contato
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Augusto dos Santos Barbosa. Todos os direitos reservados.
          </p>

          <Button
            onClick={scrollToTop}
            size="sm"
            variant="outline"
            className="mt-4 md:mt-0 hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Voltar ao Topo
          </Button>
        </div>
      </div>
    </footer>
  )
}
