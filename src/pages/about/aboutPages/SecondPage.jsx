import { motion } from "framer-motion";
import React from "react";

const SecondPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative bg-blue-100 overflow-hidden px-4">
      <div className="flex flex-col items-center justify-center relative w-full">
        {/* Expanding Background Circle */}
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          whileInView={{ scale: 6 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="absolute w-[50vw] h-[50vw] sm:w-[45vw] sm:h-[45vw] md:w-[35vw] md:h-[35vw] bg-gray-400 rounded-full"
        />

        {/* Image Container with Static White Glow */}
        <div className="relative z-10 bg-white rounded-full p-2 md:p-4 md:shadow-[0px_0px_40px_10px_rgba(255,255,255,0.9)] flex justify-center items-center">
          <img
            className="w-[80vw] h-[80vw] sm:w-[30vw] sm:h-[30vw] md:w-[25vw] md:h-[25vw] object-cover rounded-full"
            src="/image/aboutPage/2_1.png"
            alt="Girl"
          />
        </div>
      </div>

      {/* Animated Text - Appears After Circle Expands */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3 }} // Appears after circle animation
        className="text-white text-[5vw] sm:text-[3.5vw] md:text-[2vw] lg:text-[1.5vw] z-10 text-center mt-[8vw] sm:mt-[6vw]"
      >
        Discover in new ways, instead of <br /> generic ones...
      </motion.p>
    </div>
  );
};

export default SecondPage;
