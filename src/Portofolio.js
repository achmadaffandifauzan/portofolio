import { React, useRef } from "react";
import Eztes from "./projects/Eztes";
import Seacinema from "./projects/Seacinema";
import Socialize from "./projects/Socialize";
import Vote from "./projects/Vote";

const Portofolio = () => {
  const windowWidth = useRef(window.innerWidth);
  return (
    <div
      id="portofolio-page"
      className="flex flex-col justify-center content-center gap-36 tracking-tight px-5 sm:px-20"
    >
      <div className="text-center">
        <div className="text-blue-500 font-extrabold text-xs mb-2 tracking-wider">
          PORTOFOLIO
        </div>
        <div className="text-lg font-extrabold">Full Stack Projects</div>
      </div>
      <Socialize windowWidth={windowWidth} />
      <Vote windowWidth={windowWidth} />
      <Eztes windowWidth={windowWidth} />
      <Seacinema windowWidth={windowWidth} />
    </div>
  );
};
export default Portofolio;
