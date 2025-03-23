"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, Users, Clock, Lightbulb } from "lucide-react"

export default function WhatToExpect() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const expectations = [
    {
      icon: <Users className="h-10 w-10 text-teal-400" />,
      title: "2000+ Applications",
      description: "Join a competitive pool of talented individuals from across the country.",
    },
    {
      icon: <Users className="h-10 w-10 text-teal-300" />,
      title: "200+ Top Hackers Selected",
      description: "Be among the elite few chosen to participate in this exclusive event.",
    },
    {
      icon: <Clock className="h-10 w-10 text-teal-400" />,
      title: "2 Days of Intense Hacking",
      description: "Immerse yourself in a focused environment designed to push your limits.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-teal-300" />,
      title: "30+ Innovative Projects",
      description: "Witness and contribute to groundbreaking solutions across various domains.",
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
    <section className="py-20 md:py-32 bg-gradient-to-b from-teal-900 to-teal-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-teal-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-teal-300/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            WHAT TO{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-teal-500">EXPECT</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {expectations.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-teal-800/30 backdrop-blur-sm border border-teal-700 rounded-xl p-8 hover:border-teal-500/50 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{item.title}</h3>
              <p className="text-gray-300 text-center">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-teal-800/50 backdrop-blur-sm border border-teal-700 rounded-full px-6 py-3">
            <Calendar className="h-5 w-5 text-teal-400" />
            <span className="text-lg font-medium">Mark your calendar: April 7-8, 2025</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

