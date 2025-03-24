"use client"
import React from 'react'
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Image from 'next/image'
import ETH from "../public/title1.png"
import silver1 from "../public/silver1.png"
import silver2 from "../public/silver2.png"

const sponsorsData = {
    TITLE: [
        // { id: 1, name: "ETHIndia", logo: ETH, website: "https://example.com" },
    ],
    DIAMOND: [
        { id: 1, name: "Acme Corporation", logo: "/placeholder.svg?height=80&width=200", website: "https://example.com" },
        { id: 2, name: "TechGiant", logo: "/placeholder.svg?height=80&width=200", website: "https://example.com" },
        { id: 3, name: "Globex Industries", logo: "/placeholder.svg?height=80&width=200", website: "https://example.com" },
    ],
    GOLD: [
        { id: 4, name: "Initech", logo: "/placeholder.svg?height=70&width=180", website: "https://example.com" },
        { id: 5, name: "Massive Dynamic", logo: "/placeholder.svg?height=70&width=180", website: "https://example.com" },
        { id: 6, name: "Cyberdyne Systems", logo: "/placeholder.svg?height=70&width=180", website: "https://example.com" },
        { id: 7, name: "Stark Industries", logo: "/placeholder.svg?height=70&width=180", website: "https://example.com" },
        { id: 8, name: "Wayne Enterprises", logo: "/placeholder.svg?height=70&width=180", website: "https://example.com" },
    ],
    SILVER: [
        { id: 9, name: "6 Pistons", logo: silver1, website: "https://example.com" },
        { id: 10, name: "6 Pistons", logo: silver2, website: "https://example.com" },
        { id: 11, name: "ETHIndia", logo: ETH, website: "https://example.com" },
    ],
}

// Tier styling configuration
const tierConfig = {
    TITLE: {
        title: "Title Sponsors",
        borderColor: "",
        bgColor: "",
        shadowColor: "",
    },
    DIAMOND: {
        title: "Platinum Sponsors",
        borderColor: "border-slate-300",
        bgColor: "bg-gradient-to-b from-slate-50 to-slate-100",
        shadowColor: "shadow-slate-200/50",
    },
    GOLD: {
        title: "Gold Sponsors",
        borderColor: "border-amber-200",
        bgColor: "bg-gradient-to-b from-amber-50 to-amber-100/50",
        shadowColor: "shadow-amber-200/30",
    },
    SILVER: {
        title: "Silver Sponsors",
        borderColor: "border-gray-200",
        bgColor: "bg-gradient-to-b from-gray-50 to-gray-100/50",
        shadowColor: "shadow-gray-200/30",
    },
}

const Sponcers = () => {
    return (
        <div className="py-20 md:py-32 bg-gradient-to-b from-teal-900 to-teal-950 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/3 right-0 w-64 h-64 bg-teal-400/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-teal-300/10 rounded-full filter blur-3xl"></div>
            </div>
            <div className='container'>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center mb-12"
                >
                    Our Sponsors
                </motion.h2>

                {/* Render each tier section */}
                {Object.entries(sponsorsData).map(([tier, sponsors], tierIndex) => (
                    <div key={tier} className="mb-16">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: tierIndex * 0.1 }}
                            className="text-2xl font-semibold mb-6 text-center"
                        >
                            {tierConfig[tier as keyof typeof tierConfig].title}
                        </motion.h3>

                        <div className="flex flex-wrap justify-center gap-6">
                            {/* Render sponsors in this tier */}
                            {sponsors.map((sponsor, index) => (
                                <motion.div
                                    key={sponsor.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 + tierIndex * 0.2 }}
                                    whileHover={{
                                        scale: 1.03,
                                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                    }}
                                    className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] flex flex-col items-center p-6 rounded-lg transition-all duration-300"
                                >
                                    <div className="w-full flex justify-center mb-4">
                                        <Image height={100} width={100} src={sponsor.logo} alt='logo' className='rounded-full' />
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
                    </div>
                ))}

            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-12 text-center hover:scale-50"
            >
                <button
                    onClick={() => window.location.href = "mailto:connect.codenex@gmail.com"}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm 
               font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 
               focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                    Become a Sponsor
                </button>
            </motion.div>
        </div>
    )
}

export default Sponcers