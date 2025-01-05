import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { name, client, server, live, description } = project;

  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-md border-2 p-6">
      <h1 className="text-xl font-bold mb-2">{name}</h1>
      <p className="text-sm text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap items-center gap-4">
        {client && (
          <Link
            to={client}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-indigo-600 btn btn-outline hover:bg-indigo-600 hover:text-white mb-2 md:mb-0"
          >
            <FaGithub className="mr-2" /> Client Code
          </Link>
        )}
        {server && (
          <Link
            to={server}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-indigo-600 btn btn-outline hover:bg-indigo-600 hover:text-white mb-2 md:mb-0"
          >
            <FaGithub className="mr-2" /> Server Code
          </Link>
        )}
        {live && (
          <Link
            to={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-indigo-600 btn btn-outline hover:bg-indigo-600 hover:text-white mb-2 md:mb-0"
          >
            Live Preview
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
