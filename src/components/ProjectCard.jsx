import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const { name, client, server, live, description } = project;

  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-md border-4 p-4">
      <h1 className="text-xl font-bold mb-2">{name}</h1>
      <p className="text-sm text-gray-300 mb-4">{description}</p>
      <div className="flex items-center gap-2 lg:gap-4">
        {client && (
          <a
            href={client}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center lg:text-lg btn btn-outline text-indigo-600 hover:bg-indigo-600 hover:text-white"
          >
            <FaGithub className="mr-1" /> Client Code
          </a>
        )}
        {server && (
          <button
            href={server}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center lg:text-lg btn btn-outline text-indigo-600 hover:bg-indigo-600 hover:text-white"
          >
            <FaGithub className="mr-1" /> Server Code
          </button>
        )}
        {live && (
          <button
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center btn btn-outline text-indigo-600 hover:bg-indigo-600 hover:text-white"
          >
            Live Preview
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
