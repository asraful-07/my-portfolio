import React from "react";
import lottie from "../assets/lottie.json";
import Lottie from "lottie-react";

const Banner = () => {
  return (
    <div className="text-white py-16 px-8 md:px-16 lg:px-24">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h4 className="text-indigo-500 text-2xl font-semibold mb-2">
            Hello! This is a
          </h4>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Asraful Islam
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            I'm a Front-End Developer
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Highly passionate web developer with a strong foundation in
            front-end development and a passion for creating dynamic,
            user-friendly web applications.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold shadow-md transition duration-300">
              Hire Me
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-semibold shadow-md transition duration-300">
              About Me
            </button>
          </div>
        </div>

        {/* Lottie Animation Section */}
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <Lottie animationData={lottie} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
