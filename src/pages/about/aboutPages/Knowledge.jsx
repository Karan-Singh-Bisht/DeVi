import React from "react";
import { motion } from "framer-motion";

export default function Knowledge() {
  return (
    <div className="min-h-screen w-screen bg-[#E3E5FC] flex flex-col">
      {/* Content */}
      <div className="flex-grow flex items-center justify-center px-4 pt-8 md:px-4">
        <div className="w-full max-w-screen-lg bg-[#E3E5FC] rounded-2xl overflow-hidden">
          {/* Title */}
          <h1 className="text-xl md:text-[2.5vw] font-bold text-center text-black mb-10 leading-relaxed">
            Need Help? <span className="text-[#8D93A5]">We've</span> Got You.
          </h1>

          {/* Characters Container */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full flex justify-center items-center mb-12"
          >
            <img
              src="/image/aboutPage/14_1.png"
              alt="two people"
              className="w-full md:w-[45vw] h-[25vw]"
            />

            {/* Download Button */}
            <div className="absolute w-40 top-[65%] bg-white p-4 rounded-3xl flex flex-col gap-3 items-center justify-center">
              <h1 className="font-semibold text-sm md:text-lg">
                Let's Catch Up
              </h1>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
