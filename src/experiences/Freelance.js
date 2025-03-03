import React from "react";

const Freelance = () => {
  return (
    <div className="flex sm:flex-row flex-col max-sm:gap-3">
      <div className="flex min-w-[18rem] max-sm:justify-center ">
        <div className="max-sm:bg-indigo-200 rounded-full pb-0.5 w-fit px-5">
          May 2024 - July 2024
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row max-sm:flex-col max-sm:text-center gap-2 tracking-normal text-lg">
          <div className="text-indigo-700 font-bold">
            Freelance Full-Stack Web Developer
          </div>
        </div>
        <div className="flex flex-row max-sm:justify-center flex-wrap gap-2 tracking-normal">
          <div className="bg-[#87f8dc] px-4 pb-0.5 rounded-full text-sm ">
            Full-Stack Web Development
          </div>
        </div>
        <div className="flex flex-row flex-wrap max-sm:justify-center gap-10">
          <img
            src="/projects/atam.png"
            className="w-[200px] rounded-md ring ring-[#b91c1c4d] transition-all duration-300 ease-in-out hover:scale-150 hover:shadow-2xl hover:ring-[#fff0] hover:z-10"
            alt=""
          />
          <img
            src="/projects/watree.png"
            className="w-[200px] rounded-md ring ring-[#3e53294d] transition-all duration-300 ease-in-out hover:scale-150 hover:shadow-2xl hover:ring-[#fff0] hover:z-10"
            alt=""
          />
        </div>
        <div className="text-justify">
          I have developed a comprehensive web application for my clients using
          the following tech stack:
          <div className="flex flex-row max-sm:justify-center flex-wrap gap-5 my-2 tracking-normal">
            <img
              src="/logo/nodejs-full.svg"
              className="h-7 object-contain"
              alt=""
            />
            <img
              src="/logo/next-full.png"
              className="h-7 object-contain"
              alt=""
            />
            <img src="/logo/gcloud.svg" className="h-7" alt="" />
            <img
              src="/logo/firebase-full.svg"
              className="w-16 object-contain"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freelance;
