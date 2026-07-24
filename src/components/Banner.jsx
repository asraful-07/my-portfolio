import React from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import man from "../assets/images/man.jpg";

import { FaGithub, FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";

import { FiDownload } from "react-icons/fi";

const socialVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
    },
  }),
  hover: {
    y: -8,
    scale: 1.15,
    transition: {
      duration: 0.3,
    },
  },
};

const Banner = () => {
  const title = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(title.current, {
      strings: [
        "Front-End Developer",
        "Back-End Developer",
        "MERN Stack Developer",
        "Full-Stack Developer",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      backDelay: 1200,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0F172A] flex items-center text-white pt-28 pb-12 mb-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#0F172A] to-[#111827]" />

      <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-pink-500/20 blur-3xl" />

      <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-14">
          {/* LEFT */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            <h4 className="text-indigo-400 text-2xl font-semibold">
              👋 Hello, It's Me
            </h4>

            <h1 className="mt-3 text-5xl md:text-7xl font-black leading-tight">
              Asraful <span className="text-indigo-500">Islam</span>
            </h1>

            <h2 className="mt-6 text-2xl md:text-4xl font-bold">
              I'm a{" "}
              <span
                ref={title}
                className="text-indigo-400 border-r-2 border-indigo-400"
              />
            </h2>

            <p className="mt-8 text-lg text-gray-300 leading-8 max-w-xl">
              Highly passionate Full Stack Developer with experience in React,
              Next.js, Node.js, Express.js and MongoDB. I love building modern,
              responsive and user-friendly web applications with clean UI and
              scalable architecture.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-5">
              <motion.a
                href="https://drive.google.com/file/d/1v1HTJTh389UfC86Eh-OVqmjwOsrvXb6S/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-3 font-semibold shadow-lg shadow-indigo-500/30 hover:bg-indigo-500 transition"
              >
                <FiDownload size={20} />
                Download CV
              </motion.a>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="rounded-full border border-indigo-500 px-8 py-3 font-semibold hover:bg-indigo-600 transition"
              >
                About Me
              </motion.button>
            </div>

            {/* Social */}

            <motion.div
              className="mt-8 flex justify-center lg:justify-start gap-4"
              initial="hidden"
              animate="visible"
            >
              {[
                {
                  Icon: FaGithub,
                  link: "https://github.com/asraful-07",
                },

                {
                  Icon: FaLinkedin,
                  link: "https://www.linkedin.com/in/asraful-islam-573972318/",
                },

                {
                  Icon: FaFacebook,
                  link: "https://www.facebook.com/ai.rahat.10",
                },

                {
                  Icon: FaXTwitter,
                  link: "https://x.com/Asraful-Islam9211",
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  custom={i}
                  variants={socialVariants}
                  whileHover="hover"
                  className="group rounded-full border border-gray-700 bg-gray-800/80 p-4 text-gray-300 backdrop-blur hover:border-indigo-500 hover:bg-indigo-600 hover:text-white shadow-lg transition"
                >
                  <social.Icon className="text-xl group-hover:rotate-12 duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="lg:w-1/2 flex justify-center relative"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Static Image - No Up/Down Animation */}
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-indigo-500 blur-3xl opacity-30 scale-110"></div>

              {/* Gradient Border */}
              <div className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2">
                <img
                  src={man}
                  alt="Asraful Islam"
                  className="w-[300px] h-[300px] md:w-[430px] md:h-[430px] rounded-full object-cover border-[6px] border-[#0F172A] shadow-[0_0_60px_rgba(99,102,241,0.45)]"
                />
              </div>

              {/* Floating Small Balls - Animated */}
              <motion.div
                animate={{
                  y: [0, -18, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -top-5 right-8 h-8 w-8 rounded-full bg-indigo-500 shadow-2xl"
              />

              <motion.div
                animate={{
                  y: [0, 18, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                }}
                className="absolute -left-6 bottom-8 h-6 w-6 rounded-full bg-pink-500 shadow-xl"
              />

              <motion.div
                animate={{
                  x: [0, 12, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute top-1/2 -right-10 h-5 w-5 rounded-full bg-cyan-400"
              />

              <motion.div
                animate={{
                  x: [0, -12, 0],
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                }}
                className="absolute top-16 -left-8 h-5 w-5 rounded-full bg-yellow-400"
              />

              {/* Ring */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-20px] rounded-full border border-dashed border-indigo-400/30"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
