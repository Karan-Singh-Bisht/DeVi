import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-[#E3E5FC] pb-4">
      <footer className="bg-black rounded-3xl w-[99%] mx-auto text-white pt-16 px-6 md:px-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          {/* Logo + Store Links */}
          <section className="flex flex-col gap-6 max-w-xs">
            <Link to="/" aria-label="Home">
              <img
                src="/image/aboutPage/DVWhiteLogo.png"
                alt="Defines Vision Logo"
                className="h-14 w-18"
              />
            </Link>
            <h1 className="text-3xl font-semibold">Defines Vision</h1>

            <div className="flex mt-4 gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://play.google.com/store/apps/details?id=com.harsar.devi"
                className="flex items-center justify-center gap-2 bg-white w-48 h-14 rounded-xl shadow-md hover:shadow-lg transition duration-200"
                title="Download from Play Store"
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
                rel="noopener noreferrer"
                href="https://apps.apple.com/app/devi-hyper-social-media/id6642651947"
                className="flex items-center justify-center gap-2 bg-white w-48 h-14 rounded-xl shadow-md hover:shadow-lg transition duration-200"
                title="Download from App Store"
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
          </section>

          {/* DV Links */}
          <section className="flex flex-col gap-3">
            <h2 className="text-[2.5vw] font-bold font-poppins">DV</h2>
            <Link
              to="/about"
              className="text-lg hover:underline"
              title="About Us"
            >
              About Us
            </Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://careers.harsar.in"
              className="text-lg hover:underline"
              title="Careers"
            >
              Careers
            </a>
            <Link
              to="/privacyPolicy"
              className="text-lg hover:underline"
              title="Privacy Policy"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms&conditions"
              className="text-lg hover:underline"
              title="Terms & Conditions"
            >
              Terms & Conditions
            </Link>
          </section>

          {/* Business Links */}
          <section className="flex flex-col gap-3">
            <h2 className="text-[2vw] font-bold mb-2">For Business</h2>
            <a
              href="#"
              className="text-lg hover:underline"
              title="Become A Partner"
            >
              Become A Partner
            </a>
            <a
              href="#"
              className="text-lg hover:underline"
              title="Partner FAQs"
            >
              Partner FAQs
            </a>
          </section>

          {/* Help & Support */}
          <section className="flex flex-col gap-3">
            <h2 className="text-[2vw] font-bold mb-2">Help & Support</h2>
            <Link
              to="/about#contact"
              className="text-lg hover:underline"
              title="Contact Us"
            >
              Contact Us
            </Link>
            <Link
              to="/about#FAQs"
              className="text-lg hover:underline"
              title="FAQs"
            >
              FAQs
            </Link>
          </section>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pb-8 text-center text-sm text-gray-400">
          <p>
            By{" "}
            <span className="font-semibold font-detoks text-white">HarSar</span>
          </p>
          <p>© 2025 HarSar Infonics. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
