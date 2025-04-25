import React from "react";

const StoreButton = ({ icon: Icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <button className="w-[12vw] md:w-[8vw] lg:w-[4vw] h-[12vw] md:h-[8vw] lg:h-[4vw] rounded-full bg-white shadow-md flex items-center justify-center">
      <Icon className="w-[6vw] md:w-[4vw] lg:w-[2vw] h-[6vw] md:h-[4vw] lg:h-[2vw]" />
    </button>
  </a>
);

export default StoreButton;
