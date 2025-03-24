"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import logo from "../public/LOGO_DayZERO_Transparent.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Timeline", href: "#timeline" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border md:border-neutral-600 ${scrolled ? "md:bg-black/80 backdrop-blur-md md:py-5 py-2" : "md:bg-black/80 py-4 md:rounded-full md:top-5 md:left-5 md:right-5 md:p-5 "
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-teal-500"
          >
            <Image height={100} width={100} src={logo} alt="dayzero logo" />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <a
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector(link.href)
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 80, // Offset for the navbar height
                      behavior: "smooth",
                    })
                  }
                }}
              >
                {link.name}
              </a>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Link href="https://dayzero.devfolio.co/">
              <Button className="bg-teal-700 hover:bg-teal-600 text-white">Register Now</Button>
            </Link>

          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center"
            onClick={() => setIsOpen(false)} // Close when clicking outside
          >
            {/* Inner div to prevent closing when clicking inside */}
            <div
              className="flex flex-col items-center space-y-6"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 text-lg hover:text-white transition"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsOpen(false)
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }}
                >
                  {link.name}
                </a>
              ))}
              <Link href="https://dayzero.devfolio.co/">
                <Button className="bg-teal-700 hover:bg-teal-600 text-white w-40">Register</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

