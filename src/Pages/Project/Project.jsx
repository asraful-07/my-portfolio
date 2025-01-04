import React, { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import { Helmet } from "react-helmet-async";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="container mx-auto p-4 my-24">
      <Helmet>
        <title>My-Portfolio || Projects</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6 text-white">Projects</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
