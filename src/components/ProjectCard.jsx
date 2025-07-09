import React, { useEffect } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectCard = ({ project }) => {
  const { image, name, client, server, live, description, technologies } =
    project;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl shadow-2xl border border-indigo-500/30 p-6 hover:shadow-indigo-500/30 hover:border-indigo-400 transition-all duration-500 group"
    >
      <div className="w-full mb-4 overflow-hidden rounded-lg border border-indigo-500/20 group-hover:border-indigo-400/50 transition-all duration-500">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h1 className="text-2xl font-bold mb-3 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
        {name}
      </h1>
      <p className="text-sm text-gray-300 mb-5 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-3 mb-6">
        {technologies?.map((tech, idx) => (
          <span
            key={idx}
            className="bg-gray-700/80 px-3 py-1 rounded-full text-xs shadow-md hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 transition-all duration-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap justify-between items-center gap-3 mt-auto">
        {client && (
          <Link
            to={client}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 text-indigo-300 hover:text-white bg-gray-800 hover:bg-indigo-600 px-4 py-2 rounded-lg border border-indigo-500/30 hover:border-indigo-400 transition-all duration-300 text-sm"
          >
            <FaGithub className="text-purple-300" /> Client
          </Link>
        )}
        {server && (
          <Link
            to={server}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 text-indigo-300 hover:text-white bg-gray-800 hover:bg-indigo-600 px-4 py-2 rounded-lg border border-indigo-500/30 hover:border-indigo-400 transition-all duration-300 text-sm"
          >
            <FaGithub className="text-purple-300" /> Server
          </Link>
        )}
        {live && (
          <Link
            to={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 text-indigo-300 hover:text-white bg-gray-800 hover:bg-purple-600 px-4 py-2 rounded-lg border border-purple-500/30 hover:border-purple-400 transition-all duration-300 text-sm"
          >
            <FaExternalLinkAlt /> Live
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
