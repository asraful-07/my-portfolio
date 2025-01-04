import React, { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("web");

  const webTechnologies = [
    { name: "HTML", percentage: 95 },
    { name: "CSS", percentage: 90 },
    { name: "Bootstrap", percentage: 90 },
    { name: "Tailwind", percentage: 95 },
    { name: "JavaScript", percentage: 85 },
    { name: "React JS", percentage: 90 },
    { name: "Redux", percentage: 75 },
    { name: "Node JS", percentage: 60 },
    { name: "Express JS", percentage: 65 },
    { name: "Next JS", percentage: 85 },
    { name: "MongoDB", percentage: 80 },
    { name: "Material UI", percentage: 80 },
  ];

  const toolsAndOthers = [
    { name: "Git & GitHub", percentage: 80 },
    { name: "Figma", percentage: 75 },
    { name: "Firebase", percentage: 80 },
    { name: "Jira", percentage: 70 },
    { name: "Netlify", percentage: 85 },
    { name: "VS Code", percentage: 90 },
    { name: "Vercel", percentage: 75 },
    { name: "Chrome Dev Tool", percentage: 70 },
    { name: "Photoshop", percentage: 45 },
  ];

  const renderSkills = (skills) => {
    return skills.map((skill, index) => (
      <div
        key={index}
        className="flex justify-between items-center bg-gray-800 text-white px-4 py-3 rounded-md mb-3"
      >
        <span className="w-1/4">{skill.name}</span>
        <div className="flex items-center w-3/4">
          <div className="w-full bg-gray-700 rounded-full h-2.5 mr-3">
            <div
              className="bg-indigo-500 h-2.5 rounded-full"
              style={{ width: `${skill.percentage}%` }}
            ></div>
          </div>
          <span className="text-sm">{skill.percentage}%</span>
        </div>
      </div>
    ));
  };

  return (
    <div className="text-white p-8">
      <h2 className="text-3xl font-bold mb-6 text-white">SKILLS</h2>
      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setActiveTab("web")}
          className={`px-6 py-2 rounded-md font-bold ${
            activeTab === "web"
              ? "bg-indigo-500 text-white"
              : "bg-gray-800 text-gray-400"
          }`}
        >
          Web Technologies
        </button>
        <button
          onClick={() => setActiveTab("tools")}
          className={`px-6 py-2 rounded-md font-bold ${
            activeTab === "tools"
              ? "bg-indigo-500 text-white"
              : "bg-gray-800 text-gray-400"
          }`}
        >
          Tools & Others
        </button>
      </div>

      {/* Skills */}
      <div className="space-y-3">
        {activeTab === "web"
          ? renderSkills(webTechnologies)
          : renderSkills(toolsAndOthers)}
      </div>
    </div>
  );
};

export default Skills;
