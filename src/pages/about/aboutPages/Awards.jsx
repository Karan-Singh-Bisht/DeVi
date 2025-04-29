import { motion } from "framer-motion";
import { Suspense } from "react";
import React from "react";
const JoinButton = React.lazy(() =>
  import("../../../components/about/JoinButton")
);

const images = [
  {
    src: "/image/aboutPage/12_3.png",
  },
  {
    src: "/image/aboutPage/12_4.png",
  },
  {
    src: "/image/aboutPage/12_5.png",
  },
  {
    src: "/image/aboutPage/12_6.png",
  },
];

const Awards = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8">
      <motion.div
        className="w-full flex gap-5 flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="md:text-[5vw] text-[20vw] text-[#1C274C] font-poppins sm:text-[4vw] text-left sm:text-center w-[80%] sm:w-full leading-tight font-bold">
          Bulletin <span className="text-[#8D93A5]">Board</span>
        </h2>
        <p className="text-gray-500 text-xl font-semibold font-openSans my-2 sm:text-center text-left">
          News & Awards & Milestones
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <motion.img
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            loading="lazy"
            src="/image/aboutPage/12_1.jpeg"
            alt="Award_1"
            className="w-[4rem] sm:w-[5rem] md:w-[6rem] h-auto rounded-md shadow-md"
          />
          <motion.img
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            src="/image/aboutPage/12_2.jpeg"
            loading="lazy"
            alt="Award_2"
            className="w-[4rem] sm:w-[5rem] md:w-[6rem] h-auto rounded-md shadow-md"
          />
        </div>

        <h3 className="text-2xl sm:text-xl font-openSans font-semibold text-gray-500 mt-8 mb-[1vw] sm:text-center text-left">
          Partners & Supporters
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-6 mt-4 w-full mb-[2vw]">
          {images.map((item, index) => (
            <img
              loading="lazy"
              src={item.src}
              alt="Partner"
              key={index}
              className="w-[5rem] sm:w-[6rem] md:w-[7rem] h-auto rounded-md"
            />
          ))}
        </div>

        <Suspense fallback="none">
          <JoinButton title="Join With Us" />
        </Suspense>
      </motion.div>
    </div>
  );
};

export default Awards;
