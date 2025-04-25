import { useState, useEffect, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "./styles.css";

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    id: 1,
  },
];

// Desktop Component with Animation
const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section ref={targetRef} className="relative bg-[#8D93A5] h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <motion.div
      initial={{ x: 700, opacity: 0 }}
      whileInView={{ x: -100, opacity: 1 }}
      transition={{ duration: 1 }}
      key={card.id}
      className="group w-[800vw] h-[100px] relative md:h-[450px] md:w-[300vw] overflow-hidden"
    >
      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>

      {/* Text & Image Container */}
      <div className="absolute inset-0 z-10 flex items-center justify-center gap-4">
        <p className="text p-8 text-[30vw] md:text-[14vw] font-black text-white flex items-center">
          <span className="font-madimiOne">Explore,</span>
          &nbsp;
          {/* Circle Image */}
          <span className="md:w-[12vw] md:h-[10vw] h-[20vw] w-[20vw] rounded-full bg-white flex items-center justify-center overflow-hidden shadow-lg">
            <img
              src="./image/aboutPage/Simha.png"
              alt="Profile"
              className="md:w-full md:h-full w-[20vw] h-[20vw] object-cover rounded-full"
            />
          </span>
          &nbsp;
          <span className="font-madimiOne">Enrich,</span>
          &nbsp;
          <span className="font-madimiOne">Experience</span>
          &nbsp;<span className=" font-madimiOne">&</span>
          &nbsp;
          <span className=" font-madimiOne">Embrace</span>
        </p>
      </div>
    </motion.div>
  );
};

// Mobile Component (No Animation)
const MobileComponent = () => {
  return (
    <section className="bg-[#E1C5FE] h-[80vw] flex p-8">
      <p className="text-center text-[10vw] font-black text-[#1D284D]">
        <span className="text-[#828282]">Just</span> Explore, Enrich, Embrace
      </p>
    </section>
  );
};

// Parent Component: Switches between Mobile & Desktop
const ResponsiveHorizontalComponent = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop ? <HorizontalScroll /> : <MobileComponent />;
};

export default ResponsiveHorizontalComponent;
