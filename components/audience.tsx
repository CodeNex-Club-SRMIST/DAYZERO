"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Lightbulb, GraduationCap, Trophy } from "lucide-react"

export default function Audience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const audiences = [
    {
      title: "Product Builders",
      icon: <Lightbulb className="h-8 w-8 text-teal-400" />,
      description: "Visionaries who transform ideas into tangible products and solutions.",
    },
    {
      title: "Developers & Hackers",
      icon: <Code className="h-8 w-8 text-teal-300" />,
      description: "Skilled coders who bring technical expertise to solve complex problems.",
    },
    {
      title: "Undergraduate Student Developers",
      icon: <GraduationCap className="h-8 w-8 text-teal-400" />,
      description: "Emerging talents eager to apply their knowledge and gain real-world experience.",
    },
    {
      title: "Hackathon Champions",
      icon: <Trophy className="h-8 w-8 text-teal-300" />,
      description: "Experienced competitors who excel in high-pressure, innovative environments.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-teal-950 to-teal-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            TARGET{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-teal-500">AUDIENCE</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-teal-800/30 backdrop-blur-sm border border-teal-700 rounded-xl p-6 hover:border-teal-500/50 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{item.title}</h3>
              <p className="text-gray-300 text-center">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-3xl mx-auto text-center bg-teal-800/30 backdrop-blur-sm border border-teal-700 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Selection Process</h3>
          <p className="text-gray-300 mb-6">
            200 Final In-Person Participants will be chosen through a rigorous selection process.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 text-center">
            <div className="flex-1">
              <div className="text-3xl font-bold text-teal-400 mb-2">2000+</div>
              <p className="text-gray-300">Applications</p>
            </div>
            <div className="flex-1">
              <div className="text-3xl font-bold text-teal-300 mb-2">200+</div>
              <p className="text-gray-300">Top Hackers Selected</p>
            </div>
            <div className="flex-1">
              <div className="text-3xl font-bold text-teal-400 mb-2">2</div>
              <p className="text-gray-300">Days of Intense Hacking</p>
            </div>
            <div className="flex-1">
              <div className="text-3xl font-bold text-teal-300 mb-2">30+</div>
              <p className="text-gray-300">Innovative Projects</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

