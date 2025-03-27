"use client"
import React from 'react'
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Image from 'next/image'
import ETH from "../public/title1.png"
import silver1 from "../public/silver1.png"
import silver2 from "../public/silver2.png"
import interviewbuddy from "../public/image.png"
import codenex from "../public/logo.png"
import ased from "../public/assendex.png"
import way from "../public/3way.jpg"

const sponsors = [
    { id: 0, name: "Codenex", logo: codenex, website: "https://codenex.co.in" },
    { id: 1, name: "corizo", logo: silver2, website: "https://corizo.in/" },
    { id: 2, name: "ETHIndia", logo: ETH, website: "https://ethindia2024.devfolio.co/" },
    { id: 3, name: "InterviewBuddy", logo: interviewbuddy, website: "https://interviewbuddy.net/" },
    { id: 4, name: "6 Pistons", logo: silver1, website: "https://example.com" },
    { id: 4, name: "Ascendex", logo: ased, website: "https://ascendex.com/en" },
    { id: 4, name: "three way studio", logo: way, website: "https://www.threewaystudio.world/" },
]

const Sponsors = () => {
    return (
        <div className="py-20 md:py-32 bg-gradient-to-b from-teal-900 to-teal-950 relative overflow-hidden">
            <div className="container text-center z-10 relative">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold mb-12"
                >
                    Our Partners
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-6">
                    {sponsors.map((sponsor, index) => (
                        <motion.div
                            key={sponsor.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            }}
                            className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] flex flex-col items-center p-6 rounded-lg transition-all duration-300"
                        >
                            <div className="w-full flex justify-center mb-4">
                                <Image height={100} width={100} src={sponsor.logo} alt='logo' className='rounded-full aspect-square object-cover' />
                            </div>
                            <div className="text-center mt-2">
                                <h4 className="font-medium mb-3">{sponsor.name}</h4>
                                <a
                                    href={sponsor.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                                >
                                    Visit Website
                                    <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-12"
                >
                    <button
                        onClick={() => window.open("mailto:connect.codenex@gmail.com", "_self")}
                        className="inline-flex h-12 px-6 items-center justify-center rounded-lg bg-teal-800 
                           text-white text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out 
                           hover:bg-teal-900 hover:scale-105 focus:outline-none focus:ring-2 
                           focus:ring-teal-900 active:scale-95"
                    >
                        Become a Sponsor
                    </button>
                </motion.div>
            </div>
                                {/* Animated wave background */}
        <motion.div
          className="absolute inset-0 opacity-20 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
        >
          <svg className="absolute w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <motion.path
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="#0d9488"
              initial={{ y: 100, opacity: 0.2 }}
              animate={{
                y: [100, 50, 100],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
            <motion.path
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="#14b8a6"
              initial={{ y: 50, opacity: 0.1 }}
              animate={{
                y: [50, 0, 50],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
            <motion.path
              d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,149.3C672,149,768,107,864,101.3C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="#2dd4bf"
              initial={{ y: 0, opacity: 0.1 }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 18,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>
        </div>
    )
}

export default Sponsors;
