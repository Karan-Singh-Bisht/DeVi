import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GetTheApp = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if the screen is mobile sized
  useEffect(() => {
    // Check initial screen size
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup the event listener
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const checkIfMobile = () => {
    setIsMobile(window.innerWidth < 640); // 640px is sm breakpoint in Tailwind
  };

  // Mobile Component
  const MobileComponent = () => (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl p-6 w-full max-w-sm mx-auto flex flex-col items-center relative overflow-hidden"
      style={{
        height: "70vh",
        backgroundImage: "url('/image/aboutPage/7_1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute bg-white/40"></div>

      {/* Content positioned above the overlay */}
      <div className="w-full h-full flex flex-col justify-between items-center relative z-10">
        {/* Heading */}
        <div className="w-full flex items-center flex-col text-left mt-4">
          <h1 className="text-3xl font-bold">
            <span className="text-purple-800">Get</span> The App
          </h1>
          <p className="text-sm text-white">
            Our vision is to revolutionize the way
          </p>
        </div>

        {/* App Store Buttons at the bottom */}
        <div className="flex space-x-3 mb-6">
          <button className="flex items-center justify-center bg-white w-16 h-16 rounded-full shadow-md">
            <img width="30" src="/image/aboutPage/1_4.png" alt="App Store" />
          </button>
          <button className="flex items-center justify-center bg-white w-16 h-16 rounded-full shadow-md">
            <img width="30" src="/image/aboutPage/1_3.png" alt="Download" />
          </button>
        </div>
      </div>
    </motion.div>
  );

  // Desktop Component (Your Original Component)
  const DesktopComponent = () => (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border bg-[#F2F2F4] p-6 md:px-6 md:pt-6 md:pb-0 rounded-3xl shadow-2xl shadow-gray-800/50 flex flex-col items-center md:flex-row w-full md:w-[80vw] md:h-[40vw] text-center md:text-left"
    >
      <div className="w-full flex flex-col items-center h-[23vw] justify-evenly pl-[1vw] p-2">
        <h2 className="text-xl sm:text-2xl md:text-[6vw] md:font-bold text-[#1E2A4A]">
          Get <span className="text-gray-400"> The App</span>
        </h2>
        <p className="text-gray-500 md:text-2xl font-mono mt-2 text-sm sm:text-base">
          And Step Into a New Era of Social Connection...
        </p>
        <div className="flex relative flex-col gap-4 sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <button className="bg-[#1E2A4A] md:text-3xl flex items-center justify-center gap-2 font-bold text-white md:px-8 md:py-6 rounded-xl w-full sm:w-auto">
            App Store
            <img
              width="32"
              src="/image/aboutPage/1_4.png"
              alt="App Store Icon"
            />
          </button>
          <button className="bg-[#1E2A4A] md:text-3xl flex items-center justify-center gap-2 font-bold text-white md:px-8 md:py-6 rounded-xl w-full sm:w-auto">
            Download
            <img
              width="32"
              src="/image/aboutPage/1_3.png"
              alt="Download Icon"
            />
          </button>
        </div>
      </div>
      <img
        src="/image/aboutPage/GirlImage.png"
        alt="Character"
        className="w-[50%] sm:w-[40%] md:w-[40%] h-full object-cover mt-4 md:mt-0"
      />
    </motion.div>
  );

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-4 relative">
      {/* Conditionally render based on screen size */}
      {isMobile ? <MobileComponent /> : <DesktopComponent />}
    </div>
  );
};

export default GetTheApp;
