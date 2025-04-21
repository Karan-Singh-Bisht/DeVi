import React from "react";

const Button = ({ text, image }) => {
  return (
    <button className="flex items-center bg-blue-950 text-white px-4 py-2 sm:px-6 sm:py-4 rounded-2xl gap-2 sm:gap-3">
      <span className="text-base sm:text-xl font-semibold">{text}</span>
      <img
        src={image}
        alt={text}
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-md"
      />
    </button>
  );
};

export default Button;
