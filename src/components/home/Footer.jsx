import React from "react";
import {
  FaInfoCircle,
  FaPen,
  FaLock,
  FaFileAlt,
  FaPhone,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="w-full py-6 flex gap-4 flex-col items-center text-sm text-gray-700">
      <div className="flex flex-wrap justify-center items-center gap-6 mb-2">
        <p
          onClick={() => navigate("/about")}
          className="flex items-center gap-1 hover:cursor-pointer hover:text-blue-600 transition"
        >
          <FaInfoCircle size={14} /> About
        </p>
        <a
          href="#blog"
          className="flex items-center gap-1 hover:text-blue-600 transition"
        >
          <FaPen size={14} /> Blog
        </a>
        <p
          onClick={() => navigate("/privacyPolicy")}
          className="flex items-center gap-1 hover:cursor-pointer hover:text-blue-600 transition"
        >
          <FaLock size={14} /> Privacy Policy
        </p>
        <p
          onClick={() => navigate("/terms&conditions")}
          className="flex items-center gap-1 hover:cursor-pointer hover:text-blue-600 transition"
        >
          <FaFileAlt size={14} /> Terms & Conditions
        </p>
        <Link
          to={"/about#contact"}
          className="flex items-center gap-1 hover:text-blue-600 transition"
        >
          <FaPhone className="rotate-90" size={14} /> Contact
        </Link>
      </div>
      <p className="text-center text-sm">
        &copy; 2025 HarSar Infonics. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
