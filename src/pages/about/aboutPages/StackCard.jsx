import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef, useState, useEffect } from "react";
import ResponsiveCardStack from "../../../components/about/ResponsiveCardStack";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { url: "/image/aboutPage/8_1.png", bgColor: "from-purple-500 to-pink-500" },
  { url: "/image/aboutPage/8_2.png", bgColor: "from-green-500 to-blue-500" },
  { url: "/image/aboutPage/8_3.png", bgColor: "from-yellow-500 to-orange-500" },
  { url: "/image/aboutPage/8_4.png", bgColor: "from-yellow-500 to-orange-500" },
  { url: "/image/aboutPage/9_1.png", bgColor: "from-yellow-500 to-orange-500" },
];

const StackCard = () => {
  const containerRef = useRef(null);
  const blackCardRef = useRef(null);
  const imageWrapperRef = useRef(null); // ref for the wrapper
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll-triggered animation
  useGSAP(() => {
    if (!isDesktop) return;

    gsap.to(cardRefs.current, {
      yPercent: -100 * (images.length - 1),
      ease: "power2.out",
      scrollTrigger: {
        trigger: blackCardRef.current,
        start: "top 20%",
        end: `bottom 0%`,
        scrub: 1,
        pin: true,
        markers: false,
        onUpdate: (self) => {
          const scrollY = self.scroll();
          {
            console.log(scrollY);
          }
          let newIndex = null;
          const breakingPoints = [12500, 12600, 12700, 12900, 13200];
          breakingPoints.forEach((point, index) => {
            if (scrollY >= point) {
              newIndex = index;
            }
          });
          setActiveIndex(newIndex);
        },
      },
    });
  }, [isDesktop]);

  // Scroll to image when text is clicked
  const handleTextClick = (index) => {
    setActiveIndex(index);
    gsap.to(cardRefs.current, {
      yPercent: -100 * index,
      duration: 1,
      ease: "power2.out",
    });
  };

  if (!isDesktop) {
    return <ResponsiveCardStack />;
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-[100vh] md:h-[200vh] py-[3vw] flex justify-center"
    >
      <div
        ref={blackCardRef}
        className="blackCard bg-black w-[85%] p-5 flex h-[50vw] md:h-[40vw] gap-10 rounded-3xl relative"
      >
        {/* Left Scrolling Section (Images) */}
        <div className="relative overflow-hidden w-[50%] h-full">
          <div
            ref={imageWrapperRef}
            className="flex flex-col absolute gap-10"
            style={{ top: 0 }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`bg-gradient-to-r ${image.bgColor} h-[29vw] w-[27vw] rounded-3xl shadow-lg transition-transform`}
              >
                <img
                  src={image.url}
                  alt={`stack-${index}`}
                  className="object-cover w-full h-full rounded-3xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Fixed Section (Text) */}
        <div className="md:w-[50%] flex items-start">
          <div>
            <h1 className="md:text-[4vw] text-[3vw] text-white font-extrabold tracking-wide">
              Always One <br /> Step Ahead
            </h1>
            <ul className="text-[2vw] md:text-[1.2vw] text-gray-500 mt-6 space-y-3">
              {[
                "Curated Chaos",
                "MultiVerses of Creators",
                "Community Connections",
                "Vernacular Vibes",
                "Be The Buzz Maker",
              ].map((text, index) => (
                <li
                  key={index}
                  onClick={() => handleTextClick(index)}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <span className="text-xs px-[2px] py-[2px] md:text-sm bg-white text-black md:px-2 md:py-1 rounded-full">
                    {`0${index + 1}`}
                  </span>
                  <span
                    className={`transition-colors ${
                      activeIndex === index ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackCard;
