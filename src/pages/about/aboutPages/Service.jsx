"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";

const Service = () => {
  // Consolidated feature data
  const features = [
    {
      id: 1,
      title: (
        <>
          Personalized <br />
          Discover
        </>
      ),
      backgroundColor: "#FEF6DA",
      size: "md:col-span-3",
      height: "490px",
    },
    {
      id: 2,
      title: (
        <>
          Geo Location <br />
          Based Feed
        </>
      ),
      backgroundColor: "#E1F4FE",
      size: "md:col-span-3",
      height: "490px",
    },
    {
      id: 3,
      title: (
        <>
          Categorized
          <br /> Feed
        </>
      ),
      backgroundColor: "#D5DFFF",
      size: "md:col-span-3",
      height: "240px",
      textColor: "text-black",
    },
    {
      id: 4,
      title: (
        <>
          Visiofeed Swipe
          <br /> Based
        </>
      ),
      backgroundColor: "#FFECD6",
      size: "md:col-span-3",
      height: "240px",
    },
    {
      id: 5,
      title: "Interactive Mapo",
      backgroundColor: "bg-pink-50",
      size: "md:col-span-6",
      height: "210px",
    },
    {
      id: 6,
      title: (
        <>
          Immersive <br />
          Chat Space
        </>
      ),
      backgroundColor: "bg-[#DFC9BE]",
      size: "md:col-span-3",
      height: "490px",
    },
    {
      id: 7,
      title: "Unique Profile",
      backgroundColor: "bg-[#EAF1F4]",
      size: "md:col-span-2",
      height: "490px",
    },
  ];

  // Animation variants for consistent animations
  const fadeInUpAnimation = useMemo(
    () => ({
      initial: { scale: 0.8, opacity: 0 },
      whileInView: { scale: 1, opacity: 1 },
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 15,
        duration: 0.5,
      },
    }),
    []
  );

  return (
    <div className="w-full min-h-screen px-6 py-12 bg-[#FFFFFF]">
      {/* Title Section */}
      <motion.div
        {...fadeInUpAnimation}
        className="text-center flex flex-col md:my-5"
      >
        <h1 className="md:text-[5vw] text-[10vw] font-bold font-poppins text-[#1C274C]">
          Magical Social <span className="text-[#8D93A5]">Superpowers</span>
        </h1>
        <p className="font-openSans font-semibold text-gray-500 md:text-[1.5vw] text-[4vw] mt-4 md:mt-0">
          Everything You Need, Just a Tap Away
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto mt-16">
        <motion.div
          {...fadeInUpAnimation}
          className="flex flex-col md:flex-row gap-4"
        >
          {/* Left Side - First Row (Social Media and Maps) */}
          <div className="flex gap-4 flex-1">
            {/* Social Media Card */}
            <div
              className="overflow-hidden rounded-3xl sm:max-h-full max-h-[100vw] relative w-1/2 md:w-full"
              style={{ height: features[0].height }}
            >
              <div
                className="h-full p-6 flex flex-col items-center justify-center relative"
                style={{ backgroundColor: features[0].backgroundColor }}
              >
                <img
                  loading="lazy"
                  src="/image/aboutPage/3_1.png"
                  alt={features[0].title}
                  className="w-auto max-w-full h-[40vw] sm:h-auto max-h-[100%] object-cover"
                />
                <h3 className="text-xl sm:text-2xl absolute bottom-2 left-4 text-black font-openSans font-semibold z-20">
                  {features[0].title}
                </h3>
              </div>
            </div>

            {/* Customized Maps Card */}
            <div
              className="overflow-hidden sm:max-h-full max-h-[100vw] rounded-3xl relative w-1/2 md:w-full"
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
                  className="w-auto max-w-full h-[45vw] sm:h-auto max-h-[100%] object-cover"
                />
                <h3 className="text-xl sm:text-2xl absolute bottom-2 left-4 text-black font-openSans font-semibold z-20">
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
                <div className="w-[40%]">
                  {/* Image Container */}
                  <img
                    loading="lazy"
                    src="/ic/Categorized Feed.png"
                    alt={features[2].title}
                    className="w-auto h-auto max-h-[90%] sm:w-[50%] object-cover absolute sm:top-5 sm:right-12 top-0 right-0"
                  />
                </div>

                {/* Text Overlay */}
                <div className="absolute w-[60%] bottom-4 left-4 z-20">
                  <p
                    className={`text-xl sm:text-2xl ${
                      features[2].textColor || "text-black"
                    } font-semibold`}
                  >
                    <span className="text-xl sm:text-2xl font-openSans font-semibold">
                      {features[2].title}
                    </span>
                  </p>
                </div>
              </div>

              {/* Food */}
              <div
                className={`overflow-hidden flex w-full rounded-3xl relative`}
                style={{
                  height: features[3].height,
                  backgroundColor: features[3].backgroundColor,
                }}
              >
                {/* Text on the left */}
                <div className="z-20 w-[50%] absolute bottom-4 left-4">
                  <h3 className="text-xl sm:text-2xl font-openSans font-semibold">
                    {features[3].title}
                  </h3>
                </div>

                {/* Image on the right */}
                <div className="w-[50%] h-full ml-auto">
                  <img
                    loading="lazy"
                    src="/ic/Visiofeed Swipe Based.png"
                    alt="visioFeed"
                    className="w-full h-full object-cover"
                  />
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
            <motion.div className="flex mt-[16px] gap-4">
              {/* Personalized Chat */}
              <div
                className={`w-full md:w-1/2 bg-[#DFC9BE] sm:max-h-full max-h-[100vw] md:h-[210px] overflow-hidden rounded-3xl relative`}
              >
                <div
                  className="relative h-[100vw] sm:h-full p-6 flex flex-col justify-center items-center"
                  style={{ backgroundColor: features[5].backgroundColor }}
                >
                  {/* Responsive Image */}
                  <img
                    loading="lazy"
                    src="/ic/Immersive Chat Space.png"
                    alt={features[5].title}
                    className="w-auto max-w-full h-[50vw] sm:absolute sm:right-0 sm:top-0 sm:h-auto max-h-[100%] object-cover"
                  />

                  {/* Title Text */}
                  <h3 className="text-xl sm:text-xl font-openSans font-semibold absolute bottom-2 left-4 z-20">
                    {features[5].title}
                  </h3>
                </div>
              </div>

              {/* Multiple Category */}
              <div className="w-full md:w-1/2 sm:max-h-full max-h-[100vw] bg-[#f6f3f3] md:h-[210px] overflow-hidden rounded-3xl relative">
                <div
                  className="relative h-[100vw] sm:h-full p-4 pt-2 flex flex-col justify-center items-center"
                  style={{ backgroundColor: features[6].backgroundColor }}
                >
                  {/* Responsive Image */}
                  <img
                    loading="lazy"
                    src="/ic/Unique Profile.png"
                    alt={features[6].title}
                    className="w-auto max-w-full h-[40vw] sm:h-auto max-h-[100%] object-cover"
                  />

                  {/* Title Text */}
                  <h3 className="text-xl sm:text-xl absolute bottom-1 left-4 font-openSans font-semibold z-20">
                    {features[6].title}
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Third Row */}
          <div className="md:w-1/2">
            <div className="mt-4">
              <motion.div
                {...fadeInUpAnimation}
                className="col-span-1 md:col-span-6 w-full overflow-hidden rounded-3xl relative"
                style={{ height: features[4].height }}
              >
                <div
                  className="relative h-full bg-yellow-50 p-6 flex items-center w-full justify-around"
                  style={{
                    backgroundColor: features[4].backgroundColor,
                  }}
                >
                  <h3 className="text-xl sm:text-2xl font-openSans font-semibold absolute bottom-3 left-4 md:left-6 text-center md:text-left z-20">
                    {features[4].title}
                  </h3>

                  <img
                    loading="lazy"
                    src="/ic/Interactive Mapo.png"
                    alt={features[4].title}
                    className="w-full md:w-2/5 absolute right-5 sm:right-10 max-w-[45%] h-auto object-cover"
                  />
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
