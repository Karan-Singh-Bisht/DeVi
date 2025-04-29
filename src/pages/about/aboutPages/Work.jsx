import { motion } from "framer-motion";
import { useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const card1Ref = useRef();
  const card2Ref = useRef();
  const card3Ref = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      [
        { ref: card2Ref, y: -25 },
        { ref: card3Ref, y: -100 },
      ].forEach(({ ref, y }) =>
        gsap.fromTo(
          ref.current,
          { y: 50 },
          {
            y,
            duration: 0.5,
            scrollTrigger: {
              trigger: ref.current,
              start: "top 50%",
              end: "bottom 70%",
              scrub: 1,
            },
          }
        )
      );
    });
    return () => ctx.revert();
  });

  const cardAnimation = useMemo(
    () => ({
      initial: { opacity: 0, y: 100 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 1, delay: 0.2 },
    }),
    []
  );

  return (
    <section className="flex flex-col overflow-hidden min-h-screen items-center justify-center py-12 px-4 sm:px-6 md:px-16">
      {/* Title */}
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-[4vw] w-[70%] gap-2 sm:gap-0 sm:w-full flex flex-wrap sm:flex-nowrap justify-center items-center font-bold mb-12 md:mb-[10vw] text-center"
      >
        <span className="md:text-[5vw] text-[12vw] font-bold font-poppins text-[#1C274C]">
          How{" "}
        </span>
        <span>
          <img
            loading="lazy"
            className="md:mx-4 mx-2 w-20 h-20 md:w-24 md:h-24 lg:w-30 lg:h-30 xl:h-32 xl:w-32 rounded-full object-cover"
            src="/image/aboutPage/Simha.webp"
            alt="image"
          />
        </span>{" "}
        <span className="md:text-[5vw] text-[12vw] font-bold font-poppins text-[#8D93A5]">
          DV&nbsp;
        </span>
        <span className="md:text-[5vw] text-[12vw] font-bold font-poppins text-[#1C274C]">
          Works
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Card 1 */}
        <motion.div
          ref={card1Ref}
          {...cardAnimation}
          className="p-6 sm:rounded-2xl flex flex-col justify-around sm:justify-between shadow-lg bg-[#E4F2FF] text-center mt-0 h-[400px] sm:h-[350px] md:h-[42vw] lg:h-[30vw] xl:h-[24vw] relative"
        >
          <div className="relative flex items-center justify-center">
            <div className="lg:pt-4">
              <img
                loading="lazy"
                src="/ic/Get The App.png"
                alt="Download App"
                className="w-[50vw] object-cover md:w-[18vw] lg:w-[14vw] mx-auto mb-4 rounded-xl"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl md:text-2xl font-semibold">Download App</h3>
            <p className="text-gray-500 mt-2 text-sm md:text-sm">
              DV on your phone! Go to App Store or Google Play.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          ref={card2Ref}
          {...cardAnimation}
          className="p-2 pb-6 lg:p-6 rounded-2xl flex flex-col justify-around sm:justify-between shadow-lg bg-[#6E7385] text-center mt-0 md:mt-3 h-[400px] sm:h-[350px] md:h-[42vw] lg:h-[30vw] xl:h-[24vw]"
        >
          <div className="flex flex-col gap-4 my-auto">
            <img
              loading="lazy"
              src="/ic/Get The App.png"
              alt="Download App"
              className="w-[50vw] md:w-[18vw] lg:w-[14vw] mx-auto mb-4 rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-2 text-white">
            <h3 className="text-2xl md:text-2xl font-semibold">Sign Up</h3>
            <p className="mt-2 text-sm md:text-sm">
              Log In With Your Number, Enter Your Details, And Your Personal
              Account Is Ready!
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          ref={card3Ref}
          {...cardAnimation}
          className="md:px-4 p-6 lg:p-6 flex flex-col justify-around sm:justify-between rounded-2xl shadow-lg bg-[#F6F8FF] text-center mt-0 md:mt-16 h-[400px] sm:h-[350px] md:h-[42vw] lg:h-[30vw] xl:h-[24vw] relative"
        >
          <div className="flex flex-col relative pt-[1vw] h-3/4">
            <img
              loading="lazy"
              src="/ic/Get The App.png"
              alt="Download App"
              className="w-[50vw] md:w-[18vw] lg:w-[14vw] mx-auto mb-4 rounded-xl"
            />
          </div>

          <div className="mt-auto">
            <h3 className="text-2xl md:text-2xl font-semibold">Switch Mode</h3>
            <p className="text-gray-500 mt-2 text-sm md:text-sm">
              Tap On Your Name To Switch Accounts Or Set Up A Creator/Business
              Page.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
