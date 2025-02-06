import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

// Import skill icons
import htmlIcon from "../../assets/images/html5.png";
import cssIcon from "../../assets/images/css3.png";
import bootstrapIcon from "../../assets/images/bootstrap.png";
import tailwindIcon from "../../assets/images/tailwindIcon.png";
import jsIcon from "../../assets/images/jsIcon.png";
import reactIcon from "../../assets/images/reactIcon.png";
import reduxIcon from "../../assets/images/reduxIcon.png";
import nodeIcon from "../../assets/images/nodeIcon.png";
import expressIcon from "../../assets/images/expressIcon.png";
import nextIcon from "../../assets/images/nextIcon.png";
import mongoIcon from "../../assets/images/mongodb.png";
import muiIcon from "../../assets/images/materialui.png";
import gitIcon from "../../assets/images/gitIcon.pmg.png";
import figmaIcon from "../../assets/images/figma.png";
import firebaseIcon from "../../assets/images/firebaseIcon.png";
import jiraIcon from "../../assets/images/jiraIcon.png";
import netlifyIcon from "../../assets/images/netlifyIcon.png";
import vscodeIcon from "../../assets/images/vscodeIcon.png";
import vercelIcon from "../../assets/images/vercelIcon.png";
import chromeIcon from "../../assets/images/chromeIcon.png";
import photoshopIcon from "../../assets/images/photoshopIcon.png";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("web");

  const webTechnologies = [
    { name: "HTML", img: htmlIcon, proficiency: 95 },
    { name: "CSS", img: cssIcon, proficiency: 90 },
    { name: "Bootstrap", img: bootstrapIcon, proficiency: 90 },
    { name: "Tailwind", img: tailwindIcon, proficiency: 95 },
    { name: "JavaScript", img: jsIcon, proficiency: 85 },
    { name: "React JS", img: reactIcon, proficiency: 90 },
    { name: "Redux", img: reduxIcon, proficiency: 75 },
    { name: "Node JS", img: nodeIcon, proficiency: 60 },
    { name: "Express JS", img: expressIcon, proficiency: 65 },
    { name: "Next JS", img: nextIcon, proficiency: 70 },
    { name: "MongoDB", img: mongoIcon, proficiency: 80 },
    { name: "Material UI", img: muiIcon, proficiency: 80 },
  ];

  const toolsAndOthers = [
    { name: "Git & GitHub", img: gitIcon, proficiency: 85 },
    { name: "Figma", img: figmaIcon, proficiency: 80 },
    { name: "Firebase", img: firebaseIcon, proficiency: 75 },
    { name: "Jira", img: jiraIcon, proficiency: 70 },
    { name: "Netlify", img: netlifyIcon, proficiency: 80 },
    { name: "VS Code", img: vscodeIcon, proficiency: 90 },
    { name: "Vercel", img: vercelIcon, proficiency: 85 },
    { name: "Chrome Dev Tool", img: chromeIcon, proficiency: 80 },
    { name: "Photoshop", img: photoshopIcon, proficiency: 70 },
  ];

  return (
    <div className="text-white p-4 container mx-auto">
      <Helmet>
        <title>My-Portfolio || Skills</title>
      </Helmet>
      <h2 className="text-3xl font-bold mb-6 text-white">SKILLS</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setActiveTab("web")}
          className={`px-6 py-2 rounded-md font-bold transition-all ${
            activeTab === "web"
              ? "bg-indigo-500 text-white"
              : "bg-gray-800 text-gray-400"
          }`}
        >
          Web Technologies
        </button>
        <button
          onClick={() => setActiveTab("tools")}
          className={`px-6 py-2 rounded-md font-bold transition-all ${
            activeTab === "tools"
              ? "bg-indigo-500 text-white"
              : "bg-gray-800 text-gray-400"
          }`}
        >
          Tools & Others
        </button>
      </div>

      {/* Skills Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {(activeTab === "web" ? webTechnologies : toolsAndOthers).map(
          (skill, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg flex flex-col items-center shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-3"
              />
              <p className="text-lg font-semibold text-black">{skill.name}</p>
              <p className="text-lg border-2 border-black rounded-full shadow-lg px-4 mt-2 text-gray-700">
                {skill.proficiency}%
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Skills;
