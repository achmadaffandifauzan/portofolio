import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Experiences from "./experiences/Index";
import Projects from "./projects/Index";
import Contact from "./Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div id="container" className="overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto max-sm:mt-14">
        <Home />
        <About />
        <Experiences />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
