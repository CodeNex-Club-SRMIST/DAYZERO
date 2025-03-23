"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Users, Briefcase } from "lucide-react"

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  const stats = [
    {
      number: "100+",
      text: "HACKATHON PROJECTS & PRODUCTS ARE BUILT",
      icon: <Code className="h-10 w-10 text-teal-400" />,
    },
    {
      number: "5,000",
      text: "MEMBERS IN THE ACTIVE TECH COMMUNITY NETWORK",
      icon: <Users className="h-10 w-10 text-teal-300" />,
    },
    {
      number: "50+",
      text: "INTERNSHIP OPPORTUNITIES PROVIDED TO PREVIOUS HACKATHONS PARTICIPANTS",
      icon: <Briefcase className="h-10 w-10 text-teal-400" />,
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-teal-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-300/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            NUMBERS{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-teal-500">
              THAT MATTER
            </span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-teal-800/30 backdrop-blur-sm border border-teal-700 rounded-xl p-8 text-center hover:border-teal-500/50 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <motion.h3
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-teal-500"
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-300">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

