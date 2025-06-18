import React, { Suspense } from "react";
import { motion } from "framer-motion";
const ContactStrip = React.lazy(() =>
  import("../../../components/about/ContactStrip")
);

export default function Contact() {
  return (
    <div className="min-h-screen w-full bg-[#C5CBDB] flex flex-col">
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-4 pt-8">
        <div className="w-full max-w-6xl bg-inherit rounded-2xl overflow-hidden flex flex-col items-center">
          {/* Title */}
          <h1
            className="text-center font-bold font-poppins text-[#1C274C] mb-8 leading-tight
                        text-4xl sm:text-5xl md:text-6xl"
          >
            Need Help? <span className="text-[#8D93A5]">We've</span> Got You.
          </h1>

          {/* Image and Button */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col items-center gap-6 w-full px-2"
          >
            {/* Contact Image */}
            <img
              loading="lazy"
              src="/image/aboutPage/Contact.webp"
              alt="two_people"
              className="w-full max-w-3xl object-contain rounded-xl"
            />

            {/* CTA Button */}
            <button
              className="flex items-center justify-center bg-blue-950 text-white
                               px-6 py-3 sm:px-8 sm:py-4 rounded-xl gap-2 sm:gap-4 
                               text-base sm:text-lg md:text-xl font-semibold hover:opacity-90 transition"
            >
              Let's Catch Up
            </button>

            {/* Contact Strip */}
            <Suspense fallback={<div>Loading...</div>}>
              <ContactStrip />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
