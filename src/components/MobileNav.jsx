import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

const MobileNav = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed w-full z-40 top-0 left-0 bg-[rgba(10,10,20,0.3)] backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }
        `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 cursor-pointer"
      >
        <IoIosCloseCircle size={25} color="#fff" />
      </button>

      <div className="flex flex-col items-center gap-8">
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-medium text-gray-300 hover:text-white transition-colors "
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-medium text-gray-300 hover:text-white transition-colors "
        >
          About
        </a>

        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-medium text-gray-300 hover:text-white transition-colors "
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-medium text-gray-300 hover:text-white transition-colors "
        >
          Contact
        </a>
        <a
          href="https://drive.google.com/file/d/1bvWurGcqcjwHwApZW6Ejeao3xIPHgp4v/view?usp=sharing"
          download="AbdulRehman Resume"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-medium text-gray-300 hover:text-white transition-colors "
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default MobileNav;
