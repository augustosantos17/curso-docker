"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { GraduationCap, Code2, Lightbulb } from "lucide-react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Sobre <span className="text-primary">Mim</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou um estudante apaixonado por tecnologia, cursando Ciência da Computação e sempre em busca de novos
                desafios no mundo do desenvolvimento de software.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Minha jornada na programação começou com a curiosidade de entender como as coisas funcionam por trás das
                telas, e hoje me especializo em tecnologias modernas como C#, Docker, Azure e Python.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Acredito que a tecnologia tem o poder de transformar vidas e estou comprometido em criar soluções
                inovadoras que façam a diferença.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Educação</h3>
                    <p className="text-muted-foreground">Ciência da Computação</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <Code2 className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Especialização</h3>
                    <p className="text-muted-foreground">Desenvolvimento Full-Stack</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Filosofia</h3>
                    <p className="text-muted-foreground">Aprendizado Contínuo</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
