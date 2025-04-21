import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Google = () => {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=yourAppId"
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex 
        items-center 
        gap-2 
        rounded-md 
        bg-white 
        border 
        border-gray-300 
        px-4 
        py-2 
        hover:shadow 
        transition-shadow 
        duration-200
      "
    >
      {/* Google Play Icon */}
      <IoLogoGooglePlaystore />

      {/* Button Text */}
      <span className="text-sm p-1 font-semibold">Get the App</span>
    </a>
  );
};

export default Google;
