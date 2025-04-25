import { motion } from "framer-motion";
import React, { Suspense } from "react";
const Video = React.lazy(() => import("../../../components/about/Video"));

const SecondPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative bg-white overflow-hidden px-4">
      <div className="flex flex-col items-center justify-center relative w-full">
        {/* Expanding Background Circle */}
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          whileInView={{ scale: 6 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="absolute w-[50vw] h-[50vw] hover:cursor-pointer sm:w-[45vw] sm:h-[45vw] md:w-[35vw] md:h-[35vw] bg-gray-400 rounded-full"
        />
        <Suspense fallback={null}>
          <Video />
        </Suspense>
      </div>

      {/* Animated Text - Appears After Circle Expands */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-white text-[5vw] sm:text-[3.5vw] md:text-[2vw] lg:text-[1.5vw] z-10 text-center mt-[8vw] sm:mt-[6vw]"
      >
        “ Discover in a new way—access content and connect with <br />{" "}
        masterminds, match with like-minds based on your interests."
      </motion.p>
    </div>
  );
};

export default SecondPage;
