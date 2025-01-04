import React from "react";
import man from "../../assets/images/man.jpg";
import { Helmet } from "react-helmet-async";

const About = () => {
  // Dynamic values for problems solved and projects
  const problemsSolved = 150;
  const projectsCount = 20;

  return (
    <div className="p-4 container mx-auto py-16">
      <Helmet>
        <title>My-Portfolio || About</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6 text-white">About Me</h1>
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-6">
        <div className="w-full h-full mb-4">
          <img
            src={man}
            alt="Asraful Islam"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="">
          <p className="text-lg text-white">
            Hello! I'm Asraful Islam, a passionate and driven front-end
            developer specializing in crafting captivating and user-centric web
            experiences. With 1 year of work experience, I am dedicated to
            delivering high-quality code and optimizing website performance. I
            aim to contribute to a dynamic team and help drive innovative
            projects in a fast-paced environment. I pride myself on doing
            quality work and maintaining excellent communication. I work with
            JavaScript, ReactJS, NextJS, NodeJS, MongoDB, and the JavaScript
            ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
