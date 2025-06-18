import React from "react";
import { motion } from "framer-motion";

const GetTheApp = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center px-4 relative">
      {/* Desktop & Tablet */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden sm:flex relative bg-[#F2F2F4] p-6 md:px-4 md:pt-6 md:pb-0 sm:pb-0 rounded-3xl shadow-2xl shadow-gray-400/40 flex-col items-center md:flex-row w-full md:w-full md:h-[80vw] lg:w-[90%] lg:h-[80%] text-center md:text-left"
      >
        <div className="w-full md:w-[50%] flex flex-col items-center sm:gap-3 lg:h-[25vw] xl:h-[20vw] h-[30vw] justify-evenly">
          <h2 className="text-xl sm:text-2xl md:text-[6vw] font-poppins md:font-bold text-[#1E2A4A]">
            Get{" "}
            <span className="text-gray-400 md:text-[6vw] sm:text-2xl">
              The App
            </span>
          </h2>
          <p className="text-gray-500 md:text-xl lg:text-[2vw] xl:text-2xl text-center sm:text-xl font-openSans mt-2 text-sm">
            And Step Into a New Era of Social Connection...
          </p>
          <div className="flex relative flex-col gap-4 sm:flex-row md:flex-row md:items-center sm:items-center sm:space-x-4">
            <a
              rel="noreferrer noopener"
              href="https://apps.apple.com/app/devi-hyper-social-media/id6642651947"
              target="_blank"
            >
              <button className="bg-[#1E2A4A] md:text-xl lg:text-2xl sm:mt-2 sm:p-2 flex items-center justify-center gap-2 font-bold text-white md:px-3 md:py-3 lg:px-4 rounded-xl w-full sm:w-auto">
                App Store
                <img
                  loading="lazy"
                  width="32"
                  src="/image/aboutPage/1_4.png"
                  alt="App Store Icon"
                  className="sm:w-[4vw] lg:w-[2.5vw]"
                />
              </button>
            </a>
            <a
              rel="noreferrer noopener"
              href="https://play.google.com/store/apps/details?id=com.harsar.devi"
              target="_blank"
            >
              <button className="bg-[#1E2A4A] md:text-xl lg:text-2xl sm:mt-2 sm:p-2 flex items-center justify-center gap-2 font-bold text-white md:px-3 md:py-3 rounded-xl w-full sm:w-auto">
                Download
                <img
                  loading="lazy"
                  width="32"
                  src="/image/aboutPage/1_3.png"
                  alt="Download Icon"
                  className="sm:w-[4vw] lg:w-[2.5vw]"
                />
              </button>
            </a>
          </div>
        </div>
        <img
          loading="lazy"
          src="/image/aboutPage/GirlImage.webp"
          alt="Character"
          className="w-[50%] sm:w-[40%] md:w-[50%] h-full object-cover mt-4 md:mt-0"
        />
      </motion.div>

      {/* Mobile Only */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex sm:hidden rounded-3xl bg-[#F2F2F4] p-6 w-full max-w-sm mx-auto flex-col items-center relative overflow-hidden"
        style={{
          height: "70vh",
          backgroundImage: "url('/image/aboutPage/GirlImage.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >
        <div className="w-full h-full flex flex-col justify-between items-center relative z-10">
          <div className="w-full flex items-center flex-col text-left mt-4">
            <h1 className="text-5xl font-bold">
              <span className="text-[#1E2A4A] font-poppins font-bold">Get</span>{" "}
              <span className="text-gray-400">The App</span>
            </h1>
            <p className="text-md font-openSans text-gray-700">
              Our vision is to revolutionize the way
            </p>
          </div>

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
    </div>
  );
};

export default GetTheApp;
