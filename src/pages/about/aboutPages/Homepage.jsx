import React, { useState, useEffect, useMemo } from "react";
import Navbar from "../../../components/about/Navbar";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { GoArrowDown } from "react-icons/go";

const Homepage = () => {
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
  const [isClient, setIsClient] = useState(false);
  const [HREF, setHREF] = useState("");

  // Platform-specific download link (run in idle time for better perf)
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

  useEffect(() => {
    setIsClient(true);
    controls.start("visible");
  }, [controls]);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    ["#E4F2FF", "#E4F2FF", "#FFFFFF"]
  );

  const contentOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Memoized animation variants
  const headingVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 50 },
      visible: (custom) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: custom * 0.2,
          ease: "easeOut",
        },
      }),
    }),
    []
  );

  const buttonContainerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delay: 0.8,
          staggerChildren: 0.2,
        },
      },
    }),
    []
  );

  const buttonItemVariants = useMemo(
    () => ({
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 25,
        },
      },
    }),
    []
  );

  return (
    <motion.div
      className="flex relative font-roboto gap-4 flex-col h-[160vw] md:h-screen overflow-x-hidden overflow-hidden"
      style={{ backgroundColor: isClient ? backgroundColor : "#E4F2FF" }}
    >
      {/* Navbar */}
      <div className="sticky top-0 w-full z-50">
        <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur-sm" />
        <Navbar color={backgroundColor} />
      </div>

      {/* Hero Section */}
      <motion.section
        className="flex flex-col flex-1 items-center justify-center mt-[15vh] px-6 text-center relative"
        style={{
          opacity: isClient ? contentOpacity : 1,
          zIndex: 10,
        }}
      >
        {/* Heading */}
        <div className="overflow-hidden">
          <motion.h1
            initial="hidden"
            animate={controls}
            custom={0}
            variants={headingVariants}
            className="text-[8vw] sm:text-center sm:text-[6vw] md:text-[4vw] font-bold leading-tight flex flex-wrap items-center gap-2"
          >
            An Immersive,
            <span className="hidden md:inline-block w-[8vw] sm:w-[6vw] md:w-[4vw] lg:w-[4vw]">
              <img
                className="w-full h-auto"
                src="/image/aboutPage/1_3.png"
                alt="homeImage"
                width={100}
                height={100}
                loading="eager"
              />
            </span>
            Interactive Geolocation-Based
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial="hidden"
            animate={controls}
            custom={1}
            variants={headingVariants}
            className="text-[6vw] sm:text-[4.5vw] md:text-[3vw] text-blue-950 font-semibold my-4 leading-tight"
          >
            Hyper Social Media Platform...
          </motion.h1>
        </div>

        {/* Download Button */}
        <motion.div
          className="flex mt-[1vw] flex-wrap gap-4 justify-center"
          initial="hidden"
          animate="visible"
          variants={buttonContainerVariants}
        >
          <a href={HREF} target="_blank" rel="noopener noreferrer">
            <motion.div variants={buttonItemVariants}>
              <button className="flex hover:opacity-90 items-center bg-blue-950 text-white px-4 py-2 sm:px-6 sm:py-4 rounded-2xl gap-2 sm:gap-3">
                <span className="text-base sm:text-xl font-semibold">
                  Download Now
                </span>
              </button>
            </motion.div>
          </a>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 0.5,
              transition: { delay: 1.6, duration: 0.8 },
            },
          }}
          className="mt-11 text-[4vw] sm:text-[2.5vw] md:text-[1.5vw]"
        >
          Discover in a new way, Instead of Generic <br /> ones...
        </motion.p>

        {/* Scroll Down Icon */}
        <motion.div
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
                delay: 1.8,
              },
            },
          }}
          className="absolute text-[8vw] sm:text-[6vw] md:text-[4vw] bottom-[8vw] sm:bottom-[6vw] md:bottom-[4vw] right-[5vw] animate-bounce"
        >
          <GoArrowDown />
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Homepage;
