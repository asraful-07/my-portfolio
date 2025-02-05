import React from "react";
import CountUp from "react-countup";
import { Helmet } from "react-helmet-async";
import man from "../../assets/images/man.jpg";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <Helmet>
        <title>My-Portfolio || About</title>
      </Helmet>

      <h1 className="text-3xl font-extrabold mb-10 text-white uppercase tracking-wide">
        About Me
      </h1>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left - Image Section */}
        <div className="md:w-1/3">
          <img
            src={man}
            alt="Asraful Islam"
            className="w-full h-[520px] rounded-xl shadow-2xl border-4 border-gray-700"
          />
        </div>

        {/* Right - Text Section */}
        <div className="w-full lg:w-1/2 text-white space-y-6">
          <p className="text-lg leading-relaxed">
            Hello! I'm{" "}
            <span className="font-bold text-indigo-500">Asraful Islam</span>, a
            passionate front-end developer specializing in creating captivating
            and user-centric web experiences. With 1 year of experience, I
            strive to write high-quality code and optimize website performance.
          </p>
          <p>
            I work with{" "}
            <span className="text-indigo-500">
              JavaScript, ReactJS, NextJS, NodeJS, and MongoDB
            </span>{" "}
            to develop innovative projects. My goal is to contribute to a
            dynamic team and drive impactful solutions in a fast-paced
            environment.
          </p>

          {/* Stats Section */}
          <div className="flex flex-col md:flex-row justify-between gap-6 mt-8">
            <StatCard title="Problems Solved" start={1} end={10} />
            <StatCard title="Projects" start={1} end={10} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Stat Card Component
const StatCard = ({ title, start, end }) => (
  <div className="text-center bg-gray-900 rounded-xl px-8 py-6 md:px-10 md:py-8 text-xl font-semibold shadow-lg border-b-4 border-indigo-500">
    <p className="font-bold text-4xl text-indigo-500 pb-2">
      <CountUp
        enableScrollSpy
        start={start}
        end={end}
        delay={0}
        duration={2.75}
      />
      +
    </p>
    <p className="uppercase text-gray-300">{title}</p>
  </div>
);

export default About;
