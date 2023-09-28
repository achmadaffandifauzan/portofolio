import { React, useRef } from "react";
import Eztes from "./projects/Eztes";
import Seacinema from "./projects/Seacinema";
import Socialize from "./projects/Socialize";
import Vote from "./projects/Vote";
import Thriftnstash from "./projects/Thriftnstash";

const Portofolio = () => {
  const windowWidth = useRef(window.innerWidth);
  return (
    <div id="portofolio-page">
      <div className="flex flex-col justify-center content-center gap-20 tracking-tight px-5 sm:px-20">
        <div className="text-center">
          <div className="text-blue-500 font-extrabold text-xs mb-2 tracking-wider">
            PORTOFOLIO
          </div>
          <div className="text-lg tracking-wider font-semibold">
            <span className="font-extrabold">Full Stack Projects</span>
          </div>
        </div>
        <Socialize windowWidth={windowWidth} />
        <Vote windowWidth={windowWidth} />
        <Eztes windowWidth={windowWidth} />
        <Seacinema windowWidth={windowWidth} />
      </div>
      <div className="flex flex-col justify-center content-center gap-20 mt-16 tracking-tight px-5 sm:px-20">
        <div className="text-center">
          <div className="text-lg tracking-wider font-semibold mt-10">
            Full Stack <span className="font-extrabold">Collaborative </span>
            Projects
          </div>
        </div>
        <Thriftnstash windowWidth={windowWidth} />
      </div>
    </div>
  );
};
export default Portofolio;
