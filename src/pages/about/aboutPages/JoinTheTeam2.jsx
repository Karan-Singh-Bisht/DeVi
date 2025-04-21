import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Button from "../../../components/about/Button";

const circleVariants = {
  initial: { scale: 1 },
  expanded: {
    scale: 10, // Adjust so the outer circle covers the page
    transition: { duration: 1, delay: 0.5, ease: "easeInOut" },
  },
};

const simpleContentVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const detailedContentVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

// Button item variants
const buttonItemVariants = {
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
};

// Button container variants
const buttonContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8,
      staggerChildren: 0.2,
    },
  },
};

export default function JoinTheTeam2() {
  const [isMobile, setIsMobile] = useState(false);
  const [showDetailed, setShowDetailed] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    // Check initial screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Only set up scroll listener for desktop
  useEffect(() => {
    if (!isMobile) {
      const unsubscribe = scrollY.onChange((latest) => {
        if (latest > 16300) {
          setShowDetailed(true);
        } else {
          setShowDetailed(false);
        }
      });
      return () => unsubscribe();
    }
  }, [scrollY, isMobile]);

  // Render Mobile version (no animation)
  if (isMobile) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-full bg-[#E7F1FF] p-4">
        <h2 className="text-2xl font-bold text-center">
          Join the <span className="text-purple-600">DeVi</span> team
        </h2>
        <div className="flex gap-4 mt-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        </div>
        <button className="mt-6 rounded-full px-4 py-2 bg-blue-600 text-white font-semibold">
          Join Now
        </button>
      </div>
    );
  }

  // Desktop version with animations
  return (
    <div className="bg-[#E7F1FF] min-h-[40vh] md:min-h-[135vh] flex flex-col items-center justify-center overflow-hidden relative">
      <div className="flex items-center relative justify-center mt-16">
        {/* Animated Outer Gray Circle */}
        <motion.div
          className="w-[36vw] h-[36vw] bg-gray-400 rounded-full relative z-10"
          initial="initial"
          whileInView="expanded"
          variants={circleVariants}
        />
        {/* Inner White Circle positioned absolutely over the outer circle */}
        <div className="absolute z-20 w-[24vw] h-[24vw] bg-white rounded-full flex flex-col items-center justify-center shadow-[0_0_20px_10px_rgba(255,255,255,0.6)]">
          <AnimatePresence mode="wait">
            {!showDetailed && (
              <motion.div
                key="simple"
                className="absolute flex flex-col items-center"
                variants={simpleContentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <h1 className="text-3xl w-[70vw] md:text-4xl font-bold text-center">
                  Join The <span className="text-blue-600">DeVi</span> Team
                </h1>
                <button className="rounded-3xl px-1 py-1 text-xs md:px-4 md:py-2 text-white bg-purple-950 md:mt-[2vw]">
                  Join Our Team
                </button>
              </motion.div>
            )}
            {showDetailed && (
              <motion.div
                key="detailed"
                className="absolute flex flex-col items-center text-center"
                variants={detailedContentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="flex relative flex-col w-full items-center">
                  <div className="w-[40vw] h-[40vw] flex items-center justify-center relative z-10 bg-white rounded-full shadow-2xl">
                    <img
                      className="w-[40vw] h-[40vw] rounded-full object-cover"
                      src="/image/aboutPage/11_3.png"
                      alt="image"
                    />
                    <div className="absolute">
                      <h1 className="text-[4vw] font-semibold">
                        Join the DeVi team
                      </h1>
                      <motion.div
                        className="mt-[4vw] flex flex-wrap gap-4 justify-center"
                        initial="hidden"
                        animate="visible"
                        variants={buttonContainerVariants}
                      >
                        <a href="https://apps.apple.com/app/devi-hyper-social-media/id6642651947">
                          <motion.div variants={buttonItemVariants}>
                            <Button
                              text={"Join The Team"}
                              image={"/image/aboutPage/1_4.png"}
                            />
                          </motion.div>
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
