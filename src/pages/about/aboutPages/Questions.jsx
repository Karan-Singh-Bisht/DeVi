import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    title: "📌 Most Frequently Asked",
    items: [
      "What makes this platform different from other social media apps?  We prioritize real-world connection and meaningful content discovery. With features like Mapo, PopPins, and Visiofeed, you're always in sync with your interests, location, and community.",
      "Can I use the app without sharing my personal data?  Yes! You have full control over your visibility and data. Choose what to share, with whom, and when.",
      "How does Infonics connect people nearby?  Through smart Bluetooth and location signals, the platform matches you with others based on shared interests and keyword tags — no awkward ice-breakers needed.",
      "Is this app free to use?  Yes, the core features are completely free! Premium features may be introduced later with added value.",
    ],
  },
  {
    title: "👤 Account & Login",
    items: [
      "How do I sign up for the platform?  Simply enter your mobile number, verify via OTP, and you’re in! No email or password hassle.",
      "I didn’t receive my OTP. What should I do?  Make sure your network is stable. If not received within a few minutes, tap “Resend OTP” on the verification screen.",
      "Can I use the same account on multiple devices?  Yes, but you’ll be required to re-verify via OTP on each new device for security reasons.",
      "How do I update my profile or preferences?  Tap your avatar > Settings > Profile or Preferences. You can update your InfoCard, interests, visibility, and language here.",
    ],
  },
  {
    title: "💳 InfoCard / Virtual Visiting Card",
    items: [
      "What is InfoCard?  InfoCard is your virtual identity — a smart profile that helps others discover you at events, workplaces, or cafes within 100m using Bluetooth-based keyword matching.",
      "Can I hide my InfoCard visibility?  Yes. You can toggle visibility based on time, location, or even audience type (e.g., Professionals only, Friends only).",
      "Is InfoCard secure for networking?  Absolutely. Only those within range and matching your keywords will see your profile, and you can approve any connection.",
      "Can I customize my InfoCard for different scenarios?  Yes! You can save multiple modes like 'Event', 'Work', or 'Chill', and switch between them in a tap.",
    ],
  },
  {
    title: "📍 Mapo & PopPins",
    items: [
      "What is Mapo?  Mapo is your dynamic map that shows people, places, and opportunities around you — from cafes to creators to car chargers.",
      "How are PopPins different from regular map markers?  PopPins are curated by real users, verified by activity, and tailored to your preferences — no fake reviews or outdated spots.",
      "Can I add my own PopPins?  Yes! Just long press a location and tag it with a category, image, and description. You’ll help others explore better.",
      "Is GPS required for Mapo?  It enhances accuracy but many discovery features also work via Bluetooth for close-range discovery and low-data usage.",
    ],
  },
  {
    title: "💡 Content & Visiofeed",
    items: [
      "How does Visiofeed work?  Visiofeed is a swipe-based feed tailored to your interests, language, and location. You swipe, save, double-tap to view more — and even match with creators or fans like you.",
      "Can I filter what content I see?  Yes! You can filter content based on categories, tags, location range, and preferred language.",
      "Can I post my own content?  Absolutely. Share photos, short videos, or PopPins. Tag topics or locations for better reach.",
      "Will I see content in my language?  Yes, we support multilingual feeds and allow you to set a preferred language for content and discovery.",
    ],
  },
  {
    title: "🎉 Events & Discovery",
    items: [
      "How can I find events happening near me?  Use the Mapo or PopPins feature to view real-time local events, meetups, or hotspots around you—customized to your interests and location.",
      "Can I create my own event or gathering?  Yes! Tap the '+' button in Mapo or Events and fill in the details. You can make it public, private, or interest-specific.",
      "Will my event be discoverable by others nearby?  Yes, if you allow public visibility, it will appear on the map for people within range or those interested in the event category.",
      "Can I match with attendees before or during an event?  Definitely! Infonics allows profile visibility at events, so you can view, connect, and meet people before the awkward introductions.",
    ],
  },
  {
    title: "🔐 Privacy & Security",
    items: [
      "Is my location always visible to others?  No. You control when and where your location is shared. You can turn off visibility anytime in the privacy settings.",
      "How do I manage who can see my InfoCard or profile?  You can choose between Public, Only Nearby, Friends, or Custom audiences. Toggle visibility based on situation.",
      "Are the profiles on the app verified?  Yes, we verify all users through number-based verification and give options for further professional or identity-based verification.",
      "Can I block or report users?  Absolutely. Tap on the profile > More Options > Block or Report. Your safety and comfort come first.",
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
