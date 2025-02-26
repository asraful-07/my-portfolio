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
    <nav className="backdrop-blur fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-indigo-700 flex items-center">
            <span className="text-indigo-500 text-3xl font-bold mr-2">✿</span>
            ASRAFUL
          </span>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex items-center text-xl font-semibold space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeLinkStyle : "text-gray-600 hover:text-indigo-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeLinkStyle : "text-gray-600 hover:text-indigo-600"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? activeLinkStyle : "text-gray-600 hover:text-indigo-600"
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? activeLinkStyle : "text-gray-600 hover:text-indigo-600"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? activeLinkStyle : "text-gray-600 hover:text-indigo-600"
            }
          >
            Contact
          </NavLink>

          <Link
            href=""
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-indigo-600 text-2xl"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 text-xl font-semibold bg-white shadow-md">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeLinkStyle : "text-gray-600 hover:text-indigo-600"
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? activeLinkStyle : "text-gray-600 hover:text-indigo-600"
            }
            onClick={toggleMenu}
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? activeLinkStyle : "text-gray-600 hover:text-indigo-600"
            }
            onClick={toggleMenu}
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeLinkStyle : "text-gray-600 hover:text-indigo-600"
            }
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? activeLinkStyle : "text-gray-600 hover:text-indigo-600"
            }
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
          <a
            href="/resume.pdf"
            className="bg-indigo-500 text-white px-4 py-2 rounded btn-outline hover:bg-indigo-400"
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
