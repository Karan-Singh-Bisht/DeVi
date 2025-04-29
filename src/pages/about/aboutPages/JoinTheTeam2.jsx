import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Memoized animation variants
const useCircleVariants = () =>
  useMemo(
    () => ({
      initial: { scale: 1 },
      expanded: {
        scale: 10,
        transition: { duration: 1, delay: 0.2, ease: "easeInOut" },
      },
    }),
    []
  );

const useDetailedContentVariants = () =>
  useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.5 } },
    }),
    []
  );

const useButtonContainerVariants = () =>
  useMemo(
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

export default function JoinTheTeam2() {
  const [isMobile, setIsMobile] = useState(false);

  const circleVariants = useCircleVariants();
  const detailedContentVariants = useDetailedContentVariants();
  const buttonContainerVariants = useButtonContainerVariants();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div
        className="flex flex-col items-center justify-center h-screen w-full bg-[#E7F1FF] p-4 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/image/aboutPage/GirlImage.png")',
          height: "200vw",
        }}
      >
        <h2 className="text-[18vw] font-bold text-center font-poppins">
          Join the
          <br /> <span className="text-gray-400">DV</span> team
        </h2>
        <div className="flex gap-4 mt-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full" />
          <div className="w-12 h-12 bg-gray-300 rounded-full" />
        </div>
        <button className="mt-6 rounded-full px-4 py-2 bg-blue-600 text-white font-semibold">
          Join Now
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-[40vh] md:min-h-[135vh] flex flex-col items-center justify-center overflow-hidden relative">
      <div className="flex items-center relative justify-center mt-16">
        <motion.div
          className="w-[36vw] h-[36vw] bg-[#C5CBDB] rounded-full relative z-10"
          initial="initial"
          whileInView="expanded"
          variants={circleVariants}
        />
        <div className="absolute z-20 w-[24vw] h-[24vw] bg-white rounded-full flex flex-col items-center justify-center shadow-[0_0_20px_10px_rgba(255,255,255,0.6)]">
          <AnimatePresence mode="wait">
            <motion.div
              key="detailed"
              className="absolute flex flex-col items-center text-center"
              variants={detailedContentVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex flex-col w-full items-center">
                <div className="w-[40vw] h-[40vw] flex items-center justify-center relative z-10 bg-white rounded-full">
                  <img
                    className="w-[40vw] h-[40vw] rounded-full object-cover"
                    src="/image/aboutPage/JoinTheTeamImage.jpeg"
                    alt="Join the DV Team"
                  />

                  <div className="absolute bottom-10 flex flex-col items-center">
                    <h1 className="text-[3vw] font-openSans font-bold text-white">
                      Join the DV Team
                    </h1>
                    <motion.div
                      className="mt-[4vw] flex flex-wrap gap-4 justify-center"
                      initial="hidden"
                      animate="visible"
                      variants={buttonContainerVariants}
                    >
                      <a href="https://apps.apple.com/app/devi-hyper-social-media/id6642651947">
                        <motion.div variants={buttonItemVariants}>
                          <button className="flex hover:opacity-90 items-center bg-blue-950 text-white px-4 py-2 sm:px-6 sm:py-4 md:px-16 rounded-2xl gap-2 sm:gap-3">
                            <span className="text-base sm:text-xl font-semibold">
                              <h1 className="font-openSans font-semibold">
                                Apply Now
                              </h1>
                            </span>
                          </button>
                        </motion.div>
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
