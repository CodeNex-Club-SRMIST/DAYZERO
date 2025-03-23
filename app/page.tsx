import Hero from "@/components/hero"
import About from "@/components/about"
import PreviousExperiences from "@/components/previous-experiences"
import Stats from "@/components/stats"
import Audience from "@/components/audience"
import WhatToExpect from "@/components/what-to-expect"
import Timeline from "@/components/timeline"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/fotter"
import PrizePool from "@/components/prizes"

export default function Home() {
  return (
    <main className="min-h-screen bg-teal-950 text-white overflow-hidden dark">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Audience />
      <WhatToExpect />
      <PrizePool />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  )
}

