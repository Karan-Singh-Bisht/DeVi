import React from "react";

const GetTheAppButton = ({ text, image }) => {
  return (
    <button className="flex items-center bg-blue-950 text-white px-3 py-1 rounded-2xl gap-1">
      <span className="text-sm font-semibold">{text}</span>
      <img src={image} alt={text} className="w-4 h-4 rounded-md" />
    </button>
  );
};

export default GetTheAppButton;
