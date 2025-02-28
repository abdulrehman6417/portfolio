import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import RevealOnScroll from "../RevealOnScroll";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="px-8 flex flex-col-reverse gap-5 items-center justify-between md:flex md:flex-row md:gap-20">
          {/* INTRODUCTION */}

          <div className="text-center z-10">
            <h1
              className=" text-3xl md:text-6xl font-semibold mb-3 bg-gradient-to-r from-red-400 to-violet-600 
         bg-clip-text text-transparent leading-right"
            >
              Hi, I'm Rana Abdulrehman
            </h1>

            <p className="text-slate-200 text-lg md:text-xl font-medium max-w-xl mx-auto">
              ReactJS Front End Developer | Web Developer
            </p>

            <div className="mt-5 flex justify-center flex-wrap gap-4 items-center">
              {/* VIEW PROJECTS BUTTON */}

              <button
                className="w-[150px] h-10 bg-violet-600 text-white  rounded-full font-medium transition
              overflow-hidden relative hover:bg-violet-700 border-2 border-transparent hover:shadow-#0f82f666 hover:border-2 hover:scale-105 hover:border-violet-200 cursor-pointer"
              >
                <a href="#projects">View Projects</a>
              </button>

              {/* CONTACT ME BUTTON */}

              <button
                className="w-[150px] h-10 bg-violet-600 text-white  rounded-full font-medium transition
              overflow-hidden relative hover:bg-violet-700 border-2 border-transparent hover:shadow-#0f82f666 hover:border-2 hover:scale-105 hover:border-violet-200 cursor-pointer"
              >
                <a href="#contact">Contact me</a>
              </button>

              {/* GITHUB BUTTON */}

              <button className="group relative w-10 h-10 hover:w-[150px] p-[3px] rounded-full font-medium bg-gradient-to-r from-red-500 via-pink-500 to-violet-700 transition-all duration-300 overflow-hidden cursor-pointer">
                <div className="bg-gray-800 rounded-full w-full h-full flex items-center justify-center px-3 transition-all duration-300 relative">
                  <FaGithub
                    size={28}
                    className="absolute transition-all duration-300 group-hover:opacity-0 group-hover:scale-0"
                  />

                  <span className="text-[15px] text-white opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <a
                      href="https://github.com/abdulrehman6417"
                      target="_blank"
                    >
                      Visit Github
                    </a>
                  </span>
                </div>
              </button>

              {/* LinkedIn BUTTON */}

              <button className="group relative w-10 h-10 hover:w-[150px] p-[3px] rounded-full font-medium bg-gradient-to-r from-red-500 via-pink-500 to-violet-700 transition-all duration-300 overflow-hidden cursor-pointer">
                <div className="bg-gray-800 rounded-full w-full h-full flex items-center justify-center px-3 transition-all duration-300 relative">
                  <FaLinkedin
                    size={28}
                    className="absolute transition-all duration-300 group-hover:opacity-0 group-hover:scale-0"
                  />

                  <span className="text-[15px] text-white opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <a
                      href="https://www.linkedin.com/in/abdulrehman-rana-05012b27b/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </span>
                </div>
              </button>

              {/* LINKEDIN BUTTON */}

              {/* <button className="group relative w-10 h-10 hover:w-[150px] p-[3px] rounded-full font-medium bg-gradient-to-r from-red-500 via-pink-500 to-violet-700 transition-all duration-300 overflow-hidden">
            <div className="bg-gray-800 rounded-full w-full h-full flex items-center justify-center px-3 transition-all duration-300 relative">
              <img
                src="../../src/assets/linkedin.png"
                className="absolute transition-all duration-300 group-hover:opacity-0 group-hover:scale-0"
              />

              <span className="text-[15px] text-white opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                <a href="https://github.com/abdulrehman6417" target="_blank">
                  Visit LinkedIn
                </a>
              </span>
            </div>
          </button> */}
            </div>
          </div>

          {/* PROFILE IMAGE */}

          <div className="flex justify-center items-center">
            <motion.div
              className="relative w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full p-[5px] bg-gradient-to-r from-red-500 via-purple-500 to-violet-700"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Inner Circle with Image */}
              <div className="w-full h-full rounded-full bg-gray-950 flex justify-center items-center  shadow-[0px_0px_20px_5px_rgba(255,0,150,0.5)]">
                <img
                  src="/my_photo2.jpg" // Replace with your actual image path
                  alt="Profile"
                  className="w-[95%] h-[95%] object-cover rounded-full "
                />
              </div>
            </motion.div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
