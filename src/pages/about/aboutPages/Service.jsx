"use client";
import React from "react";
import { motion } from "framer-motion";

const Service = () => {
  // Consolidated feature data
  const features = [
    {
      id: 1,
      title: "Social Media",
      backgroundColor: "#F8F6F5",
      size: "md:col-span-3",
      height: "490px",
    },
    {
      id: 2,
      title: "Customized Maps",
      backgroundColor: "#9FFFB8",
      size: "md:col-span-3",
      height: "490px",
    },
    {
      id: 3,
      title: "AR & VR Experience",
      backgroundColor: "#70778D",
      size: "md:col-span-3",
      height: "240px",
      textColor: "text-white",
    },
    {
      id: 4,
      title: "Food",
      backgroundColor: "bg-yellow-50",
      size: "md:col-span-3",
      height: "240px",
    },
    {
      id: 5,
      title: "Interactive Buddies Section",
      backgroundColor: "bg-pink-50",
      size: "md:col-span-6",
      height: "210px",
    },
    {
      id: 6,
      title: "Personalized Chat",
      backgroundColor: "bg-[#DFC9BE]",
      size: "md:col-span-3",
      height: "490px",
    },
    {
      id: 7,
      title: "Multiple Category",
      backgroundColor: "bg-[#EAF1F4]",
      size: "md:col-span-2",
      height: "490px",
    },
  ];

  // Animation variants for consistent animations
  const fadeInUpAnimation = {
    initial: { scale: 0.8, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 15,
      duration: 0.5,
      delay: 0.2,
    },
  };

  return (
    <div className="w-full min-h-screen px-6 py-12 bg-[#FFFFFF]">
      {/* Title Section */}
      <motion.div {...fadeInUpAnimation} className="text-center md:my-5">
        <h1 className="md:text-[4vw] text-[8vw] font-bold text-black">
          Magical Immersive <span className="text-[#7E22CE]">Features</span>
        </h1>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          {...fadeInUpAnimation}
          className="flex flex-col md:flex-row gap-4"
        >
          {/* Left Side - First Row (Social Media and Maps) */}
          <div className="flex gap-4 flex-1">
            {/* Social Media Card */}
            <div
              className="overflow-hidden rounded-3xl relative w-1/2 md:w-full"
              style={{ height: features[0].height }}
            >
              <div
                className="h-full p-6 flex flex-col items-center justify-center relative"
                style={{ backgroundColor: features[0].backgroundColor }}
              >
                <img
                  loading="lazy"
                  src="/image/aboutPage/3_1.gif"
                  alt={features[0].title}
                  className="md:w-auto w-full max-w-full h-auto max-h-full object-contain"
                />
                <h3 className="text-2xl absolute bottom-2 left-4 text-black font-bold z-20">
                  {features[0].title}
                </h3>
              </div>
            </div>

            {/* Customized Maps Card */}
            <div
              className="overflow-hidden rounded-3xl relative w-1/2 md:w-full"
              style={{ height: features[1].height }}
            >
              <div
                className="h-full py-2 px-2 flex flex-col items-center justify-center relative"
                style={{ backgroundColor: features[1].backgroundColor }}
              >
                <img
                  loading="lazy"
                  src="/image/aboutPage/3_2.png"
                  alt={features[1].title}
                  className="w-auto max-w-full h-auto max-h-[100%] object-cover"
                />
                <h3 className="text-2xl absolute bottom-2 left-4 text-black font-bold z-20">
                  {features[1].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Right Side - Second Row (AR/VR and Food) */}
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              {/* AR & VR Experience */}
              <div
                className="overflow-hidden w-full rounded-3xl relative flex items-center justify-center"
                style={{
                  height: features[2].height,
                  backgroundColor: features[2].backgroundColor,
                }}
              >
                {/* Image Container */}
                <img
                  loading="lazy"
                  src="/image/aboutPage/3_3.png"
                  alt={features[2].title}
                  className="w-auto max-w-[80%] h-auto max-h-[80%] object-contain"
                />

                {/* Text Overlay */}
                <div className="absolute bottom-4 left-4 z-20 text-center">
                  <h3
                    className={`text-2xl ${
                      features[2].textColor || "text-black"
                    } font-semibold`}
                  >
                    <span className="font-bold">{features[2].title}</span>
                  </h3>
                </div>
              </div>

              {/* Food */}
              <div
                className="overflow-hidden w-full rounded-3xl relative"
                style={{ height: features[3].height }}
              >
                <div
                  className={`${features[3].backgroundColor} h-full p-6 flex flex-col justify-center`}
                >
                  <img loading="lazy" src="/image/aboutPage/3_4.gif" alt="" />
                  <div className="z-20 absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold">{features[3].title}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>{" "}
        {/* partion Area */}
        <motion.div
          {...fadeInUpAnimation}
          className="md:flex md:flex-row-reverse gap-4"
        >
          {/* Fourth Row */}
          <div className="md:w-1/2">
            <div className="flex mt-[16px] gap-4">
              {/* Personalized Chat */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0.5 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 90, damping: 15 }}
                className={`w-full md:w-1/2 bg-[#DFC9BE] md:h-[210px] h-[490px] overflow-hidden rounded-3xl relative`}
              >
                <div
                  className="relative h-full p-6 flex flex-col justify-center items-center"
                  style={{ backgroundColor: features[5].backgroundColor }}
                >
                  {/* Responsive Image */}
                  <img
                    loading="lazy"
                    src="/image/aboutPage/3_6.png"
                    alt={features[5].title}
                    className="w-full md:w-[80%] h-auto object-contain"
                  />

                  {/* Title Text */}
                  <h3 className="text-xl font-semibold absolute bottom-2 left-4 z-20">
                    {features[5].title}
                  </h3>
                </div>
              </motion.div>

              {/* Multiple Category */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0.5 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 90, damping: 15 }}
                className="w-full md:w-1/2 bg-[#f6f3f3] h-[490px] md:h-[210px] overflow-hidden rounded-3xl relative"
              >
                <div
                  className="relative h-full p-4 flex flex-col justify-center items-center"
                  style={{ backgroundColor: features[6].backgroundColor }}
                >
                  {/* Responsive Image */}
                  <img
                    loading="lazy"
                    src="/image/aboutPage/3_7.gif"
                    alt={features[6].title}
                    className="w-full md:w-[100%] h-auto object-cover"
                  />

                  {/* Title Text */}
                  <h3 className="text-lg absolute bottom-4 left-4 font-semibold z-20">
                    {features[6].title}
                  </h3>
                </div>
              </motion.div>
            </div>
          </div>
          {/* Third Row */}
          <div className="md:w-1/2">
            <div className="mt-[16px]">
              {/* Interactive Buddies Section */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0.5 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-1 md:col-span-6 w-full overflow-hidden rounded-3xl relative"
                style={{ height: features[4].height }}
              >
                <div
                  className="relative h-full bg-yellow-50 p-6 flex flex-col items-center justify-center"
                  style={{ backgroundColor: features[4].backgroundColor }}
                >
                  {/* Responsive Image */}
                  <img
                    loading="lazy"
                    src="/image/aboutPage/3_5.png"
                    alt={features[4].title}
                    className="w-full md:w-3/4 absolute right-0 max-w-[80%] h-auto object-contain"
                  />

                  {/* Title Text */}
                  <h3 className="text-lg md:text-xl font-bold absolute bottom-3 left-4 md:left-6 text-center md:text-left z-20">
                    {features[4].title}
                  </h3>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
