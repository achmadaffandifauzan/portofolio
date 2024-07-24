import React, { useRef } from "react";
import Bangkit from "./Bangkit";
import Freelance from "./Freelance";
const Experiences = () => {
  const windowWidth = useRef(window.innerWidth);

  return (
    <div id="experiences-page">
      <div className="flex flex-col justify-center content-center gap-20 tracking-tight pt-20 px-5 sm:px-20">
        <div className="text-blue-500 font-extrabold text-xl mb-2 tracking-widest text-center">
          Experiences
        </div>
        <div className="flex flex-col gap-10 max-sm:gap-24">
          <Bangkit />
          <Freelance />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
