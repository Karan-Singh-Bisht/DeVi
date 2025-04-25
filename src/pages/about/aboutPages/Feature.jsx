import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Feature = () => {
  const [users, setUsers] = useState(0);
  const [downloads, setDownloads] = useState(0);
  const [countries, setCountries] = useState(0);

  // Simulating counter animation
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setUsers((prev) => (prev < 150 ? prev + 1 : 150));
  //     setDownloads((prev) => (prev < 300 ? prev + 2 : 300));
  //     setCountries((prev) => (prev < 50 ? prev + 1 : 50));
  //   }, 50);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <motion.div className="flex justify-center w-full h-screen items-center py-10">
      <motion.div
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row space-y-12 sm:space-y-0 sm:space-x-[10vw] px-4 sm:px-10 py-5 rounded-lg"
      >
        {/* Users */}
        <StatCard
          image="/image/aboutPage/Download.png"
          value={users}
          label="Downloads"
        />
        <Divider />
        {/* Downloads */}
        <StatCard
          image="/image/aboutPage/MAU.png"
          value={downloads}
          label="MAU"
        />
        <Divider />
        {/* Countries */}
        <StatCard
          image="/image/aboutPage/Swipes.png"
          value={countries}
          label="Swipes"
        />
        {/* <Divider />
        <StatCard
          image="/image/aboutPage/6_3.jpeg"
          value={countries}
          label="Countries"
        /> */}
      </motion.div>
    </motion.div>
  );
};

// Component for each stat card
const StatCard = ({ image, value, label }) => (
  <div className="flex flex-col items-center md:gap-2">
    <img
      loading="lazy"
      src={image}
      alt={label}
      className="w-[30vw] h-[30vw] rounded-3xl mb-2 sm:w-32 sm:h-32 md:w-[12vw] md:h-[12vw]"
    />
    <div className="flex flex-col items-center md:gap-4">
      <h2 className="text-3xl font-medium sm:text-2xl md:text-[3vw]">
        {value.toString().padStart(3, "0")}
      </h2>
      <p className="text-gray-600 text-lg sm:text-xl md:text-2xl">{label}</p>
    </div>
  </div>
);

// Divider line
const Divider = () => (
  <div className="hidden sm:block w-px bg-black h-[12vw] sm:h-32 md:h-[12vw]"></div>
);

export default Feature;
