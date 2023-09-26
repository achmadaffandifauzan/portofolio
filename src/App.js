import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Portofolio from "./Portofolio";
function App() {
  return (
    <div id="container">
      <Navbar />
      <div className="container mx-auto pb-10">
        <Home />
        <About />
        <Portofolio />
      </div>
    </div>
  );
}

export default App;
