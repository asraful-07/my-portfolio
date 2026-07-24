import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const activeLinkStyle = "text-indigo-600 underline font-semibold";

  return (
    <nav className="backdrop-blur fixed top-0 left-0 w-full z-50 bg-[#0f172a]/80 border-b border-slate-700">
      <div className="container mx-auto flex justify-between items-center py-6 px-6">
        {/* Logo - Left Side */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-indigo-700 flex items-center">
            ASRAFUL
          </span>
        </div>

        {/* Menu Items - Centered */}
        <div className="hidden md:flex items-center justify-center text-xl font-semibold space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? activeLinkStyle
                : "text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? activeLinkStyle
                : "text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive
                ? activeLinkStyle
                : "text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? activeLinkStyle
                : "text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? activeLinkStyle
                : "text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Resume Button - Right Side */}
        <div className="hidden md:block">
          <a
            href="https://drive.google.com/file/d/1v1HTJTh389UfC86Eh-OVqmjwOsrvXb6S/view?usp=sharing"
            className="relative overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/50 px-5 py-2.5 rounded-lg font-medium text-base
              before:absolute before:inset-0 before:bg-black/20 before:translate-x-full before:transition-transform before:duration-300 
              hover:before:translate-x-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="relative z-10">Resume</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-indigo-400 text-2xl hover:text-indigo-300 transition-colors duration-300"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu - Centered */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-5 py-6 px-4 bg-[#0f172a]/95 border-t border-slate-700 text-xl font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? activeLinkStyle
                : "text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? activeLinkStyle
                : "text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            }
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive
                ? activeLinkStyle
                : "text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            }
            onClick={toggleMenu}
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? activeLinkStyle
                : "text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            }
            onClick={toggleMenu}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? activeLinkStyle
                : "text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            }
            onClick={toggleMenu}
          >
            Contact
          </NavLink>

          {/* Mobile Resume Button */}
          <a
            href="https://drive.google.com/file/d/1v1HTJTh389UfC86Eh-OVqmjwOsrvXb6S/view?usp=sharing"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2.5 rounded-lg font-medium shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
