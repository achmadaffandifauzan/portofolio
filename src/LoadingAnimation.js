import React from "react";
import { BeatLoader } from "react-spinners";

const LoadingAnimation = () => {
  return (
    <div className="loading-container">
      <BeatLoader color="#96f8dc" size={15} margin={2} />
    </div>
  );
};

export default LoadingAnimation;
