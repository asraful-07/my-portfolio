import React, { useEffect } from "react";
import CountUp from "react-countup";
import { Helmet } from "react-helmet-async";
import { FaCode, FaProjectDiagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import lottieAnimation from "../../assets/lottie.json";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="container mx-auto px-6 py-16">
      <Helmet>
        <title>My Portfolio | About</title>
      </Helmet>

      {/* Heading */}
      <h1
        className="text-4xl md:text-5xl font-extrabold text-left mb-8 text-white"
        data-aos="fade-down"
      >
        About <span className="text-indigo-400">Me</span>
      </h1>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side */}
        <div
          className="w-full lg:w-1/2 flex justify-center items-center"
          data-aos="fade-right"
        >
          <Lottie
            animationData={lottieAnimation}
            loop
            className="w-full max-w-lg"
          />
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 text-white" data-aos="fade-left">
          <p className="text-lg leading-8 text-gray-300">
            Hello! I'm{" "}
            <span className="font-bold text-indigo-400">Asraful Islam</span>, a
            passionate{" "}
            <span className="font-semibold text-purple-400">
              Full Stack Developer
            </span>{" "}
            from Bangladesh. I enjoy building modern, responsive, and
            user-friendly web applications that deliver great user experiences.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            I specialize in building modern web applications using{" "}
            <span className="font-semibold text-indigo-400">
              JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js,
              MongoDB, PostgreSQL, Prisma, and Go.
            </span>{" "}
            I enjoy writing clean, scalable code and continuously learning new
            technologies to improve my development skills.
          </p>

          {/* Stats */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10"
            data-aos="fade-up"
          >
            <StatCard
              title="Problems Solved"
              start={1}
              end={400}
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
    </section>
  );
};

const StatCard = ({ title, start, end, icon }) => {
  return (
    <div className="bg-[#111827] rounded-2xl p-8 border border-indigo-500/30 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 text-center">
      <div className="flex justify-center text-5xl text-indigo-400 mb-4">
        {icon}
      </div>

      <h2 className="text-4xl font-bold text-white mb-2">
        <CountUp enableScrollSpy start={start} end={end} duration={2.5} />+
      </h2>

      <p className="uppercase tracking-wider text-gray-400 font-semibold">
        {title}
      </p>
    </div>
  );
};

export default About;
