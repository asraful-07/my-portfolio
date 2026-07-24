// ProjectModal.jsx
import React, { useEffect, useRef } from "react";
import { FaExternalLinkAlt, FaGithub, FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const ProjectModal = ({ project, isOpen, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const {
    name,
    image,
    client,
    server,
    live,
    description,
    technologies,
    features,
  } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        ref={modalRef}
        className="relative bg-[#0f172a] rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden border border-slate-700 shadow-2xl animate-scaleIn"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#1e293b] hover:bg-red-500/80 text-white transition-all duration-300 hover:scale-110"
        >
          <IoClose size={24} />
        </button>

        <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
          {/* Left Side - Image with Scrolling */}
          <div className="md:w-1/2 bg-[#0a0f1f] overflow-y-auto p-4 min-h-[200px] md:min-h-0 max-h-[70vh] md:max-h-[90vh]">
            <div className="flex items-center justify-center min-h-full">
              <img
                src={image}
                alt={name}
                className="w-full h-auto object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Right Side - Content with Scrolling */}
          <div className="md:w-1/2 flex flex-col bg-[#111827]">
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 max-h-[calc(90vh-100px)]">
              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {name}
              </h2>

              {/* Description */}
              <div>
                <h3 className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-2">
                  Description
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-2">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-2">
                  Features
                </h3>
                <ul className="space-y-2">
                  {features?.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-300 text-sm"
                    >
                      <span className="text-indigo-400 mt-1">
                        <FaPlus size={10} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Fixed Bottom Buttons */}
            <div className="border-t border-slate-700 p-4 bg-[#0f172a] flex flex-wrap gap-3 flex-shrink-0">
              {/* Client Button */}
              <a
                href={client}
                target="_blank"
                rel="noreferrer"
                className="flex-1 min-w-[120px]"
              >
                <button className="w-full flex justify-center items-center gap-2 py-2.5 px-4 rounded-xl bg-[#1e293b] hover:bg-indigo-600 text-white transition-all duration-300 text-sm font-medium">
                  <FaGithub />
                  Client
                </button>
              </a>

              {/* Server Button */}
              <a
                href={server}
                target="_blank"
                rel="noreferrer"
                className="flex-1 min-w-[120px]"
              >
                <button className="w-full flex justify-center items-center gap-2 py-2.5 px-4 rounded-xl bg-[#1e293b] hover:bg-indigo-600 text-white transition-all duration-300 text-sm font-medium">
                  <FaGithub />
                  Server
                </button>
              </a>

              {/* Live View Button */}
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="flex-1 min-w-[120px]"
              >
                <button className="w-full flex justify-center items-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white transition-all duration-300 text-sm font-medium">
                  <FaExternalLinkAlt />
                  Live View
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;