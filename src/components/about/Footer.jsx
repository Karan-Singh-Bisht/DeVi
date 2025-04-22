import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="w-full bg-[#E3E5FC]">
      <footer className="bg-black text-white py-10 px-6 md:px-20 rounded-x-3xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-[#dcdcff] tracking-wide">
              DV
            </h1>
            <div className="flex gap-4">
              <div className="flex gap-4">
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.harsar.devi"
                  className="flex items-center justify-center hover:cursor-pointer gap-2 bg-white w-44 h-12 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <span class="text-black font-bold">Play Store</span>
                  <img
                    src="/image/aboutPage/1_3.png"
                    alt="Play Store"
                    class="h-6 w-auto"
                  />
                </a>

                <a
                  target="_blank"
                  href="https://apps.apple.com/app/devi-hyper-social-media/id6642651947"
                  className="flex items-center justify-center hover:cursor-pointer gap-2 bg-white w-44 h-12 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <span className="text-black font-bold">App Store</span>
                  <img
                    src="/image/aboutPage/1_4.png"
                    alt="App Store"
                    className="h-6 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">DV</h2>
            <a href="/about">About Us</a>
            <a target="_blank" href="https://careers.harsar.in">
              Careers
            </a>
            <a target="_blank" href="/terms&conditions">
              Terms & Conditions
            </a>
            <a target="_blank" href="privacyPolicy">
              Privacy Policy
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">For Business</h2>
            <a href="#">Become A Partner</a>
            <a href="#">Partner FAQs</a>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">Help & Support</h2>
            <a href="about#contact">Contact Us</a>
            <a href="#">FAQs</a>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-400">
          <p>
            By <span className="font-semibold text-white">HarSar</span>
          </p>
          <p>© 2025 HarSar Infonics. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
