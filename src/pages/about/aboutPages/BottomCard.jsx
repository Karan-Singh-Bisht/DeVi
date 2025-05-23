import React from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { FaGooglePlay } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";
import Feature from "./Feature";

const BottomCard = () => {
  const mobileRef = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        mobileRef.current,
        { y: -200 },
        {
          y: -100,
          x: 0,
          delay: 0.3,
          scrollTrigger: {
            trigger: mobileRef.current,
            start: "top 100%",
            end: "bottom 80%",
            scrub: 1,
          },
        }
      );
    }, mobileRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="bg-[#8D93A5] flex items-center h-[300vw] md:h-screen justify-center w-full px-4 sm:px-6 py-10">
        <motion.div className="flex flex-col md:flex-row justify-center items-center md:gap-[8vw] max-w-7xl">
          {/* Mobile App Mockup */}
          <div
            ref={mobileRef}
            className="w-full sm:w-[50%] md:w-[30vw] md:rounded-[3.8vw] border-[1.5vw] rounded-[7.1vw] sm:border-[1vw] lg:border-[0.7vw] xl:border-[0.35] sm:rounded-[9vw] lg:rounded-[3.2vw] xl:rounded-[1.85vw] border-white"
          >
            <video
              loading="lazy"
              src="/video/DV-App.mp4"
              autoPlay
              loop
              muted
              className="w-full h-auto object-cover rounded-3xl"
            />
          </div>

          {/* Text Section */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: -50, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left flex flex-col w-full gap-4 sm:gap-24 md:w-[60%] lg:w-[70%]"
          >
            <h2 className="text-[4.5vw] font-openSans sm:text-xl md:text-xl lg:text-[2.1vw] xl:text-[1.4vw] font-semibold text-gray-800 leading-loose">
              One app. Two lives, Switch between <br /> your buddy life and
              business life— <br /> no drama, just DV where personalized
              <br />
              Discover, Smart maps, VisioFeeds, Chat <br /> Spaces, Profiles
              made for niche ones.
            </h2>

            {/* Navigation Buttons */}
            <div className="flex justify-center md:justify-start gap-6 mt-5">
              <a
                rel="noopener noreferrer"
                href="https://play.google.com/store/apps/details?id=com.harsar.devi"
                target="_blank"
              >
                <button className="w-[12vw] md:w-[8vw] lg:w-[4vw] h-[12vw] md:h-[8vw] lg:h-[4vw] rounded-full bg-white shadow-md flex items-center justify-center">
                  <FaGooglePlay className="w-[6vw] md:w-[4vw] lg:w-[2vw] h-[6vw] md:h-[4vw] lg:h-[2vw]" />
                </button>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://apps.apple.com/app/devi-hyper-social-media/id6642651947"
                target="_blank"
              >
                <button className="w-[12vw] md:w-[8vw] lg:w-[4vw] h-[12vw] md:h-[8vw] lg:h-[4vw] rounded-full bg-white shadow-md flex items-center justify-center">
                  <GrAppleAppStore className="w-[6vw] md:w-[4vw] lg:w-[2vw] h-[6vw] md:h-[4vw] lg:h-[2vw]" />
                </button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Feature />
    </>
  );
};

export default BottomCard;
