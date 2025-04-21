import React from "react";
import { motion } from "framer-motion";

export default function Knowledge() {
  return (
    <div className="min-h-screen w-screen flex flex-col bg-white">
      {/* Content */}
      <div className="flex-grow flex items-center justify-center px-4 pt-8 md:px-4">
        <div className="w-full max-w-screen-lg bg-white rounded-2xl overflow-hidden">
          {/* Title */}
          <h1 className="text-xl opacity-50 md:text-[2.5vw] font-bold text-center text-navy-800 mb-10 leading-relaxed">
            Gain The Knowledge And Connect <br></br>With New Age Social Media
          </h1>

          {/* Characters Container */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
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
            <div className="absolute w-40 top-[65%] flex flex-col gap-3 items-center justify-center">
              <h1 className="font-semibold text-sm md:text-lg">Download Now</h1>
              <div className="flex items-center w-40 md:w-60 gap-4 justify-center">
                <button className="flex items-center shadow-xl border border-gray-100 rounded-xl bg-white">
                  <img
                    className="w-10 md:w-12 rounded-2xl object-cover"
                    src="/image/aboutPage/1_3.png"
                    alt="store 1"
                  />
                </button>
                <button className="flex items-center text-white">
                  <img
                    className="w-10 md:w-12 rounded-xl"
                    src="/image/aboutPage/1_4.png"
                    alt="store 2"
                  />
                </button>
              </div>
              <p>
                By <span className="font-bold text-sm md:text-lg">HarSar</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white text-gray-500 text-xs md:text-sm text-center py-6 px-4 mt-auto">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-6">
          <div className="flex items-center space-x-2">
            <span>📍 Hyderabad, Telangana 500080</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>📞 9000000000</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>✉️ care@dev.harsar.in</span>
          </div>
        </div>
        <p className="mt-4">© 2025 HarSar Infonics. All rights reserved.</p>
      </footer>
    </div>
  );
}
