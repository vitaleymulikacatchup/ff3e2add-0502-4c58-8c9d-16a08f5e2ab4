"use client";

import { motion } from "motion/react";

interface BackgroundGradientBarsProps {
  bars?: number;
  backgroundColor?: string;
  colors?: string[];
}

export const BackgroundGradientBars = ({
  bars = 20,
  backgroundColor = "black",
  colors = ["#e60a64", "transparent"],
}: BackgroundGradientBarsProps) => {
  const gradientStyle = `linear-gradient(to top, ${colors.join(", ")})`;
  return (
    <div
      className={`absolute inset-0 z-0 overflow-hidden bg-${backgroundColor}`}
    >
      <div className="flex h-full w-full">
        {Array.from({ length: bars }).map((_, index) => {
          const position = index / (bars - 1);
          const center = 0.5;
          const distance = Math.abs(position - center);
          const scale = 0.3 + 0.7 * Math.pow(distance * 2, 1.2);

          return (
            <motion.div
              key={`bg-bar-${index}`}
              className="flex-1 origin-bottom"
              style={{ background: gradientStyle }}
              animate={{
                scaleY: [scale, scale + 0.1, scale],
                opacity: [1, 0.95, 1],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
                delay: index * 0.5,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
