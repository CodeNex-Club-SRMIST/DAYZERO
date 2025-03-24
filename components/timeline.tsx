"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const timelineData = [
  { number: "1", title: "Registration" },
  { number: "2", title: "Online Task" },
  { number: "3", title: "Shortlisting" },
  { number: "4", title: "Accepted Participants" },
  { number: "5", title: "DayZero Begins", subtitle: "April - 07" },
  { number: "6", title: "Final Day", subtitle: "April - 08" },
  { number: "7", title: "Post - DayZero" },
];

export default function CircularTimeline() {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 635);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const radius = isSmallScreen? 180 :250; // Adjust circle size
  const centerX = isSmallScreen? 120 : 250;
  const centerY =  250;
  const angleStep = (1.15 * Math.PI) / timelineData.length;

  return (
    <div className="min-h-screen md:h-[120vh] h-[100vh] flex bg-gradient-to-br from-teal-400 to-cyan-300 relative">
      <h1 className="absolute top-8 text-5xl font-bold text-teal-900 w-full text-center">TIMELINE</h1>

      {/* Circular Timeline Container */}
      <div className="absolute aspect-square w-96 top-12 flex items-center justify-center md:mt-64 mt-52  border-l-2 xs:pr-16 sm:pr-40 md:pr-0 pr-72">
        {/* Circle Outline */}
        {/* Circle Outline */}
        <div className={`aspect-square md:w-72 w-48 border-4 border-teal-800 rounded-full`}></div>
          {/* Inner Circle */}
          <div className="absolute aspect-square md:w-60 w-40 bg-teal-800 rounded-full"></div>

        {/* Timeline Items */}
        {timelineData.map((item, index) => {
          const angle = index * angleStep - Math.PI / 2; // Start from top
          let x = centerX + radius * Math.cos(angle) - 110; // Adjust for size
          let y = centerY + radius * Math.sin(angle) - 110;

          // Move 1 and 7 a bit farther from the circle along Y-axis
          if (index === 0) y -= 60; // Move "1" up
          if (index === timelineData.length - 1) y += 60; // Move "7" down
          if (index === 2) y += 10; // Move "1" up
          if (index === 4) y -= 10; // Move "7" down

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              style={{
                position: "absolute",
                left: `${x}px`,
                top: `${y}px`,
              }}
              className="flex items-center gap-3 bg-teal-800 rounded-full pr-6" // ✅ Added flex to align elements horizontally
            >
              <div className="md:min-w-[5rem] min-w-[3rem] md:min-h-[5rem] min-h-[3rem] bg-teal-950 text-white rounded-full shadow-lg shrink-0 flex items-center justify-center">
                <span className="text-xl font-bold">{item.number}</span>
              </div>

              {/* Title Beside the Circle */}
              <div className={`text-white text-left whitespace-nowrap ${index == 3 ? "w-20 text-wrap" : ""}`}>
                <span className="text-sm font-semibold">{item.title}</span>
                {item.subtitle && <p className="text-xs">{item.subtitle}</p>}
              </div>
            </motion.div>

          );
        })}
      </div>
    </div>
  );
}
