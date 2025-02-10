import React from "react";
import Lottie from "lottie-react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import lottie from "../assets/lottie.json";

const Banner = () => {
  const title = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(title.current, {
      strings: ["Front-End Developer", "MERN Stack Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="relative text-white bg-gray-900 min-h-screen flex items-center justify-center">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-gray-800 opacity-80"></div>

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between relative z-10">
        {/* Text Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-indigo-400 text-2xl font-semibold mb-2">
            Hello! This is a
          </h4>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Asraful Islam
          </h1>
          <p className="text-2xl md:text-4xl font-bold">
            <span className="text-gray-300">I&apos;m a</span>{" "}
            <span ref={title} className="text-indigo-400" />
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Highly passionate web developer with a strong foundation in
            front-end development and a passion for creating dynamic,
            user-friendly web applications.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300"
            >
              Hire Me
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300"
            >
              About Me
            </motion.button>
          </div>
        </motion.div>

        {/* Lottie Animation Section */}
        <motion.div
          className="mt-8 lg:mt-0 lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Lottie animationData={lottie} loop={true} />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
