import React from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { FaGooglePlay } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";
import Feature from "./Feature";

const BottomCard = () => {
  const mobileRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      mobileRef.current,
      { y: -200 },
      {
        y: -100,
        x: 0,
        delay: 0.3,
        scrollTrigger: {
          trigger: mobileRef.current,
          start: "top 100%",
          end: "bottom 80%",
          scrub: 1,
        },
      },
      [mobileRef]
    );
  });

  return (
    <>
      <div className="bg-[#E1C5FE] flex items-center h-[300vw] md:h-screen justify-center w-full px-4 sm:px-6 py-10">
        <motion.div className="flex flex-col md:flex-row justify-center items-center md:gap-[5vw] max-w-5xl">
          {/* Mobile App Mockup */}
          <div ref={mobileRef} className="w-full sm:w-[50%] md:w-[20vw]">
            <img
              src="/image/aboutPage/5_1.png"
              alt="App Mockup"
              className="w-full h-auto md:h-[38vw] rounded-xl"
            />
          </div>

          {/* Text Section */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left flex flex-col justify-start w-full md:w-auto"
          >
            <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 leading-relaxed">
              A unified app with personal &<br /> professional social media, a
              <br /> filtered content feed, a smart
              <br /> map for food, movies, events,
              <br /> and separate chats for both
              <br /> profiles—fully customizable for
              <br /> you!
            </h2>

            {/* Navigation Buttons */}
            <div className="flex justify-center md:justify-start gap-4 mt-5">
              <button className="w-[12vw] md:w-[8vw] lg:w-[4vw] h-[12vw] md:h-[8vw] lg:h-[4vw] rounded-full bg-white shadow-md flex items-center justify-center">
                <FaGooglePlay className="w-[6vw] md:w-[4vw] lg:w-[2vw] h-[6vw] md:h-[4vw] lg:h-[2vw]" />
              </button>
              <button className="w-[12vw] md:w-[8vw] lg:w-[4vw] h-[12vw] md:h-[8vw] lg:h-[4vw] rounded-full bg-white shadow-md flex items-center justify-center">
                <GrAppleAppStore className="w-[6vw] md:w-[4vw] lg:w-[2vw] h-[6vw] md:h-[4vw] lg:h-[2vw]" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Feature />
    </>
  );
};

export default BottomCard;
