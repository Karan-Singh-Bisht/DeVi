import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Adjust scroll transformation distance based on screen size and number of cards
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? "40%" : "1%", isMobile ? "-40%" : "-65%"]
  );

  // Check if the screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section
      ref={targetRef}
      className="relative h-[200vh] md:h-[300vh] bg-white"
    >
      {isMobile ? (
        <div className="sticky top-0 flex h-screen items-center overflow-hidden flex-col">
          <div className="bg-white w-full text-center py-6 px-4 sticky top-0 z-10">
            <img
              loading="lazy"
              className="rounded-full w-12 h-12 mx-auto"
              src="/image/aboutPage/1_1.png"
              alt="Profile"
            />
            <h1 className="text-3xl sm:text-4xl font-medium mt-3">Why DV</h1>
            <p className="font-semibold text-base sm:text-lg tracking-wide mt-1">
              is your best social media
            </p>
          </div>

          {/* Horizontal scroll section */}
          <div className="sticky top-0 flex h-[100vh] items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-4">
              {cards.map((card) => (
                <Card card={card} key={card.id} isMobile={isMobile} />
              ))}
            </motion.div>
          </div>
        </div>
      ) : (
        // Desktop layout (unchanged)
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4 md:gap-6 lg:gap-8">
            {/* Header Card */}
            <div className="bg-white min-w-[280px] sm:min-w-[320px] md:min-w-[360px] lg:w-[30vw] px-6 py-6 sm:px-8 md:px-10 lg:px-[6vw] lg:py-[4vw] tracking-tighter">
              <img
                loading="lazy"
                className="rounded-full bg-gray-200 w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[6vw] lg:h-[6vw]"
                src="/image/aboutPage/GirlRightImage.png"
                alt="Profile"
              />
              <h1 className="text-3xl sm:text-4xl font-poppins md:text-[5vw] flex flex-col gap-12 text-[#1C274C] font-bold mt-8">
                Why
                <br />
                <span className="md:text-[5vw] text-[8vw] font-bold font-poppins text-[#8D93A5]">
                  DV
                </span>
              </h1>
              <p className="font-base text-base sm:text-lg md:text-xl tracking-wide mt-5 font-openSans">
                is your best social media
              </p>
            </div>

            {/* Horizontal Cards */}
            {cards.map((card) => (
              <Card card={card} key={card.id} isMobile={isMobile} />
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
};

const Card = ({ card, isMobile }) => {
  return (
    <div
      key={card.id}
      className="group relative rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[3vw] 
                h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] 
                min-w-[400px] sm:min-w-[400px] md:min-w-[600px] lg:min-w-[850px] 
                overflow-hidden"
      style={{ backgroundColor: card.bgColor }}
    >
      {isMobile ? (
        // Mobile layout - Vertical arrangement
        <div className="flex flex-col h-full">
          {/* Content in vertical layout for mobile */}
          <div className="p-6 flex-1">
            <h1 className="text-xl sm:text-2xl font-black uppercase text-black leading-tight">
              {card.title}
            </h1>
            <p className="mt-2 text-xs sm:text-sm font-black text-gray-500">
              {card.para}
            </p>
          </div>

          {/* Image at bottom for mobile */}
          <div
            className="h-full w-full bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${card.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center bottom",
            }}
          ></div>
        </div>
      ) : (
        // Desktop layout - Horizontal arrangement (unchanged)
        <>
          <div
            style={{
              backgroundImage: `url(${card.url})`,
              backgroundSize: "50%",
              backgroundPosition: "right bottom",
              backgroundRepeat: "no-repeat",
            }}
            className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
          ></div>
          <p className="absolute top-10 font-openSans left-10">{card.id}</p>
          <div className="absolute z-10 flex flex-col bottom-6 sm:bottom-8 md:bottom-10">
            <h1
              className="font-poppins from-white/20 to-white/0 px-4 sm:px-6 md:px-8 
                    text-xl sm:text-2xl md:text-3xl lg:text-[2.5vw] 
                    font-semibold text-black leading-tight md:leading-none"
            >
              {card.title}
            </h1>
            <p
              className="bg-gradient-to-br tracking-wider font-openSans from-white/20 to-white/0 
                  p-4 sm:p-6 md:p-8 
                  text-xs sm:text-sm md:text-base lg:text-[1vw] 
                  font-semibold text-gray-500"
            >
              {card.para}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default HorizontalScrollCarousel;

const cards = [
  {
    url: "/image/aboutPage/GirlLeftSide.png",
    title: (
      <>
        One Platform for
        <br />
        Everything
      </>
    ),
    para: "Discover in new way, Instead of Generic ones",
    id: 1,
    bgColor: "#F3F3F5",
  },
  {
    url: "/image/aboutPage/GirlTeeth.png",
    title: (
      <>
        Less Noise, More <br />
        Relevance
      </>
    ),
    para: (
      <>
        No random feeds - just content
        <br /> that truly matters to you
      </>
    ),
    id: 2,
    bgColor: "#F5EEFF",
  },
  {
    url: "/image/aboutPage/GirlOpenMouth.png",
    title: (
      <>
        Effortless <br /> Socializing
      </>
    ),
    para: (
      <>
        Find & interact with people who <br />
        match your vibe, effortlessly
      </>
    ),
    id: 3,
    bgColor: "#FFF5E0",
  },
  {
    url: "/image/aboutPage/GirlTOngue.png",
    title: (
      <>
        Mapo Spots <br /> & Events
      </>
    ),
    para: (
      <>
        Find trendings, real-time hotspots,
        <br /> and the right people around you.
      </>
    ),
    id: 4,
    bgColor: "#FFE8E0",
  },
  {
    url: "/image/aboutPage/GirlRight.png",
    title: (
      <>
        Verfied Profiles <br />& Secure Space
      </>
    ),
    para: (
      <>
        Your personal chat space - private, <br />
        purposeful, and protected.
      </>
    ),
    id: 5,
    bgColor: "#FFD4E0",
  },
];
