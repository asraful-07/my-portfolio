import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaReact,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-24">
      <div className="container mx-auto flex flex-col items-center justify-between px-6 sm:flex-row">
        <div className="mb-4 sm:mb-0">
          <p className="text-lg font-semibold">Asraful's Portfolio</p>
          <p className="text-sm">
            Building modern web systems for a better tomorrow.
          </p>
        </div>
        <div className="flex space-x-4 text-lg">
          <a
            href="https://github.com/asraful-07"
            className="text-gray-400 hover:text-indigo-700"
          >
            <FaGithub className="inline-block text-2xl mr-2" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/asraful-islam-573972318/"
            className="text-gray-400 hover:text-indigo-700"
          >
            <FaLinkedin className="inline-block text-2xl mr-2" /> LinkedIn
          </a>
          <a
            href="https://twitter.com/Asraful-Islam9211"
            className="text-gray-400 hover:text-indigo-700"
          >
            <FaTwitter className="inline-block text-2xl mr-2" /> Twitter
          </a>
          <a
            href="https://asraful0508@gmail.com"
            className="text-gray-400 hover:text-indigo-700"
          >
            <FaEnvelope className="inline-block text-2xl mr-2" /> Email
          </a>
        </div>
      </div>
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
        <p>&copy; 2025 Asraful. All rights reserved.</p>
        <div className="mt-2 flex items-center justify-center space-x-2 text-gray-400">
          <span>Built with</span>
          <FaReact className="text-blue-500" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
