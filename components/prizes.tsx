"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Award, Gift, Zap, Users, Lightbulb, Code, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { JSX } from "react";

export default function PrizePool() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 md:py-32 bg-teal-950 relative overflow-hidden flex gap-4 flex-col"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute top-0 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full filter blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-300/10 rounded-full filter blur-3xl"
        ></motion.div>
      </div>

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Prize Pool</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Compete for over $50,000 in prizes across multiple categories and tracks.
        </p>
      </motion.div>

      {/* Prize Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[ 
          { title: "Grand Prize", description: "Overall Winner", amount: "$10,000", icon: <Trophy /> },
          { title: "Runner Up", description: "Second Place", amount: "$5,000", icon: <Award /> },
          { title: "Third Place", description: "Third Place", amount: "$2,500", icon: <Gift /> }
        ].map((prize, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
          >
            <Card className="bg-teal-800/30 backdrop-blur-sm border border-teal-700 rounded-xl p-8 hover:border-teal-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                  {prize.icon}
                </div>
                <CardTitle className="text-2xl">{prize.title}</CardTitle>
                <CardDescription>{prize.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-4xl font-bold">{prize.amount}</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Badge variant="outline" className="px-3 py-1">1 Winner</Badge>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Tabs for Tracks and Special Awards */}
      <Tabs defaultValue="tracks" className="mt-4 max-w-6xl mx-auto bg-teal-800/30 backdrop-blur-sm border border-teal-700 rounded-xl p-8 hover:border-teal-500/50 transition-all duration-300">
        <TabsList className="grid w-full grid-cols-2 rounded-full bg-teal-800/30">
          <TabsTrigger value="tracks" className="rounded-full">Track Prizes</TabsTrigger>
          <TabsTrigger value="special" className="rounded-full">Special Awards</TabsTrigger>
        </TabsList>

        {/* Track Prizes */}
        <TabsContent value="tracks" className="mt-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[ 
              { title: "AI/ML Track", icon: <Zap />, amount: "$3,000" },
              { title: "Web3 Track", icon: <Globe />, amount: "$3,000" },
              { title: "Developer Tools Track", icon: <Code />, amount: "$3,000" },
              { title: "Social Impact Track", icon: <Users />, amount: "$3,000" }
            ].map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="bg-teal-800/30 backdrop-blur-sm border border-teal-700 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      {track.icon}
                      <CardTitle>{track.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{track.amount}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        {/* Special Awards */}
        <TabsContent value="special" className="mt-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { title: "Most Innovative", icon: <Lightbulb />, amount: "$2,000" },
              { title: "Best UI/UX", icon: <Users />, amount: "$2,000" },
              { title: "Best Technical Implementation", icon: <Code />, amount: "$2,000" },
              { title: "Audience Choice", icon: <Trophy />, amount: "$1,500" }
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="bg-teal-800/30 backdrop-blur-sm border border-teal-700 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      {award.icon}
                      <CardTitle>{award.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{award.amount}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}

interface PrizeTrackProps {
  icon: JSX.Element;
  title: string;
  description: string;
  prizes: { place: string; amount: string }[];
}

const PrizeTrack = ({ icon, title, description, prizes }: PrizeTrackProps) => (
  <Card>
    <CardHeader>
      <div className="flex items-center gap-2">
        {icon}
        <CardTitle>{title}</CardTitle>
      </div>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        {prizes.map((prize, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="font-medium">{prize.place}</span>
            <span className="font-bold">{prize.amount}</span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
)

interface SpecialAwardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  amount: string;
}

const SpecialAward = ({ icon, title, description, amount }: SpecialAwardProps) => (
  <Card>
    <CardHeader>
      <div className="flex items-center gap-2">
        {icon}
        <CardTitle>{title}</CardTitle>
      </div>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-2xl font-bold">{amount}</p>
      <p className="text-muted-foreground mt-2">
        Awarded to the project demonstrating exceptional performance in this category.
      </p>
    </CardContent>
    <CardFooter>
      <Badge variant="outline" className="px-3 py-1">
        1 Winner
      </Badge>
    </CardFooter>
  </Card>
)
