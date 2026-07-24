import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaCreditCard,
  FaCode,
  FaTools,
} from "react-icons/fa";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const skills = [
    {
      title: "Frontend",
      icon: <FaLaptopCode />,
      iconColor: "text-cyan-400",
      border: "border-cyan-500/30",
      bg: "bg-cyan-500/10",
      text: "text-cyan-300",
      skills: [
        "React.js",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "Shadcn UI",
      ],
    },

    {
      title: "Backend",
      icon: <FaServer />,
      iconColor: "text-purple-400",
      border: "border-purple-500/30",
      bg: "bg-purple-500/10",
      text: "text-purple-300",
      skills: ["Node.js", "Express.js", "REST API", "JWT", "Go"],
    },

    {
      title: "Database",
      icon: <FaDatabase />,
      iconColor: "text-green-400",
      border: "border-green-500/30",
      bg: "bg-green-500/10",
      text: "text-green-300",
      skills: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma ORM"],
    },

    {
      title: "Payments",
      icon: <FaCreditCard />,
      iconColor: "text-yellow-400",
      border: "border-yellow-500/30",
      bg: "bg-yellow-500/10",
      text: "text-yellow-300",
      skills: ["Stripe", "SSLCommerz"],
    },

    {
      title: "Languages",
      icon: <FaCode />,
      iconColor: "text-blue-400",
      border: "border-blue-500/30",
      bg: "bg-blue-500/10",
      text: "text-blue-300",
      skills: ["JavaScript", "TypeScript", "SQL", "Go"],
    },

    {
      title: "Tools & Others",
      icon: <FaTools />,
      iconColor: "text-rose-400",
      border: "border-rose-500/30",
      bg: "bg-rose-500/10",
      text: "text-rose-300",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Cloudinary",
        "Vercel",
        "Render",
        "Netlify",
      ],
    },
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      <Helmet>
        <title>My Portfolio | Skills</title>
      </Helmet>

      <h1
        className="text-4xl md:text-5xl font-bold text-white mb-8"
        data-aos="fade-down"
      >
        My <span className="text-indigo-400">Skills</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {skills.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="bg-[#111827] border border-slate-800 rounded-2xl p-8 hover:border-indigo-500 hover:-translate-y-2 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-7">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${item.bg} ${item.iconColor}`}
              >
                {item.icon}
              </div>

              <h2 className="text-2xl font-bold text-white">{item.title}</h2>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {item.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className={`px-4 py-2 rounded-xl border ${item.border} ${item.bg} ${item.text} text-sm font-medium transition duration-300 hover:scale-105`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
