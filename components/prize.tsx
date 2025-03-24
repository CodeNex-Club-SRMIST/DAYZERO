"use client";

import React, { useRef } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
import { Trophy, Badge } from "lucide-react"
import { motion } from "framer-motion"

const Prize = () => {
    const ref = useRef(null)
  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <Card ref={ref} className="relative items-center justify-center overflow-hidden bg-teal-950">
      <CardHeader className="text-center pb-2">
        <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
          < Trophy />
        </div>
        <CardTitle className="text-2xl">Grand Prize</CardTitle>
        <CardDescription>Overall Winner</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-4xl font-bold">$10,000</p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Badge className="px-3 py-1">1 Winner</Badge>
      </CardFooter>
    </Card>
  </motion.div>
  )
}

export default Prize