import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="w-full bg-[#E3E5FC] pb-4">
      <footer className="bg-black rounded-3xl w-[99%] mx-auto text-white pt-16 px-6 md:px-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          {/* Logo + Store Links */}
          <div className="flex flex-col gap-6 max-w-xs">
            <Link to={"/"}>
              <img
                src="/image/aboutPage/DVWhiteLogo.png"
                alt="Logo Image"
                className="h-14 w-18"
              />
            </Link>
            <h1 className="text-3xl font-semibold">Defines Vision</h1>

            <div className="flex mt-4 gap-4">
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.harsar.devi"
                className="flex items-center justify-center gap-2 bg-white w-48 h-14 rounded-xl shadow-md hover:shadow-lg transition duration-200"
              >
                <span className="text-black text-lg font-semibold">
                  Play Store
                </span>
                <img
                  src="/image/aboutPage/1_3.png"
                  alt="Play Store"
                  className="h-7 w-auto"
                />
              </a>

              <a
                target="_blank"
                href="https://apps.apple.com/app/devi-hyper-social-media/id6642651947"
                className="flex items-center justify-center gap-2 bg-white w-48 h-14 rounded-xl shadow-md hover:shadow-lg transition duration-200"
              >
                <span className="text-black text-lg font-semibold">
                  App Store
                </span>
                <img
                  src="/image/aboutPage/1_4.png"
                  alt="App Store"
                  className="h-7 w-auto"
                />
              </a>
            </div>
          </div>

          {/* DV Links */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[2.5vw] font-bold font-poppins">DV</h2>
            <a href="/about" className="text-lg hover:underline">
              About Us
            </a>
            <a
              target="_blank"
              href="https://careers.harsar.in"
              className="text-lg hover:underline"
            >
              Careers
            </a>
            <a
              target="_blank"
              href="privacyPolicy"
              className="text-lg hover:underline"
            >
              Privacy Policy
            </a>
            <a
              target="_blank"
              href="/terms&conditions"
              className="text-lg hover:underline"
            >
              Terms & Conditions
            </a>
          </div>

          {/* Business Links */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[2vw] font-bold mb-2">For Business</h2>
            <a href="#" className="text-lg hover:underline">
              Become A Partner
            </a>
            <a href="#" className="text-lg hover:underline">
              Partner FAQs
            </a>
          </div>

          {/* Help & Support */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[2vw] font-bold mb-2">Help & Support</h2>
            <a href="about#contact" className="text-lg hover:underline">
              Contact Us
            </a>
            <a href="/about#FAQs" className="text-lg hover:underline">
              FAQs
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 text-center text-sm text-gray-400">
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
