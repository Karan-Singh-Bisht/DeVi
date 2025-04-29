import { useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function Video() {
  const [canPlay, setCanPlay] = useState(false);

  return (
    <div className="relative z-10 flex justify-center items-center p-2 sm:p-4 md:p-6 lg:p-8">
      {/* Video Container */}
      <div
        className="relative group flex justify-center items-center"
        onMouseEnter={(e) => {
          if (canPlay) {
            const video = e.currentTarget.querySelector("video");
            if (video) {
              video.muted = false;
              video.play();
            }
          }
        }}
        onMouseLeave={(e) => {
          const video = e.currentTarget.querySelector("video");
          if (video) {
            video.pause();
            video.currentTime = 0;
            video.muted = true;
          }
        }}
      >
        <video
          src="/video/DV-Intro.webm"
          className="rounded-full object-cover w-[90vw] h-[90vw] sm:w-[60vw] sm:h-[60vw] md:w-[55vw] md:h-[55vw] lg:w-[40vw] lg:h-[40vw] xl:w-[35vw] xl:h-[35vw]"
          loop
          playsInline
          preload="metadata"
          muted
        />

        {/* Play Button (visible overlay before click) */}
        {!canPlay && (
          <button
            onClick={() => setCanPlay(true)}
            className="absolute inset-0 flex justify-center items-center rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition"
          >
            <FaPlay className="text-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
          </button>
        )}
      </div>
    </div>
  );
}
