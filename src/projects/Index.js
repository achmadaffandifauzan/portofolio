import { React, useRef } from "react";
import Eztes from "./Eztes";
import Seacinema from "./Seacinema";
import Socialize from "./Socialize";
import Vote from "./Vote";
import Thriftnstash from "./Thriftnstash";
import TypingTest from "./TypingTest";
import Seareq from "./Seareq";
import ScholarSeeks from "./ScholarSeeks";

const Projects = () => {
  const windowWidth = useRef(window.innerWidth);
  return (
    <div id="projects-page">
      <div className="flex flex-col justify-center content-center gap-20 tracking-tight pt-20 px-5 sm:px-20">
        <div className="text-center">
          <div className="text-blue-500 font-extrabold text-xl mb-2 tracking-widest text-center">
            Projects
          </div>
          <div className="sm:text-lg tracking-wider font-semibold">
            <span className="font-bold">Full-Stack Open Source</span>
          </div>
        </div>
        <TypingTest windowWidth={windowWidth} />
        <Socialize windowWidth={windowWidth} />
        <Vote windowWidth={windowWidth} />
        {/* <Eztes windowWidth={windowWidth} />
        <Seacinema windowWidth={windowWidth} /> */}
      </div>
      <div className="flex flex-col justify-center content-center gap-20 mt-16 tracking-tight px-5 sm:px-20">
        <div className="text-center">
          <div className="sm:text-2xl tracking-wider font-semibold mt-10"></div>
          <div className="sm:text-lg tracking-wider font-semibold">
            <span className="font-extrabold">Collaborative </span>
            Projects
          </div>
        </div>
        <ScholarSeeks windowWidth={windowWidth} />
        <Seareq windowWidth={windowWidth} />
        {/* <Thriftnstash windowWidth={windowWidth} /> */}
      </div>
    </div>
  );
};
export default Projects;
