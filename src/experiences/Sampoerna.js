import React from "react";

const Sampoerna = () => {
  return (
    <div className="flex sm:flex-row flex-col max-sm:gap-3">
      <div className="flex min-w-[18rem] max-sm:justify-center ">
        <div className="max-sm:bg-indigo-200 rounded-full pb-0.5 w-fit px-5">
          February 2025 - July 2025
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row max-sm:flex-col max-sm:text-center gap-2 tracking-normal text-lg">
          <div className="text-indigo-700 font-bold">
            Software Developer Intern
          </div>
          <div className="max-sm:hidden">-</div>
          <a
            href="https://www.sampoerna.com/"
            target="_blank"
            className="flex flex-row max-sm:self-center"
          >
            <div className="me-2">
              <span className="sm:hidden">at</span> HM Sampoerna | Philip Morris
              International
            </div>
            <img src="/logo/new-window.svg" className="w-3" alt="" />
          </a>
        </div>
        <div className="flex flex-row max-sm:justify-center flex-wrap gap-2 tracking-normal">
          <div className="bg-[#87f8dc] px-4 pb-0.5 rounded-full text-sm ">
            Frontend Mobile Development
          </div>
          <div className="bg-[#87f8dc] px-4 pb-0.5 rounded-full text-sm ">
            Agile Development
          </div>
        </div>
        <div className="flex flex-row flex-wrap max-sm:justify-center gap-10">
          <img
            src="/projects/ayo-ecosystem.webp"
            className="w-[200px] rounded-md ring ring-[#ed1d264d] transition-all duration-300 ease-in-out hover:scale-150 hover:ring-[#fff0]"
            alt=""
          />
        </div>
        <div className="text-justify">
          <div className="flex flex-row flex-wrap">
            Contributed to the development and enhancement of
            <a
              href="https://www.src.id/en/"
              target="_blank"
              className="font-semibold flex flex-row flex-wrap"
            >
              &nbsp;SRC AYO Ecosystem&nbsp;
              <img src="/logo/new-window.svg" className="w-3" alt="" />
            </a>
            &nbsp; Apps (React Native)
          </div>
          <div className="flex flex-row max-sm:justify-center items-center flex-wrap gap-5 mt-5 mb-2 tracking-normal">
            <img src="/logo/nodejs-full.svg" className="h-7" alt="" />
            <img src="/logo/react.svg" className="h-7" alt="" />
            <img src="/logo/android.svg" className="h-7" alt="" />
            <img src="/logo/ios.svg" className="h-7" alt="" />
            <img src="/logo/jira.svg" className="h-7" alt="" />
            <img src="/logo/aws.svg" className="h-9" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sampoerna;
