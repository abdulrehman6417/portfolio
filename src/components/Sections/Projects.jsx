import React from "react";
import { VscVscode } from "react-icons/vsc";
import { FaArrowRightLong } from "react-icons/fa6";
import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  const projects = [
    {
      title: "Talkify",
      desc: "A real time chatting application where you can add friends and yap all day.",
      tech: ["React", "TailwindCSS", "Firebase"],
      liveLink: "https://abdulrehman-talkify.netlify.app/",
      sourceCode: "https://github.com/abdulrehman6417/talkify",
    },
    {
      title: "Newsly",
      desc: "News app that provides news coverage all around the globe with categories, search and comment adding features.",
      tech: ["React", "TailwindCSS", "Firebase"],
      liveLink: "https://abdulrehman-newsly.netlify.app/",
      sourceCode: "https://github.com/abdulrehman6417/newsly",
    },
    {
      title: "Gemini Clone",
      desc: "A google gemini clone using Gemini API.",
      tech: ["React", "TailwindCSS", "Gemini API"],
      liveLink: "https://abdulrehman-gemini-clone.netlify.app/",
      sourceCode: "https://github.com/abdulrehman6417/gemini-clone",
    },
    {
      title: "Todo List App",
      desc: "Web App that can manage and maintain your daily to-do tasks.",
      tech: ["React", "TailwindCSS", "Context Hook"],
      liveLink: "https://abdulrehman-todo-list.netlify.app/",
      sourceCode: "https://github.com/abdulrehman6417/todo-list",
    },
    {
      title: "Ticket Management System",
      desc: "Assisted in building and maintaining front-end of a TMS System.",
      tech: ["React", "TailwindCSS"],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center my-8"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-4xl font-bold bg-gradient-to-r from-red-400 to-violet-500 
         bg-clip-text text-transparent mb-8 text-center"
          >
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/*  PROJECT INFO */}

            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:scale-102 hover:border-purple-500/30 
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <h3 className="text-2xl font-semibold tracking-wide mb-5 flex items-center justify-center gap-2">
                  <span>
                    <VscVscode size={28} color="#3744f5" />
                  </span>
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-5">{project.desc}</p>
                <div className="space-x-2">
                  {project.tech.map((item, index) => (
                    <span
                      key={index}
                      className="bg-purple-500/20 text-purple-300 py-1 px-3 rounded-full
                text-sm hover:bg-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* LINKS TO THE SOURCE CODE AND PROJECT DEMO */}

                {project.sourceCode ? (
                  <div className="flex gap-4 mt-8">
                    {/* LIVE DEMO BUTTON */}
                    <button className="group p-[3px] rounded-full font-medium bg-gradient-to-r from-red-500 via-pink-500 to-violet-700 transition-all duration-300 overflow-hidden cursor-pointer hover:scale-102">
                      <div className="bg-gray-800 rounded-full w-full h-full flex items-center justify-center px-3 py-1 transition-all duration-300 ">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          className="text-[12px] sm:text-sm flex items-center gap-2"
                        >
                          Live Preview
                          <span className="">
                            <FaArrowRightLong />
                          </span>
                        </a>
                      </div>
                    </button>

                    {/* SOURCE CODE BUTTON */}

                    <button className="p-[3px] rounded-full font-medium bg-gradient-to-r from-red-500 via-pink-500 to-violet-700 transition-all duration-300 overflow-hidden cursor-pointer hover:scale-102">
                      <div className="bg-gray-800 rounded-full w-full h-full flex items-center justify-center px-3 py-1 transition-all duration-300 ">
                        <a
                          href={project.sourceCode}
                          target="_blank"
                          className="text-[12px] sm:text-sm flex items-center gap-1"
                        >
                          Source Code
                        </a>
                      </div>
                    </button>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
