"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function PreviousExperiences() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      date: "AUGUST-SEPTEMBER 2024",
      title: "WEBCRAFT 1.0",
      description: "IMMERSIVE WORKSHOP ON WEB DEVELOPMENT",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      date: "JANUARY 2025",
      title: "GITHUB ZERO TO HERO",
      description: "WORKSHOP ON INTRODUCTION TO GIT GITHUB - MORE THAN 200 PARTICIPANTS",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      date: "MARCH 2025",
      title: "PRODUCTING 101",
      description: "HACKATHON SRMIST - INNOVATE.CODE.WIN",
      image: "/placeholder.svg?height=200&width=350",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="experience" className="py-20 md:py-32 bg-gradient-to-b from-teal-900 to-teal-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            PREVIOUS{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-teal-500">
              EXPERIENCES
            </span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-teal-800/50 border-teal-700 overflow-hidden hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={exp.image || "/placeholder.svg"}
                    alt={exp.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-400 mb-2">{exp.date}</p>
                  <h3 className="text-xl font-bold mb-2 text-white">{exp.title}</h3>
                  <p className="text-gray-300">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

