import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav
      className={`w-full h-[8vh] sm:h-[10vh] md:h-[12vh] flex justify-between px-4 md:px-12 sm:px-6`}
    >
      {/* Left Side: Back Button */}
      <button
        className="w-[15vw] h-[8vh] sm:w-20 md:w-24 lg:w-[5vw] md:h-[10vh] flex items-center justify-center bg-black rounded-b-full"
        onClick={() => navigate(-1)}
      >
        <IoChevronBack className="text-white text-[6vw] md:text-[4vw] sm:text-[6vw] lg:text-[3vw]" />
      </button>

      {/* Center Logo: Positioned Dynamically */}
      <div className="flex items-center mt-5 absolute left-1/2 transform -translate-x-1/2">
        <img
          src="./image/homePage/Logo.png"
          alt="Company Name"
          className="w-[22vw] sm:w-[7vw] md:w-[6vw] h-[14vw] sm:h-[5vw] md:h-[4vw]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
