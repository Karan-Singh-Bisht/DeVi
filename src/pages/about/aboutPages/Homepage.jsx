import React, { useState, useEffect, useMemo } from "react";
import Navbar from "../../../components/about/Navbar";
import { motion } from "framer-motion";
import { GoArrowDown } from "react-icons/go";
import "./HomePage.css";

const Homepage = () => {
  const [HREF, setHREF] = useState("");

  // Platform-specific download link
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
    <div
      style={{ position: "relative" }}
      className="flex relative font-roboto gap-4 flex-col h-[160vw] md:h-screen overflow-x-hidden overflow-hidden"
    >
      {/* Navbar */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Hero Section */}
      <motion.section
        className="flex flex-col flex-1 items-center justify-start mt-[6vw] bg-white px-6 text-center relative"
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
        {/* Animate Each Child with y: 50 → 0 */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
          }}
          className="text-[6vw] flex items-center font-semibold leading-tight font-poppins"
        >
          Just Have D V
          <span>
            <img
              rel="preload"
              loading="eager"
              decoding="async"
              className="mx-8 w-44 h-28 rounded-full object-cover"
              src="/image/aboutPage/Simha.webp"
              alt="image"
            />
          </span>{" "}
          , It
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
          }}
          className="flex justify-center gap-5 items-center text-[6vw] font-semibold leading-tight font-fredroka"
        >
          <span>Defines</span>

          <div className="relative h-[7vw] overflow-hidden">
            <div className="animate-rotate-words flex flex-col">
              {rotatingWords.map((word, i) => (
                <div
                  key={i}
                  className="h-[7vw] flex items-center justify-center text-[6vw] font-fredroka text-[#8D93A5]"
                >
                  {word}
                </div>
              ))}
            </div>
          </div>

          <span>Vision</span>
        </motion.div>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
          }}
          className="mt-11 text-[4vw] sm:text-[2.5vw] md:text-[1.5vw]"
        >
          A Hyper Social Media - where
          <br /> content to connections, <br />
          everything is just how you like it.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
          }}
          className="download-button-container"
        >
          <a href={HREF} target="_blank" rel="noopener noreferrer">
            <div className="download-button-wrapper">
              <button className="download-button">
                <span className="download-text">Download Now</span>
              </button>
            </div>
          </a>
        </motion.div>

        {/* Scroll Down Icon */}
        <motion.div
          className="absolute text-[8vw] sm:text-[6vw] md:text-[4vw] bottom-[8vw] sm:bottom-[6vw] md:bottom-[4vw] right-[5vw] animate-bounce"
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
