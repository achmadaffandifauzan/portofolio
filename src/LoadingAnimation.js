import React from "react";
import { BeatLoader } from "react-spinners";

const LoadingAnimation = () => {
  return (
    <div
      className={
        "loading-container flex flex-col flex-wrap justify-center items-center content-center self-center"
      }
    >
      <BeatLoader color="#96f8dc" size={15} margin={2} />
    </div>
  );
};

export default LoadingAnimation;
