import React, { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import { Helmet } from "react-helmet-async";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // ⬅️ Icon import

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="container mx-auto p-4 my-24">
      <Helmet>
        <title>My-Portfolio || Projects</title>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6 text-white">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>

      {/* Toggle Button */}
      {projects.length > 3 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded inline-flex items-center gap-2 transition duration-300"
          >
            {showAll ? (
              <>
                Show Less <FaChevronUp />
              </>
            ) : (
              <>
                See More Projects <FaChevronDown />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Project;
