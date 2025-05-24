import React from "react";

const Thrive = () => {
  return (
    <div className="flex sm:flex-row flex-col max-sm:gap-3">
      <div className="flex min-w-[18rem] max-sm:justify-center ">
        <div className="max-sm:bg-indigo-200 rounded-full pb-0.5 w-fit px-5">
          December 2024 - January 2025
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row max-sm:flex-col max-sm:text-center gap-2 tracking-normal text-lg">
          <div className="text-indigo-700 font-bold">
            Software Developer Intern
          </div>
          <div className="max-sm:hidden">-</div>
          <a
            href="https://www.thrive.co.id/company-profile"
            target="_blank"
            className="flex flex-row max-sm:self-center"
          >
            <div className="me-2">
              <span className="sm:hidden">at</span> Thrive | IT Consultant
            </div>
            <img src="/logo/new-window.svg" className="w-3" alt="" />
          </a>
        </div>
        <div className="flex flex-row max-sm:justify-center flex-wrap gap-2 tracking-normal">
          <div className="bg-[#87f8dc] px-4 pb-0.5 rounded-full text-sm ">
            Frontend Web Development
          </div>
          <div className="bg-[#87f8dc] px-4 pb-0.5 rounded-full text-sm ">
            Backend Development
          </div>
        </div>
        <div className="text-justify">
          <div>
            <div className="mb-2">
              Contributed to the development and enhancements of an ERP
              Accounting System:
            </div>
            <ul className="flex flex-col gap-2 list-disc ms-4">
              <li className="leading-6">
                <span className="font-semibold">Frontend - </span>
                Built interactive data visualizations using Recharts for React
                JS.
              </li>
              <li className="leading-6">
                <span className="font-semibold">Backend - </span> Build APIs to
                integrate system with third-party financial services and
                AI-driven Large Language Models (LLMs).
              </li>
            </ul>
          </div>
          <div className="flex flex-row max-sm:justify-center flex-wrap gap-5 mt-5 mb-2 tracking-normal">
            <img
              src="/logo/nodejs-full.svg"
              className="h-7 object-contain"
              alt=""
            />
            <img src="/logo/react.svg" className="h-7 object-contain" alt="" />
            <img
              src="/logo/tailwindcss.svg"
              className="h-7 object-contain"
              alt=""
            />
            <img
              src="/logo/laravel.svg"
              className="w-7 object-contain"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thrive;
