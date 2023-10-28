import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Portofolio from "./Portofolio";
import Contact from "./Contact";

function App() {
  return (
    <div id="container">
      <Navbar />
      <div className="container mx-auto max-sm:mt-14">
        <Home />
        <About />
        <Portofolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
