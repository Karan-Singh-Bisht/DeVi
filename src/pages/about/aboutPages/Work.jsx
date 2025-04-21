import { motion } from "framer-motion";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaApple, FaAndroid } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { CiLock } from "react-icons/ci";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const card1Ref = useRef();
  const card2Ref = useRef();
  const card3Ref = useRef();

  useGSAP(() => {
    gsap.fromTo(
      card2Ref.current,
      { y: 0 },
      {
        y: -100,
        duration: 0.5,
        scrollTrigger: {
          trigger: card2Ref.current,
          start: "top 50%",
          end: "bottom 70%",
          scrub: 1,
        },
      },
      [card2Ref]
    );
    gsap.fromTo(
      card3Ref.current,
      { y: 0 },
      {
        y: -200,
        duration: 0.5,
        scrollTrigger: {
          trigger: card3Ref.current,
          start: "top 50%",
          end: "bottom 70%",
          scrub: 1,
        },
      },
      [card3Ref]
    );
  });

  return (
    <section className="flex flex-col overflow-x-hidden min-h-screen items-center justify-center bg-[#B1BCE0] py-12 px-4 sm:px-6 md:px-16">
      {/* Title */}
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-[4vw] font-bold mb-12 md:mb-[10vw] text-center"
      >
        How <span className="text-purple-600">DeVi</span> Works
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Card 1 */}
        <motion.div
          ref={card1Ref}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="p-6 rounded-2xl flex flex-col justify-between shadow-lg bg-[#E4F2FF] text-center mt-0 h-[400px] sm:h-[350px] md:h-[24vw] relative"
        >
          <div className="relative flex items-center justify-center">
            <button className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:left-12 md:transform-none md:-translate-x-0 md:-translate-y-1/2 z-10 items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-[#041C45] text-white text-base md:text-lg font-semibold rounded-full shadow-md border-2 border-purple-500 hover:bg-[#062A6E] transition-all">
              <FaApple className="text-xl md:text-2xl" />
              <FaAndroid className="text-xl md:text-2xl" />
              <span className="text-sm md:text-xl">Get The App</span>
            </button>
            <div className="pt-10">
              <img
                src="/image/aboutPage/8_1.png"
                alt="Download App"
                className="w-20 md:w-[6vw] mx-auto mb-4 rounded-xl"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">Download App</h3>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              DeVi on your phone! Go to App Store or Google Play.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          ref={card2Ref}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="p-6 rounded-2xl flex flex-col justify-between shadow-lg bg-[#6E7385] text-center mt-0 md:mt-7 h-[400px] sm:h-[350px] md:h-[24vw]"
        >
          <div className="flex flex-col gap-4 my-auto">
            <div className="flex bg-white items-center rounded-full">
              <CgMail className="text-xl text-blue-500 mx-auto" />
              <form>
                <input
                  className="rounded-full py-3 md:py-4 pr-4 w-full text-sm md:text-base"
                  placeholder="example@gmail.com"
                  name="email"
                  disabled
                />
              </form>
            </div>
            <div className="flex bg-white items-center rounded-full">
              <CiLock className="text-xl text-blue-500 mx-auto" />
              <form>
                <input
                  className="rounded-full py-3 md:py-4 pr-4 w-full text-sm md:text-base"
                  placeholder="........."
                  type="password"
                  autoComplete="new-password"
                  name="password"
                  disabled
                />
              </form>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-white">
            <h3 className="text-2xl md:text-3xl font-semibold">Sign Up</h3>
            <p className="mt-2 text-sm md:text-base">
              Input your info and preferences to begin your Homie lifestyle.
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          ref={card3Ref}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="px-6 pb-6 flex flex-col justify-between rounded-2xl shadow-lg bg-[#F6F8FF] text-center mt-0 md:mt-16 h-[400px] sm:h-[350px] md:h-[24vw] relative"
        >
          <div className="flex flex-col relative pt-[1vw] h-3/4">
            {/* Image positioning preserved but made responsive */}
            <div className="absolute z-10 w-[140vw] top-[50%] md:w-[20vw] md:top-[25%] md:left-0">
              <img
                src="/image/aboutPage/8_4.png"
                alt="Earn Cashback"
                className="w-[40%] md:w-[14vw] h-auto md:mx-[-2vw] md:my-[6vw]"
              />
            </div>
            <div className="absolute z-0 w-[150vw] md:w-[35vw] top-[20%] md:right-0 md:top-[8vw]">
              <img
                src="/image/aboutPage/8_2.png"
                alt="Earn Cashback"
                className="w-[40%] md:w-[14vw] h-auto md:mx-[18vw] md:my-[-2vw]"
              />
            </div>
            <div className="absolute w-[150vw] top-[40%] left-[40%] md:right-0 md:top-[6vw]">
              <img
                src="/image/aboutPage/8_3.png"
                alt="Earn Cashback"
                className="w-[40%] md:w-[16vw] h-auto"
              />
            </div>
          </div>

          <div className="mt-auto">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Earn Cashback
            </h3>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Get rewarded handsomely every time you use the app.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
