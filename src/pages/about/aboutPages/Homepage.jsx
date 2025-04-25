import React, { useState, useEffect, useMemo } from "react";
import Navbar from "../../../components/about/Navbar";
import {
  motion,
  useAnimation,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { GoArrowDown } from "react-icons/go";

const Homepage = () => {
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
  const [isClient, setIsClient] = useState(false);
  const [HREF, setHREF] = useState("");
  const rotatingWords = ["My", "Our", "Your", "His", "Her", "Their", "Every"];
  const [currentWordIndex, setCurrentWordIndex] = useState(2); // Start from "Your"

  // Text rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(
        (prevIndex) => (prevIndex + 1) % rotatingWords.length
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
      visible: (custom = 1) => ({
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
          delay: 1.6,
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
    <motion.div className="flex relative font-roboto gap-4 flex-col h-[160vw] md:h-screen overflow-x-hidden overflow-hidden">
      {/* Navbar */}
      <div className="w-full">
        <Navbar color={backgroundColor} />
      </div>

      {/* Hero Section */}
      <motion.section
        className="flex flex-col flex-1 items-center justify-start mt-[6vw] bg-white px-6 text-center relative"
        style={{
          opacity: isClient ? contentOpacity : 1,
          zIndex: 10,
        }}
      >
        {/* Heading */}
        <motion.p
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          className="text-[6vw] flex items-center font-semibold leading-tight font-poppins"
        >
          Just Have D V
          <span>
            <img
              className="mx-8 w-44 h-28 rounded-full object-cover"
              src="/image/aboutPage/Simha.png"
              alt="image"
            />
          </span>{" "}
          , It
        </motion.p>

        {/* Rotating Word */}
        <div className="flex justify-center gap-5 items-center text-[6vw] font-semibold leading-tight font-fredroka">
          <motion.span
            variants={headingVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Defines
          </motion.span>

          <div className="relative inline-block h-[7vw]">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="whitespace-nowrap text-[#8D93A5]"
              >
                {rotatingWords[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.span
            variants={headingVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Vision
          </motion.span>
        </div>

        {/* Subheading */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 0.5,
              transition: { delay: 0.8, duration: 0.8 },
            },
          }}
          className="mt-11 text-[4vw] sm:text-[2.5vw] md:text-[1.5vw]"
        >
          A Hyper Social Media - where
          <br /> content to connections, <br />
          everything is just how you like it.
        </motion.p>

        {/* Download Button */}
        <motion.div
          className="flex mt-[1vw] flex-wrap gap-4 justify-center"
          initial="hidden"
          animate="visible"
          variants={buttonContainerVariants}
        >
          <a href={HREF} target="_blank" rel="noopener noreferrer">
            <motion.div className="mt-[3vw]" variants={buttonItemVariants}>
              <button className="flex hover:opacity-90 items-center bg-blue-950 text-white px-4 py-2 sm:px-6 sm:py-4 rounded-2xl gap-2 sm:gap-3">
                <span className="text-base sm:text-xl font-semibold">
                  Download Now
                </span>
              </button>
            </motion.div>
          </a>
        </motion.div>

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
