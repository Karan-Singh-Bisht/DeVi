import React from "react";

const stackItems = [
  {
    title: "Home Screen",
    number: "01",
    // img: "./image/aboutPage/5_1.png",
    bg: "bg-blue-200",
  },
  {
    title: "Discover The City Like A Pro",
    number: "02",
    img: "/image/aboutPage/3_6.png",
    bg: "bg-blue-300",
  },
  {
    title: "AI Powered VR Experience",
    number: "03",
    img: "/image/aboutPage/3_5.png",
    bg: "bg-orange-200",
  },
  {
    title: "Personalized Chats",
    number: "04",
    img: "/image/aboutPage/3_3.png",
    bg: "bg-purple-200",
  },
  {
    title: "Meet, Mingle, & Explore",
    number: "05",
    img: "/image/aboutPage/3_2.png",
    bg: "bg-pink-200",
  },
];

const ResponsiveCardStack = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="bg-black w-[90%] text-center md:w-[40%] p-6 rounded-3xl shadow-lg">
        {/* Title */}
        <h1 className="text-white text-[7vw] font-bold">
          <span className="text-blue-400">Always</span> One <br></br>Step Ahead
        </h1>

        <div className="mt-6 flex flex-col items-center justify-center gap-6 md:gap-4">
          {stackItems.map((item, index) => (
            <div key={index}>
              <div
                className={`flex flex-col h-[85vw] w-[80vw] md:flex-row items-center justify-center gap-4 p-4 ${item.bg} rounded-xl shadow-md transition-all hover:scale-105`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-fit md:w-[35vw] object-cover rounded-lg"
                />
              </div>
              <h1 className="text-white text-lg md:text-xl font-bold">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCardStack;
