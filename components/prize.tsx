"use client";

import React, { useRef } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Trophy, Badge } from "lucide-react";
import { motion } from "framer-motion";

const Prize = () => {
  const ref = useRef(null);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center"
    >
      <Card 
        ref={ref} 
        className="relative items-center justify-center overflow-hidden bg-teal-900 text-white
          rounded-xl shadow-lg p-6 w-full max-w-lg sm:max-w-md lg:max-w-xl"
      >
        <CardHeader className="text-center pb-4">
          {/* Trophy Icon */}
          <div className="mx-auto bg-teal-700/30 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-3">
            <Trophy className="w-12 h-12 text-yellow-400" />
          </div>
          <CardTitle className="text-3xl sm:text-4xl font-bold">Grand Prize</CardTitle>
          <CardDescription className="text-lg sm:text-xl text-teal-200">Overall Winner</CardDescription>
        </CardHeader>

        {/* Prize Amount */}
        <CardContent className="text-center">
          <p className="text-5xl sm:text-6xl font-bold">₹1,00,000</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Prize;
