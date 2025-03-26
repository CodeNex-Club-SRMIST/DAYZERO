"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-teal-950 to-teal-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            ABOUT{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-teal-500">DAYZERO</span>
          </h2>

          <div className="space-y-6 text-lg text-gray-300 text-center font-description">
            <p>Welcome to DayZero Hackathon Chennai – Where Innovation
            Begins!</p>
            <p>
            On April 7-8, 2025, tech enthusiasts, builders, and pioneers in
Web3, AI, and emerging technologies will gather for an
electrifying hackathon experience. With over 2,000
participants and 600+ teams, DayZero is a hybrid event
blending in-person collaboration (350 participants) with
virtual innovation on Devfolio.
            </p>
            <p>
            At DayZero, we don’t just build projects – we create realworld solutions that drive impact. Our goal is to empower the
next wave of tech leaders by providing them with the
resources, mentorship, and funding to turn their ideas into
successful ventures.
            </p>
            <p>
            And here’s the best part – we’ve partnered with top industry
leaders to offer grants and funding opportunities to winning
teams, helping them continue their journey beyond the
hackathon.
            </p>
            <p>
            Whether you're a seasoned developer, a blockchain
enthusiast, an AI researcher, or just passionate about tech,
DayZero is your ultimate playground for innovation,
networking, and collaboration.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

