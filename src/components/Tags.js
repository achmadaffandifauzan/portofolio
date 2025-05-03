import React from "react";

const GreenTag = ({ text }) => {
  return (
    <div className="bg-[#87f8dc] px-2.5 pb-0.5 rounded-lg text-xs font-semibold w-fit">
      {text}
    </div>
  );
};

export { GreenTag };
