import { React, useRef } from "react";
import Socialize from "./Socialize";
import Vote from "./Vote";
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
        </div>
        <TypingTest windowWidth={windowWidth} />
        <ScholarSeeks windowWidth={windowWidth} />
        <Seareq windowWidth={windowWidth} />
        <Socialize windowWidth={windowWidth} />
        <Vote windowWidth={windowWidth} />
      </div>
    </div>
  );
};
export default Projects;
