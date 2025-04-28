import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-[#C5CBDB] pb-4">
      <footer className="bg-black rounded-3xl w-[95%] mx-auto text-white pt-8 px-6 md:py-12 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-start gap-8 md:gap-12">
          {/* Logo + Store Links */}
          <section className="flex flex-col gap-4 max-w-xs">
            <Link to="/" aria-label="Home">
              <img
                src="/image/aboutPage/DVWhiteLogo.png"
                alt="Defines Vision Logo"
                className="h-12 w-auto"
              />
            </Link>
            <h1 className="text-2xl sm:text-3xl font-semibold leading-tight">
              Defines Vision
            </h1>

            <div className="flex flex-col sm:flex-row mt-2 gap-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://play.google.com/store/apps/details?id=com.harsar.devi"
                className="flex items-center justify-center gap-2 bg-white w-full sm:w-44 h-12 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                title="Download from Play Store"
              >
                <span className="text-black text-base font-semibold">
                  Play Store
                </span>
                <img
                  src="/image/aboutPage/1_3.png"
                  alt="Play Store"
                  className="h-6 w-auto"
                />
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://apps.apple.com/app/devi-hyper-social-media/id6642651947"
                className="flex items-center justify-center gap-2 bg-white w-full sm:w-44 h-12 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                title="Download from App Store"
              >
                <span className="text-black text-base font-semibold">
                  App Store
                </span>
                <img
                  src="/image/aboutPage/1_4.png"
                  alt="App Store"
                  className="h-6 w-auto"
                />
              </a>
            </div>
          </section>

          {/* DV Links */}
          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold font-poppins mb-1">DV</h2>
            <Link
              to="/about"
              className="text-base hover:underline"
              title="About Us"
              onClick={() => window.scrollTo(0, 0)}
            >
              About Us
            </Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://careers.harsar.in"
              className="text-base hover:underline"
              title="Careers"
            >
              Careers
            </a>
            <Link
              to="/privacyPolicy"
              className="text-base hover:underline"
              title="Privacy Policy"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms&conditions"
              className="text-base hover:underline"
              title="Terms & Conditions"
            >
              Terms & Conditions
            </Link>
          </section>

          {/* Business Links */}
          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold mb-1">For Business</h2>
            <a
              href="#"
              className="text-base hover:underline"
              title="Become A Partner"
            >
              Become A Partner
            </a>
            <a
              href="#"
              className="text-base hover:underline"
              title="Partner FAQs"
            >
              Partner FAQs
            </a>
          </section>

          {/* Help & Support */}
          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold mb-1">Help & Support</h2>
            <Link
              to="/about#contact"
              className="text-base hover:underline"
              title="Contact Us"
            >
              Contact Us
            </Link>
            <Link
              to="/about#FAQs"
              className="text-base hover:underline"
              title="FAQs"
            >
              FAQs
            </Link>
          </section>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 sm:mt-12 pb-4 text-center text-xs text-gray-400">
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
