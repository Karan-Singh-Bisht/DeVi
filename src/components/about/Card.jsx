import React from "react";

const Card = ({ iconBgColor, icon, title, para }) => {
  return (
    <div className="flex flex-col p-6 w-[90%] gap-4 sm:w-[16vw] bg-white rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div
        className={`flex items-center justify-center w-14 h-14 rounded-full ${iconBgColor}`}
      >
        <img src={icon} alt={title} className="w-8 h-8" />
      </div>
      <h4 className="font-semibold sm:text-[1.8vw] text-gray-800 tracking-tighter word-spacing-tight">
        {title}
      </h4>
      <p className="text-sm opacity-80 text-gray-600">{para}</p>
    </div>
  );
};

export default Card;
