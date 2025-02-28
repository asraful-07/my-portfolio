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
      className="bg-gray-800 text-white rounded-lg shadow-lg border-2 border-indigo-500 p-6 hover:shadow-indigo-500/50 hover:shadow-2xl transition-all duration-300"
    >
      <div className="w-full mb-2 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h1 className="text-2xl font-bold mb-3 text-indigo-400">{name}</h1>
      <p className="text-sm text-gray-300 mb-4">{description}</p>
      <div className="flex justify-between items-center gap-2 mb-4">
        {client && (
          <Link
            to={client}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-indigo-500 btn btn-outline hover:bg-indigo-500 hover:text-white transition-all duration-300"
          >
            <FaGithub /> Client
          </Link>
        )}
        {server && (
          <Link
            to={server}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-indigo-500 btn btn-outline hover:bg-indigo-500 hover:text-white transition-all duration-300"
          >
            <FaGithub /> Server
          </Link>
        )}
        {live && (
          <Link
            to={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-indigo-500 btn btn-outline hover:bg-indigo-500 hover:text-white transition-all duration-300"
          >
            <FaExternalLinkAlt /> Live Site
          </Link>
        )}
      </div>

      <div className="flex flex-wrap gap-2 text-xs md:text-sm text-gray-300">
        {technologies?.map((tech, idx) => (
          <span
            key={idx}
            className="bg-gray-700 px-3 py-1 rounded-md shadow-md hover:bg-indigo-500 transition-all duration-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
