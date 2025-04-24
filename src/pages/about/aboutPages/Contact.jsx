import React from "react";
import { motion } from "framer-motion";
import ContactStrip from "../../../components/about/ContactStrip";

export default function Contact() {
  return (
    <div className="min-h-screen w-screen bg-[#E3E5FC] flex flex-col">
      {/* Content */}
      <div className="flex-grow flex items-center justify-center px-4 pt-8 md:px-4">
        <div className="w-full max-w-screen-lg bg-[#E3E5FC] rounded-2xl overflow-hidden">
          {/* Title */}
          <h1 className="text-xl md:text-[3.5vw] font-bold  font-poppins text-center text-black mb-10 leading-relaxed">
            Need Help? <span className="text-[#8D93A5]">We've</span> Got You.
          </h1>

          {/* Characters Container */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full flex justify-center flex-col items-center mb-12"
          >
            <img
              src="/image/aboutPage/14_1.png"
              alt="two people"
              className="w-full md:w-[50vw] h-[30vw]"
            />
            {/* Download Button */}
            <button className="absolute mt-48 mx-auto flex hover:opacity-90 items-center bg-blue-950 text-white px-4 py-2 sm:px-6 sm:py-4 md:px-12 md:py-6 rounded-3xl gap-2 sm:gap-3">
              <span className="text-base sm:text-xl md:text-2xl font-openSans font-semibold">
                Let's Catch Up
              </span>
              <img
                src="/image/aboutPage/HandShake.png"
                alt="arrow"
                className="w-6 h-6"
              />
            </button>
            <ContactStrip />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
