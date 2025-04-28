import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full h-16 sm:h-20 md:h-24 flex justify-between items-center px-4 sm:px-6 md:px-12 relative">
      {/* Left Side: Back Button */}
      <button
        className="h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-24 lg:w-28 flex items-center justify-center bg-black rounded-b-full"
        onClick={() => navigate(-1)}
      >
        <IoChevronBack className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
      </button>

      {/* Center Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-5 sm:top-6 md:top-8">
        <img
          src="./image/homePage/Logo.png"
          alt="Company Name"
          className="h-12 sm:h-14 md:h-16 w-auto object-contain"
        />
      </div>
    </nav>
  );
};

export default Navbar;
