import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { image, name, client, server, live, description, technologies } =
    project;

  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg border-2 p-6 hover:shadow-2xl transition-shadow duration-300">
      <div className="w-ful mb-2">
        <img src={image} alt="" />
      </div>
      <h1 className="text-2xl font-bold mb-3">{name}</h1>
      <p className="text-sm text-gray-300 mb-4">{description}</p>
      <div className="flex justify-between items-center gap-2 mb-4">
        {client && (
          <Link
            to={client}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-indigo-600 btn btn-outline hover:bg-indigo-600 hover:text-white"
          >
            <FaGithub /> Client
          </Link>
        )}
        {server && (
          <Link
            to={server}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-indigo-600 btn btn-outline hover:bg-indigo-600 hover:text-white"
          >
            <FaGithub /> Server
          </Link>
        )}
        {live && (
          <Link
            to={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-indigo-600 btn btn-outline hover:bg-indigo-600 hover:text-white"
          >
            <FaExternalLinkAlt /> Live Site
          </Link>
        )}
      </div>

      <div className="flex flex-wrap gap-2 text-xs md:text-sm text-gray-300">
        {technologies?.map((tech, idx) => (
          <span key={idx} className="bg-gray-700 px-2 py-1 rounded-md">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
