// ProjectCard.jsx
import React, { useState } from "react";
import { FaExternalLinkAlt, FaListUl } from "react-icons/fa";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!project) return null;

  const { id, name, image, live } = project;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="
          group
          bg-[#111827]
          rounded-3xl
          overflow-hidden
          border
          border-slate-700
          hover:border-indigo-500
          hover:shadow-[0_20px_45px_rgba(99,102,241,0.35)]
          transition-all
          duration-500
        "
      >
        {/* Image */}
        <div className="relative h-[220px] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="
              w-full
              transition-transform
              duration-[2900ms]
              ease-linear
              group-hover:-translate-y-[90%]
            "
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-6">{name}</h2>

          <div className="flex gap-4">
            {/* Live Button */}
            <a href={live} target="_blank" rel="noreferrer" className="flex-1">
              <button
                className="
                  w-full
                  flex
                  justify-center
                  items-center
                  gap-2
                  py-3
                  rounded-xl
                  bg-[#182235]
                  hover:bg-indigo-600
                  text-white
                  transition-all
                  duration-300
                "
              >
                <FaExternalLinkAlt />
                Live
              </button>
            </a>

            {/* Details Button */}
            <button onClick={openModal} className="flex-1">
              <div
                className="
                  w-full
                  flex
                  justify-center
                  items-center
                  gap-2
                  py-3
                  rounded-xl
                  bg-[#182235]
                  hover:bg-purple-600
                  text-white
                  transition-all
                  duration-300
                "
              >
                <FaListUl />
                Details
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default ProjectCard;
