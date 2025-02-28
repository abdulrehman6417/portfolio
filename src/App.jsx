import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import Home from "./components/Sections/Home";
import About from "./components/Sections/About";
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";
import { ToastContainer } from "react-toastify";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onCompleteLoad={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <ToastContainer />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
