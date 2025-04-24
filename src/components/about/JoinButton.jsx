import React from "react";

const JoinButton = (props) => {
  return (
    <button className="flex hover:opacity-90 items-center bg-blue-950 text-white px-4 py-2 sm:px-6 sm:py-4 md:px-12 rounded-2xl gap-2 sm:gap-3">
      <span className="text-base sm:text-xl font-semibold">{props.title}</span>
    </button>
  );
};

export default JoinButton;
