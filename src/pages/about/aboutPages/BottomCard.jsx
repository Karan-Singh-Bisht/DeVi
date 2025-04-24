import React from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { FaGooglePlay } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";
import Feature from "./Feature";
import { useNavigate } from "react-router";

const BottomCard = () => {
  const mobileRef = useRef();

  useGSAP(() => {
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
      },
      [mobileRef]
    );
  });

  return (
    <>
      <div className="bg-[#E1C5FE] flex items-center h-[300vw] md:h-screen justify-center w-full px-4 sm:px-6 py-10">
        <motion.div className="flex flex-col md:flex-row justify-center items-center md:gap-[8vw] max-w-7xl">
          {/* Mobile App Mockup */}
          <div ref={mobileRef} className="w-full sm:w-[50%] md:w-[20vw]">
            <img
              src="https://cdn.discordapp.com/attachments/1089583827162235013/1364906109223043082/card.png?ex=680b5f5f&is=680a0ddf&hm=eab92e0afc719e20ee8c692705122a60422a70067a6d19e6806ba5163fe5273f&"
              alt="App Mockup"
              className="w-full h-auto md:h-[40vw]"
            />
          </div>

          {/* Text Section */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: -50, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left flex flex-col w-full gap-24 md:w-[60%]"
          >
            <h2 className="text-2xl font-openSans sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 leading-loose">
              One app. Two lives, Switch between <br /> your buddy life and
              business life— <br /> no drama, just DV where personalized
              <br />
              Discover, Smart maps, VisioFeeds, Chat <br /> Spaces, Profiles
              made for niche ones.
            </h2>

            {/* Navigation Buttons */}
            <div className="flex justify-center md:justify-start gap-6 mt-5">
              <a
                href="https://play.google.com/store/apps/details?id=com.harsar.devi"
                target="_blank"
              >
                <button className="w-[12vw] md:w-[8vw] lg:w-[4vw] h-[12vw] md:h-[8vw] lg:h-[4vw] rounded-full bg-white shadow-md flex items-center justify-center">
                  <FaGooglePlay className="w-[6vw] md:w-[4vw] lg:w-[2vw] h-[6vw] md:h-[4vw] lg:h-[2vw]" />
                </button>
              </a>
              <a
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
