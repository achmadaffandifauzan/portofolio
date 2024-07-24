import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Experiences from "./experiences/Index";
import Projects from "./projects/Index";
import Contact from "./Contact";

function App() {
  return (
    <div id="container">
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
