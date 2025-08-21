"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "C#", level: 85, icon: "🔷" },
  { name: "Docker", level: 75, icon: "🐳" },
  { name: "Azure", level: 70, icon: "☁️" },
  { name: "Python", level: 80, icon: "🐍" },
  { name: "Git", level: 90, icon: "📝" },
  { name: "CI/CD", level: 65, icon: "🔄" },
]

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(new Array(skills.length).fill(0))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skill bars
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedLevels((prev) => {
                const newLevels = [...prev]
                newLevels[index] = skill.level
                return newLevels
              })
            }, index * 200)
          })
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Minhas <span className="text-primary">Habilidades</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-3xl">{skill.icon}</span>
                  <div>
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.level}% Proficiência</p>
                  </div>
                </div>
                <Progress value={animatedLevels[index]} className="h-3" />
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estou sempre aprendendo novas tecnologias e aprimorando minhas habilidades. Cada projeto é uma
              oportunidade de crescimento e inovação.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
