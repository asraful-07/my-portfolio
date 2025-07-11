import React, { useEffect } from "react";
import CountUp from "react-countup";
import { Helmet } from "react-helmet-async";
import { FaCode, FaProjectDiagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import man from "../../assets/images/man.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto px-6 py-16" data-aos="fade-up">
      <Helmet>
        <title>My-Portfolio || About</title>
      </Helmet>

      <h1
        className="text-3xl font-extrabold mb-10 text-white uppercase tracking-wide"
        data-aos="fade-down"
      >
        About Me
      </h1>

      <div
        className="flex flex-col-reverse lg:flex-row items-center gap-12"
        data-aos="zoom-in-up"
      >
        {/* Left - Image Section */}
        <div className="md:w-1/3" data-aos="fade-right">
          <img
            src={man}
            alt="Asraful Islam"
            className="w-full lg:h-[520px] h-auto rounded-xl shadow-2xl border-4 border-gray-700"
          />
        </div>

        {/* Right - Text Section */}
        <div
          className="w-full lg:w-1/2 text-white space-y-6"
          data-aos="fade-left"
        >
          <p className="text-lg leading-relaxed">
            Hello! I'm{" "}
            <span className="font-bold text-indigo-400">Asraful Islam</span>, a
            passionate front-end developer and Go backend learner. I craft
            user-centric web applications with performance, accessibility, and
            creativity in mind.
          </p>

          <p>
            I work with{" "}
            <span className="text-indigo-400 font-medium">
              JavaScript, ReactJS, NextJS, NodeJS, MongoDB, and Go (Golang)
            </span>
            . Always excited to learn and build meaningful digital solutions!
          </p>

          {/* Stats Section */}
          <div
            className="flex flex-col md:flex-row justify-between gap-6 mt-8"
            data-aos="fade-up"
          >
            <StatCard
              title="Problems Solved"
              start={1}
              end={100}
              icon={<FaCode />}
            />
            <StatCard
              title="Projects Completed"
              start={1}
              end={20}
              icon={<FaProjectDiagram />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Stat Card Component
const StatCard = ({ title, start, end, icon }) => (
  <div
    className="text-center bg-gray-900 rounded-xl px-8 py-6 md:px-10 md:py-8 text-xl font-semibold shadow-lg border-b-4 border-indigo-500"
    data-aos="zoom-in"
  >
    <div className="flex justify-center text-4xl text-purple-400 mb-2">
      {icon}
    </div>
    <p className="font-bold text-4xl text-indigo-400 pb-2">
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
