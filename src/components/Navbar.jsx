import React, { useEffect } from "react";
import { CgMenuMotion } from "react-icons/cg";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed w-full z-40 top-0 bg-[rgba(10,10,20,0.3)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-bold text-white">
            My Portfolio
          </a>

          {/* HAMBURGER MENU ICON TO SHOW WHEN IN MOBILE VIEW */}

          <div
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative cursor-pointer z-40 md:hidden"
          >
            <CgMenuMotion className="size-8" />
          </div>

          {/* MENU OPTIONS TO SHOW WHEN IN DESKTOP VIEW */}

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-[17px] font-medium text-gray-300 hover:text-white transition-colors "
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[17px] font-medium text-gray-300 hover:text-white transition-colors "
            >
              About
            </a>

            <a
              href="#projects"
              className="text-[17px] font-medium text-gray-300 hover:text-white transition-colors "
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-[17px] font-medium text-gray-300 hover:text-white transition-colors "
            >
              Contact
            </a>
            <a
              href="https://drive.google.com/file/d/1bvWurGcqcjwHwApZW6Ejeao3xIPHgp4v/view?usp=sharing"
              download="AbdulRehman Resume"
              className="text-[17px] font-medium text-gray-300 hover:text-white transition-colors "
            >
              Resume
            </a>
          </div>
        </div>
      </div>
      {/* <ul>
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
