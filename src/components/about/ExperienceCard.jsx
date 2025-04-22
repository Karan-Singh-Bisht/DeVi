import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ExperienceCard = ({ bgColor, image, title, para }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  // Check screen width on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // md breakpoint (768px)
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Image Container */}
      <motion.div
        whileHover={isLargeScreen ? { scale: 0.9 } : {}}
        transition={{ duration: 0.5 }}
        className="rounded-3xl md:w-[10vw] flex flex-col items-center cursor-pointer"
        style={{ backgroundColor: bgColor }}
        onHoverStart={() => isLargeScreen && setIsHovered(true)}
        onHoverEnd={() => isLargeScreen && setIsHovered(false)}
      >
        <img src={image} alt="Avatar" className="w-[50vw] md:w-[10vw]" />
      </motion.div>

      {/* Text Section - Always visible on small screens, hover effect on large screens */}
      <motion.div
        className="p-2 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: isLargeScreen ? (isHovered ? 1 : 0) : 1,
          y: isLargeScreen ? (isHovered ? 0 : 10) : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-openSans mb-2 font-bold">{title}</h2>
        <p className="px-[10vw] md:px-[0vw] text-xl tracking-wider">{para}</p>
      </motion.div>
    </div>
  );
};

export default ExperienceCard;
