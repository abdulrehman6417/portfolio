import React from "react";
import { IoBookSharp, IoInformation } from "react-icons/io5";
import { RiComputerFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { IoCalendarNumber } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";
import { MdLabelImportant } from "react-icons/md";
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const skillIcons = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Firebase",
    "Appwrite",
    "Figma",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2
            className="text-4xl font-bold bg-gradient-to-r from-red-400 to-violet-400 
         bg-clip-text text-transparent mb-5 text-center"
          >
            About me
          </h2>
          <div className="rounded-xl border-white/10 border-2 p-8 hover:scale-102 transition-all">
            {/* INTRODUCTION PARA */}

            <p className="text-lg text-justify">
              ReactJS Frontend Developer with a strong focus on both frontend
              and API integrations. Skilled in building responsive,
              high-performance web apps with an eye for design and user
              experience. Proficient in React JS, FireBase and TailwindCSS.
              delivering scalable solutions. Passionate about creating
              innovative web apps that drive engagement and business success.
              Strong problem-solving skills and a commitment to writing clean,
              efficient code.
            </p>

            {/* SKILL SECTION */}

            <div className="grid grid-cols-1 pb-5">
              <h3 className="text-2xl font-medium text-center my-6">Skills</h3>

              <div className="flex flex-wrap gap-10 justify-around items-center">
                {skillIcons.map((item, index) => (
                  <div
                    key={index}
                    className="size-16 flex flex-col items-center gap-2"
                  >
                    <img
                      src={`../../src/assets/${item}.png`}
                      alt=""
                      className="bg-gradient-to-br from-violet-800 to-cyan-900 p-2 rounded-lg border 
                    border-white/60"
                    />
                    <span className="text-[16px] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* EDUCATION SECTION HERE */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="rounded-xl border-white/10 border-2 p-6 hover:scale-102 transition-all">
              <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                <span>
                  <img src="../../src/assets/book.png" alt="" className="w-6" />
                  {/* <IoBookSharp size={25} /> */}
                </span>
                Education
              </h3>
              <ul className="list-disc list-inside text-gray-200 space-y-2">
                <li className="">
                  <span className="font-semibold tracking-wider">
                    BS Computer Science
                  </span>
                  - NFC IET Multan (2020-2024)
                </li>
                <li className="">
                  <span className="font-semibold tracking-wider">GPA</span> -
                  3.82
                </li>
              </ul>
            </div>
            <div className="rounded-xl border-white/10 border-2 p-6 hover:scale-102 transition-all">
              <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                <span>
                  <img
                    src="../../src/assets/coding.png"
                    alt=""
                    className="w-6"
                  />
                  {/* <RiComputerFill size={25} /> */}
                </span>
                Work Experience
              </h3>

              <div className="space-y-2 text-gray-200">
                <div className="mt-5 space-y-4">
                  <h4 className="text-xl font-medium tracking-wider flex items-center gap-1">
                    <span>{/* <MdLabelImportant size={25} /> */}</span> Front
                    End Developer Intern
                  </h4>
                  <h3 className="flex items-center gap-2">
                    <span>
                      <FaLocationDot size={16} />
                    </span>
                    LineSquare Technologies Islamabad
                  </h3>
                  <h3 className="flex items-center gap-2">
                    <span>
                      <IoCalendarNumber size={16} />
                    </span>
                    Sept, 2024 - Dec, 2024
                  </h3>
                  <p className="flex items-start gap-2">
                    <span>
                      <FaCircleInfo size={16} className="mt-1" />
                    </span>
                    Assisted in building and maintaining front-end of a Ticket
                    Management System for Issue Tracking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
