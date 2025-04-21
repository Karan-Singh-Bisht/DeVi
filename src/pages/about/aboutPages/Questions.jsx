import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    title: "Account & Login",
    items: [
      "We prioritize real-world connection and meaningful content discovery. With features like Mapo, PopPins, and Visiofeed, you’re always in sync with your interests, location, and community.",
      "Yes! You have full control over your visibility and data. Choose what to share, with whom, and when.",
      "Through smart Bluetooth and location engines, the platform matches you with others based on shared interests and keyword tags — no awkward ice-breakers needed.",
      "Yes, the core features are completely free! Premium features may be introduced later with added value.",
    ],
  },
  {
    title: "InfoCard & Virtual Visiting Card",
    items: [
      "We prioritize real-world connection and meaningful content discovery...",
      "Yes! You have full control over your visibility and data.",
      "Smart Bluetooth and location matching based on shared interests.",
      "Completely free core features, premium might come later.",
    ],
  },
  {
    title: "Mapo & PopPins",
    items: [
      "Stay synced with your surroundings using Mapo & PopPins.",
      "Control your sharing preferences and visibility easily.",
      "Effortless matching using Bluetooth and location-based tags.",
      "All basic features are free to use!",
    ],
  },
  {
    title: "Connect & Visiofeed",
    items: [
      "Visiofeed helps you discover live visual content tailored to you.",
      "Privacy-first with customizable visibility settings.",
      "Instant ice-breaker-free matching through shared tags.",
      "Enjoy all essential features at no cost!",
    ],
  },
  {
    title: "Events & Discovery",
    items: [
      "Find and join events that matter to you in real-time.",
      "Share only what you want, when you want.",
      "Connect with people through mutual interests seamlessly.",
      "Yes, most features are free with optional add-ons later.",
    ],
  },
];

const Questions = () => {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleOpen = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="px-4 py-10 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-[3vw] font-bold mb-8 text-center">
        Your Curiosity, <span className="text-purple-400">Our</span> <br />
        Clarity!
      </h1>

      {faqData.map((section, index) => (
        <section key={index} className="mb-10">
          <div className="flex flex-col py-4 transition-all ease-linear duration-300">
            <div
              className="flex justify-between items-center w-full cursor-pointer"
              onClick={() => toggleOpen(index)}
            >
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              {openIndexes[index] ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                openIndexes[index]
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              } overflow-hidden`}
            >
              <div className="overflow-hidden mt-2">
                <ul className="list-disc pl-5 space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Questions;
