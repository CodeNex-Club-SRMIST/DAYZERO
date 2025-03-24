import type { Metadata } from 'next'
import Head from "next/head";
import './globals.css'

export const metadata: Metadata = {
  title: "DAYZERO",
  description: "On April 7-8, 2025, tech enthusiasts, builders, and pioneers in Web3, AI, and emerging technologies will gather for an electrifying hackathon experience. With over 2,000 participants and 600+ teams, DayZero is a hybrid event blending in-person collaboration (350 participants) with virtual innovation on Devfolio.At DayZero, we don’t just build projects – we create realworld solutions that drive impact. Our goal is to empower the next wave of tech leaders by providing them with the resources, mentorship, and funding to turn their ideas into successful ventures. And here’s the best part – we’ve partnered with top industry leaders to offer grants and funding opportunities to winning teams, helping them continue their journey beyond the hackathon. Whether you're a seasoned developer, a blockchain enthusiast, an AI researcher, or just passionate about tech, DayZero is your ultimate playground for innovation, networking, and collaboration.", 
  keywords: "SRM , codenex, SRM Hackathon, codenex hackathon, codenex SRM, SRM events, SRM University, SRM katankulathur ,Hackathons , coding competations, project showcase, cash prize, blockchan, etherium",
  openGraph: {
    title: "DAYZERO",
    description: "Unlock your developer potential with DayZero hackthon organized by codenex SRM and win cash prizes.",
    url: "https://dayzero.codenex.co.in",
    type: "website",
    // images: [
    //   {
    //     url: "/images/acadmate-banner.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Acadmate - Empowering Education",
    //   },
    // ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@acadmate",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Apple Touch Icon (iOS Home Screen Icon) */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Android Chrome Icons (Progressive Web App Support) */}
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />

        {/* Web App Manifest for PWA (Progressive Web App) */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme Color for Mobile UI Styling */}
        <meta name="theme-color" content="#ffffff" />

        {/* Essential Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        {/* Structured Data (JSON-LD) for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "DAYZERO",
              "url": "https://dayzero.codenex.co.in",
              "logo": "https://dayzero.codenex.co.in/favicon.ico",
              "sameAs": [
                // "https://www.facebook.com/acadmate",
                // "https://twitter.com/acadmate",
                // "https://www.linkedin.com/company/acadmate"
              ]
            }),
          }}
        />
      </Head>
      <body>{children}</body>
    </html>
  )
}
