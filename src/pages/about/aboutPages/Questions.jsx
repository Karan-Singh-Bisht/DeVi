import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    title: "📌 Most Frequently Asked",
    items: [
      <>
        1. What makes this platform different from other social media apps?
        <br />
        We prioritize real-world connection and meaningful content discovery.
        With features like Mapo, PopPins, and Visiofeed, you're always in sync
        with your interests, location, and community.
      </>,
      <>
        2. Can I use the app without sharing my personal data?
        <br />
        Yes! You have full control over your visibility and data. Choose what to
        share, with whom, and when.
      </>,
      <>
        3. How does Infonics connect people nearby?
        <br />
        Through smart Bluetooth and location signals, the platform matches you
        with others based on shared interests and keyword tags — no awkward
        ice-breakers needed.
      </>,
      <>
        4. Is this app free to use?
        <br />
        Yes, the core features are completely free! Premium features may be
        introduced later with added value.
      </>,
    ],
  },
  {
    title: "👤 Account & Login",
    items: [
      <>
        1. How do I sign up for the platform?
        <br />
        Simply enter your mobile number, verify via OTP, and you're in! No email
        or password hassle.
      </>,
      <>
        2. I didn't receive my OTP. What should I do?
        <br />
        Make sure your network is stable. If not received within a few minutes,
        tap "Resend OTP" on the verification screen.
      </>,
      <>
        3. Can I use the same account on multiple devices?
        <br />
        Yes, but you'll be required to re-verify via OTP on each new device for
        security reasons.
      </>,
      <>
        4. How do I update my profile or preferences?
        <br />
        Tap your avatar &gt; Settings &gt; Profile or Preferences. You can
        update your InfoCard, interests, visibility, and language here.
      </>,
    ],
  },
  {
    title: "💳 InfoCard / Virtual Visiting Card",
    items: [
      <>
        1. What is InfoCard?
        <br />
        InfoCard is your virtual identity — a smart profile that helps others
        discover you at events, workplaces, or cafes within 100m using
        Bluetooth-based keyword matching.
      </>,
      <>
        2. Can I hide my InfoCard visibility?
        <br />
        Yes. You can toggle visibility based on time, location, or even audience
        type (e.g., Professionals only, Friends only).
      </>,
      <>
        3. Is InfoCard secure for networking?
        <br />
        Absolutely. Only those within range and matching your keywords will see
        your profile, and you can approve any connection.
      </>,
      <>
        4. Can I customize my InfoCard for different scenarios?
        <br />
        Yes! You can save multiple modes like 'Event', 'Work', or 'Chill', and
        switch between them in a tap.
      </>,
    ],
  },
  {
    title: "📍 Mapo & PopPins",
    items: [
      <>
        1. What is Mapo?
        <br />
        Mapo is your dynamic map that shows people, places, and opportunities
        around you — from cafes to creators to car chargers.
      </>,
      <>
        2. How are PopPins different from regular map markers?
        <br />
        PopPins are curated by real users, verified by activity, and tailored to
        your preferences — no fake reviews or outdated spots.
      </>,
      <>
        3. Can I add my own PopPins?
        <br />
        Yes! Just long press a location and tag it with a category, image, and
        description. You'll help others explore better.
      </>,
      <>
        4. Is GPS required for Mapo?
        <br />
        It enhances accuracy but many discovery features also work via Bluetooth
        for close-range discovery and low-data usage.
      </>,
    ],
  },
  {
    title: "💡 Content & Visiofeed",
    items: [
      <>
        1. How does Visiofeed work?
        <br />
        Visiofeed is a swipe-based feed tailored to your interests, language,
        and location. You swipe, save, double-tap to view more — and even match
        with creators or fans like you.
      </>,
      <>
        2. Can I filter what content I see?
        <br />
        Yes! You can filter content based on categories, tags, location range,
        and preferred language.
      </>,
      <>
        3. Can I post my own content?
        <br />
        Absolutely. Share photos, short videos, or PopPins. Tag topics or
        locations for better reach.
      </>,
      <>
        4. Will I see content in my language?
        <br />
        Yes, we support multilingual feeds and allow you to set a preferred
        language for content and discovery.
      </>,
    ],
  },
  {
    title: "🎉 Events & Discovery",
    items: [
      <>
        1. How can I find events happening near me?
        <br />
        Use the Mapo or PopPins feature to view real-time local events, meetups,
        or hotspots around you—customized to your interests and location.
      </>,
      <>
        2. Can I create my own event or gathering?
        <br />
        Yes! Tap the '+' button in Mapo or Events and fill in the details. You
        can make it public, private, or interest-specific.
      </>,
      <>
        3. Will my event be discoverable by others nearby?
        <br />
        Yes, if you allow public visibility, it will appear on the map for
        people within range or those interested in the event category.
      </>,
      <>
        4. Can I match with attendees before or during an event?
        <br />
        Definitely! Infonics allows profile visibility at events, so you can
        view, connect, and meet people before the awkward introductions.
      </>,
    ],
  },
  {
    title: "🔐 Privacy & Security",
    items: [
      <>
        1. Is my location always visible to others?
        <br />
        No. You control when and where your location is shared. You can turn off
        visibility anytime in the privacy settings.
      </>,
      <>
        2. How do I manage who can see my InfoCard or profile?
        <br />
        You can choose between Public, Only Nearby, Friends, or Custom
        audiences. Toggle visibility based on situation.
      </>,
      <>
        3. Are the profiles on the app verified?
        <br />
        Yes, we verify all users through number-based verification and give
        options for further professional or identity-based verification.
      </>,
      <>
        4. Can I block or report users?
        <br />
        Absolutely. Tap on the profile &gt; More Options &gt; Block or Report.
        Your safety and comfort come first.
      </>,
    ],
  },
];

// Fixed the export syntax - removed "function" keyword
const Questions = () => {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleOpen = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto bg-white">
      <h1 className="text-[3vw] font-bold font-poppins mb-8 text-center">
        <span className="text-[#1C274C]">Your Curiosity</span>,
        <br /> <span className="text-[#8D93A5]">Our Clarity!</span>
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
                <ul className="pl-5 space-y-2">
                  {section.items.map((item, idx) => (
                    <li className="text-lg" key={idx}>
                      {item}
                    </li>
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
