import React, { Suspense } from "react";
import { motion } from "framer-motion";
const ContactStrip = React.lazy(() =>
  import("../../../components/about/ContactStrip")
);

export default function Contact() {
  return (
    <div className="min-h-screen w-screen bg-[#E3E5FC] flex flex-col">
      {/* Content */}
      <div className="flex-grow flex items-center justify-center px-4 pt-8 md:px-4">
        <div className="w-full max-w-screen-lg bg-[#E3E5FC] rounded-2xl overflow-hidden">
          {/* Title */}
          <h1 className="md:text-[5vw] text-[8vw] text-[#1C274C] font-poppins sm:text-[4vw] text-center font-bold">
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
              loading="lazy"
              src="/image/aboutPage/14_1.png"
              alt="two people"
              className="w-full md:w-[50vw] h-[30vw]"
            />
            {/* Download Button */}
            <button className="flex hover:opacity-90 items-center bg-blue-950 text-white px-4 py-2 sm:px-6 sm:py-4 rounded-2xl gap-2 sm:gap-3">
              <span className="text-base sm:text-xl font-semibold">
                Let's Catch Up
              </span>
            </button>
            <Suspense fallback="none">
              <ContactStrip />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
