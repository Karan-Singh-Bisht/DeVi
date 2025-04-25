import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";

const faqData = [
  {
    title: "📌 Most Frequently Asked",
    items: [
      {
        q: "What makes this platform different from other social media apps?",
        a: "We prioritize real-world connection and meaningful content discovery. With features like Mapo, PopPins, and Visiofeed, you're always in sync with your interests, location, and community.",
      },
      {
        q: "Can I use the app without sharing my personal data?",
        a: "Yes! You have full control over your visibility and data. Choose what to share, with whom, and when.",
      },
      {
        q: "How does Infonics connect people nearby?",
        a: "Through smart Bluetooth and location signals, the platform matches you with others based on shared interests and keyword tags — no awkward ice-breakers needed.",
      },
      {
        q: "Is this app free to use?",
        a: "Yes, the core features are completely free! Premium features may be introduced later with added value.",
      },
    ],
  },
  {
    title: "👤 Account & Login",
    items: [
      {
        q: "How do I sign up for the platform?",
        a: "Simply enter your mobile number, verify via OTP, and you're in! No email or password hassle.",
      },
      {
        q: "I didn't receive my OTP. What should I do?",
        a: 'Make sure your network is stable. If not received within a few minutes, tap "Resend OTP" on the verification screen.',
      },
      {
        q: "Can I use the same account on multiple devices?",
        a: "Yes, but you'll be required to re-verify via OTP on each new device for security reasons.",
      },
      {
        q: "How do I update my profile or preferences?",
        a: "Tap your avatar > Settings > Profile or Preferences. You can update your InfoCard, interests, visibility, and language here.",
      },
    ],
  },
  {
    title: "💳 InfoCard / Virtual Visiting Card",
    items: [
      {
        q: "What is InfoCard?",
        a: "InfoCard is your virtual identity — a smart profile that helps others discover you at events, workplaces, or cafes within 100m using Bluetooth-based keyword matching.",
      },
      {
        q: "Can I hide my InfoCard visibility?",
        a: "Yes. You can toggle visibility based on time, location, or even audience type (e.g., Professionals only, Friends only).",
      },
      {
        q: "Is InfoCard secure for networking?",
        a: "Absolutely. Only those within range and matching your keywords will see your profile, and you can approve any connection.",
      },
      {
        q: "Can I customize my InfoCard for different scenarios?",
        a: "Yes! You can save multiple modes like 'Event', 'Work', or 'Chill', and switch between them in a tap.",
      },
    ],
  },
  {
    title: "📍 Mapo & PopPins",
    items: [
      {
        q: "What is Mapo?",
        a: "Mapo is your dynamic map that shows people, places, and opportunities around you — from cafes to creators to car chargers.",
      },
      {
        q: "How are PopPins different from regular map markers?",
        a: "PopPins are curated by real users, verified by activity, and tailored to your preferences — no fake reviews or outdated spots.",
      },
      {
        q: "Can I add my own PopPins?",
        a: "Yes! Just long press a location and tag it with a category, image, and description. You'll help others explore better.",
      },
      {
        q: "Is GPS required for Mapo?",
        a: "It enhances accuracy but many discovery features also work via Bluetooth for close-range discovery and low-data usage.",
      },
    ],
  },
  {
    title: "💡 Content & Visiofeed",
    items: [
      {
        q: "How does Visiofeed work?",
        a: "Visiofeed is a swipe-based feed tailored to your interests, language, and location. You swipe, save, double-tap to view more — and even match with creators or fans like you.",
      },
      {
        q: "Can I filter what content I see?",
        a: "Yes! You can filter content based on categories, tags, location range, and preferred language.",
      },
      {
        q: "Can I post my own content?",
        a: "Absolutely. Share photos, short videos, or PopPins. Tag topics or locations for better reach.",
      },
      {
        q: "Will I see content in my language?",
        a: "Yes, we support multilingual feeds and allow you to set a preferred language for content and discovery.",
      },
    ],
  },
  {
    title: "🎉 Events & Discovery",
    items: [
      {
        q: "How can I find events happening near me?",
        a: "Use the Mapo or PopPins feature to view real-time local events, meetups, or hotspots around you—customized to your interests and location.",
      },
      {
        q: "Can I create my own event or gathering?",
        a: "Yes! Tap the '+' button in Mapo or Events and fill in the details. You can make it public, private, or interest-specific.",
      },
      {
        q: "Will my event be discoverable by others nearby?",
        a: "Yes, if you allow public visibility, it will appear on the map for people within range or those interested in the event category.",
      },
      {
        q: "Can I match with attendees before or during an event?",
        a: "Definitely! Infonics allows profile visibility at events, so you can view, connect, and meet people before the awkward introductions.",
      },
    ],
  },
  {
    title: "🔐 Privacy & Security",
    items: [
      {
        q: "Is my location always visible to others?",
        a: "No. You control when and where your location is shared. You can turn off visibility anytime in the privacy settings.",
      },
      {
        q: "How do I manage who can see my InfoCard or profile?",
        a: "You can choose between Public, Only Nearby, Friends, or Custom audiences. Toggle visibility based on situation.",
      },
      {
        q: "Are the profiles on the app verified?",
        a: "Yes, we verify all users through number-based verification and give options for further professional or identity-based verification.",
      },
      {
        q: "Can I block or report users?",
        a: "Absolutely. Tap on the profile > More Options > Block or Report. Your safety and comfort come first.",
      },
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
    <div className="px-4 py-10 max-w-7xl mx-auto bg-white">
      <motion.h1
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        className="text-center font-bold text-[#1C274C] font-poppins text-[8vw] sm:text-[4vw] md:text-[3.5vw] mb-10"
      >
        <span>Your Curiosity</span>,<br />
        <span className="text-[#8D93A5]">Our Clarity!</span>
      </motion.h1>

      {faqData.map((section, index) => (
        <section key={index} className="mb-8 border-b pb-6">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleOpen(index)}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-[#1C274C]">
              {section.title}
            </h2>
            {openIndexes[index] ? <FaChevronUp /> : <FaChevronDown />}
          </div>

          <motion.div
            initial={false}
            animate={{
              height: openIndexes[index] ? "auto" : 0,
              opacity: openIndexes[index] ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-3"
          >
            <ul className="space-y-4">
              {section.items.map((item, idx) => (
                <li key={idx} className="text-[1rem] text-gray-800">
                  <strong>
                    {idx + 1}. {item.q}
                  </strong>
                  <br />
                  <span className="text-gray-600">{item.a}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>
      ))}
    </div>
  );
};

export default Questions;
