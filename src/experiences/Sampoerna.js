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
          <div className="leading-6 mb-2">
            Contributed to the development and enhancement of&nbsp;
            <a
              href="https://www.src.id/en/"
              target="_blank"
              className="font-semibold text-blue-600 inline-flex items-center"
            >
              SRC AYO Ecosystem
              <img src="/logo/new-window.svg" className="w-3 ml-1" alt="" />
            </a>
            &nbsp;—a large-scale digital commercial platform serving hundreds of
            thousands of active retailers and wholesalers across multiple
            countries.
          </div>
          <ul className="flex flex-col gap-2 list-disc ms-4">
            <li className="leading-6">
              Completed 23 Jira tickets to date, including features and fixes
              for both B2B and B2C mobile apps (React Native), as well as
              automation for regression testing.
            </li>
            <li className="leading-6">
              Estimated <span className="font-semibold">$11,900 USD</span> in
              delivery value, based on internal cost-efficiency metrics.
            </li>
            <li className="leading-6">
              Worked in an Agile/Scrum team alongside senior engineers and
              product stakeholders to deliver production-ready code in a
              complex, large-scale system.
            </li>
          </ul>
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
