import React, { useEffect, useRef, useState } from "react";
import Footer from "../../components/home/Footer";
import { IoMdClose } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleVideoClick = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch((err) => {
          console.log("Autoplay failed:", err);
        });
      }
    }, 100);
  };

  const handleSubmit = () => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col min-h-screen w-full relative">
      {/* Navbar - Always visible */}
      <div className="h-[10vh] w-full pb-4 px-12 absolute">
        <div className="w-[15vw] h-[8vh] sm:w-20 md:w-24 lg:w-[5vw] md:h-[10vh] flex items-center justify-center bg-black rounded-b-full">
          <a href="https://www.harsar.in">
            <img
              className="object-cover h-12 w-12 sm:h-12 hover:cursor-pointer sm:w-12 md:h-14 md:w-14 lg:h-[4vw] lg:w-[4vw]"
              src="/image/homePage/1_1.png"
              alt="harsarLogo"
            />
          </a>
        </div>
      </div>

      {/* Mobile View - Only Instagram Login */}
      {isMobile && (
        <>
          <div className="text-center px-10 pt-10">
            <h1 className="text-3xl font-serif">DeVi</h1>
          </div>
          <div className="flex-grow flex flex-col items-center justify-start mt-12">
            <div className="flex flex-col items-center gap-6">
              <form onSubmit={handleSubmit} className="flex flex-col w-[80vw]">
                <input
                  className="border-2 border-gray-300 rounded-lg w-full p-2 mb-4"
                  type="text"
                  placeholder="phone number,username, or email"
                />
                <input
                  className="border-2 border-gray-300 rounded-lg p-2 mb-4"
                  type="password"
                  placeholder="password"
                />
                <button
                  type="submit"
                  className="rounded-lg text-white font-semibold p-2 mb-4 bg-blue-400"
                >
                  Log in
                </button>
              </form>
              <p>OR</p>
              <div className="flex gap-2 items-center">
                <span className="text-xl text-blue-400">
                  <FaFacebook />
                </span>
                <h4 className="text-blue-500">Log in with Facebook</h4>
              </div>
              <p>Forgot password?</p>
              <p className="text-center mt-10">
                Don't have an account?{" "}
                <span className="font-semibold">Sign Up</span>
              </p>
            </div>
          </div>
        </>
      )}

      {/* Desktop View - Original Content */}
      {!isMobile && (
        <main className="flex-grow w-full overflow-hidden flex flex-col lg:flex-row px-[10%] pt-28 pb-12 lg:py-12 justify-around items-center gap-12 lg:gap-0">
          <div>
            <img
              src="/image/homePage/1_2.png"
              className="object-cover w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw]"
              alt=""
            />
          </div>

          <div className="flex flex-col gap-4 items-center">
            <img
              src="/image/homePage/Logo.png"
              className="object-cover w-[40vw] sm:w-[28vw] md:w-[18vw] lg:w-[12vw]"
              alt=""
            />
            <h1 className="mt-5 font-semibold font-pacifico text-[2vw]">
              Defines Vision
            </h1>
            <div className="text-center mt-4">
              <button
                onClick={handleVideoClick}
                className="bg-gradient-to-b from-[#3b0d84] to-[#7a3bcd] text-white font-bold text-base sm:text-lg md:text-xl py-2 sm:py-2.5 md:py-3 px-5 sm:px-6 md:px-7 rounded-xl sm:rounded-2xl shadow-md hover:opacity-90 transition"
              >
                XRperience It
              </button>
              <p className="text-xs sm:text-sm text-gray-700 mt-1 italic">
                *Click above to view it
              </p>
            </div>

            <p className="font-extralight text-lg sm:text-xl mt-4">
              Download Now
            </p>

            <div className="flex gap-4">
              <a
                target="_blank"
                className="hover:cursor-pointer"
                href="https://play.google.com/store/apps/details?id=com.harsar.devi"
              >
                <img
                  src="/image/homePage/1_5.png"
                  className="object-cover w-[10vw] sm:w-[8vw] md:w-[5vw] lg:w-[3vw]"
                  alt="playStore"
                />
              </a>

              <a
                className="hover:cursor-pointer"
                target="_blank"
                href="https://apps.apple.com/app/devi-hyper-social-media/id6642651947"
              >
                <img
                  src="/image/homePage/1_6.png"
                  className="object-cover w-[10vw] sm:w-[8vw] md:w-[5vw] lg:w-[3vw]"
                  alt="appStore"
                />
              </a>
            </div>
          </div>
        </main>
      )}

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-[90%] max-w-[1280px] flex flex-col items-end gap-2">
            <div className="w-full flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white text-4xl hover:text-red-500 transition duration-200"
              >
                <IoMdClose />
              </button>
            </div>

            <video
              ref={videoRef}
              controls
              className="w-full h-auto max-h-[90vh] rounded-xl shadow-xl"
            >
              <source src="/image/homePage/DeVi.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Footer - Always visible */}
      <Footer />
    </div>
  );
};

export default Home;
