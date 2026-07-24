import React, { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import { Helmet } from "react-helmet-async";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  useEffect(() => {
    fetch("project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );

  // Change page
  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Generate page numbers
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="container mx-auto px-6 my-20">
      <Helmet>
        <title>My-Portfolio || Projects</title>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6 text-white">
        My <span className="text-indigo-400">Projects</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>

      {/* Pagination */}
      {projects.length > 3 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 p-4 bg-[#111827] rounded-xl border border-slate-700">
          {/* Left Side - Showing info */}
          <div className="text-gray-400 text-sm">
            Showing {indexOfFirstProject + 1} -{" "}
            {Math.min(indexOfLastProject, projects.length)} of {projects.length}{" "}
            projects
          </div>

          {/* Right Side - Pagination Controls */}
          <div className="flex items-center gap-2">
            {/* Previous Button */}
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg transition-all duration-300 ${
                currentPage === 1
                  ? "bg-[#1e293b] text-gray-500 cursor-not-allowed"
                  : "bg-[#1e293b] hover:bg-indigo-600 text-white hover:shadow-lg"
              }`}
            >
              <FaChevronLeft size={14} />
            </button>

            {/* Page Numbers */}
            <div className="flex gap-1">
              {getPageNumbers().map((number) => (
                <button
                  key={number}
                  onClick={() => goToPage(number)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-all duration-300 ${
                    currentPage === number
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
                      : "bg-[#1e293b] hover:bg-[#2a3a5c] text-gray-300 hover:text-white"
                  }`}
                >
                  {number}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-[#1e293b] text-gray-500 cursor-not-allowed"
                  : "bg-[#1e293b] hover:bg-indigo-600 text-white hover:shadow-lg"
              }`}
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
