import React, { useState, useEffect, useMemo } from "react";
import Navbar from "../../../components/about/Navbar";
import { motion } from "framer-motion";
import { GoArrowDown } from "react-icons/go";
import "./HomePage.css";

const Homepage = () => {
  const [HREF, setHREF] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      requestIdleCallback(() => {
        const userAgent = window.navigator.userAgent;
        if (
          /iPhone|iPad|iPod/i.test(userAgent) ||
          /Macintosh/i.test(userAgent)
        ) {
          setHREF(
            "https://apps.apple.com/app/devi-hyper-social-media/id6642651947"
          );
        } else if (/Android/i.test(userAgent) || /Windows/i.test(userAgent)) {
          setHREF(
            "https://play.google.com/store/apps/details?id=com.harsar.devi"
          );
        } else {
          setHREF(
            "https://play.google.com/store/apps/details?id=com.harsar.devi"
          );
        }
      });
    }
  }, []);

  const rotatingWords = useMemo(
    () => ["My", "Our", "Your", "His", "Her", "Their", "Every"],
    []
  );

  return (
    <div className="flex gap-8 sm:gap-0 relative font-roboto flex-col min-h-screen overflow-x-hidden overflow-hidden">
      {/* Navbar */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Hero Section */}
      <motion.section
        className="flex flex-col flex-1 justify-start items-center sm:justify-start mt-[25vw] sm:mt-[8vw] bg-white px-4 sm:px-6 text-left sm:text-center relative"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <div>
          {/* Title Line */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
            }}
            className="text-[10vw] sm:text-[7vw] md:text-[6vw] flex items-center font-semibold leading-tight font-poppins flex-wrap justify-center"
          >
            Just Have D V
            <span className="mx-4">
              <img
                rel="preload"
                loading="eager"
                decoding="async"
                className="w-[13.5vw] h-[13.5vw] sm:w-32 sm:h-20 md:w-44 md:h-28 rounded-full object-cover inline-block"
                src="/image/aboutPage/Simha.webp"
                alt="image"
              />
            </span>
            <span className="hidden sm:inline">, It</span>
          </motion.p>

          {/* Rotating Words */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
            }}
            className="flex justify-center gap-3 sm:gap-5 items-center text-[10vw] sm:text-[7vw] md:text-[6vw] font-semibold leading-tight font-fredroka flex-wrap"
          >
            <span>Defines</span>

            <div className="relative h-14 sm:h-20 md:h-24 lg:h-[7vw] overflow-hidden">
              <div className="animate-rotate-words flex flex-col">
                {rotatingWords.map((word, i) => (
                  <div
                    key={i}
                    className="h-14 sm:h-20 md:h-24 lg:h-[7vw] flex items-center justify-center text-3xl xs:text-5xl sm:text-6xl md:text-[6vw] lg:text-[6vw] text-[#8D93A5]"
                  >
                    {word}
                  </div>
                ))}
              </div>
            </div>

            <span>Vision</span>
          </motion.div>

          {/* Subtext */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
            }}
            className="mt-8 sm:mt-11 text-[4vw] sm:text-[3vw] md:text-[1.5vw] leading-snug"
          >
            A Hyper Social Media — where
            <br /> content to connections, <br />
            everything is just how you like it.
          </motion.p>
        </div>

        {/* Download Button */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
          }}
          className="mt-6 sm:mt-8 w-full sm:w-auto"
        >
          <a href={HREF} target="_blank" rel="noopener noreferrer">
            <div className="w-full sm:w-auto">
              <button className="w-full sm:w-auto download-button">
                <span className="download-text">Download Now</span>
              </button>
            </div>
          </a>
        </motion.div>

        {/* Scroll Down Icon */}
        <motion.div
          className="absolute text-[10vw] sm:text-[6vw] md:text-[4vw] bottom-[10vw] sm:bottom-[6vw] md:bottom-[4vw] right-[5vw] animate-bounce"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 25,
              },
            },
          }}
        >
          <GoArrowDown />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Homepage;
