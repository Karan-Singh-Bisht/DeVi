import { useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function Video() {
  const [canPlay, setCanPlay] = useState(false);

  return (
    <div className="relative z-10 hover:cursor-pointer rounded-full p-2 md:p-4 flex justify-center items-center group">
      {/* Video Container */}
      <div
        className="relative"
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
          src="/video/DV-Intro.mp4"
          className="w-24 h-24 md:w-[30vw] md:h-[30vw] object-cover rounded-full"
          loop
          playsInline
          preload="metadata"
          muted
        />

        {/* Play Button (only visible before first click) */}
        {!canPlay && (
          <button
            onClick={() => setCanPlay(true)}
            className="absolute inset-0 flex justify-center items-center rounded-full text-white hover:bg-black/60 transition"
          >
            <FaPlay className="w-6 h-6 md:w-10 md:h-10" />
          </button>
        )}
      </div>
    </div>
  );
}
