import React, { useState, useEffect } from "react";

const Bangkit = () => {
  return (
    <div className="flex sm:flex-row flex-col max-sm:gap-3">
      <div className="flex min-w-[18rem] max-sm:justify-center ">
        <div className="max-sm:bg-indigo-200  rounded-full pb-0.5 w-fit px-5">
          February 2024 - July 2024
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row max-sm:flex-col max-sm:text-center gap-2 tracking-normal text-lg">
          <div className="text-indigo-700 font-bold">
            Cloud Computing Cohort
          </div>
          <div className="max-sm:hidden">-</div>
          <a
            href="https://grow.google/intl/id_id/bangkit/"
            target="_blank"
            className="flex flex-row max-sm:self-center"
          >
            <div className="me-2">
              <span className="sm:hidden">at</span> Bangkit Academy{" "}
            </div>
            <img src="/logo/new-window.svg" className="w-3" alt="" />
          </a>
        </div>
        <div className="text-justify">
          Bangkit is a career readiness initiative led by Google and supported
          by industry experts from Gojek and GoTo that offers firsthand exposure
          to real-world practitioners and equips me with skills for successful
          tech careers. In this academy, My roles in my team's capstone project
          are as a <span className="font-semibold">project manager</span>,{" "}
          <span className="font-semibold">backend development</span>, and{" "}
          <span className="font-semibold">cloud engineer</span>. My capstone
          project team reached the{" "}
          <span className="font-semibold">top 50 out of 590 teams</span> in the
          capstone product track project in Bangkit Academy, batch 1, 2024.
        </div>
        <div className="flex flex-row max-sm:justify-center flex-wrap gap-2 my-2 tracking-normal">
          <div className="bg-[#87f8dc] px-4 pb-0.5 rounded-full text-sm ">
            Backend Development
          </div>
          <div className="bg-[#87f8dc] px-4 pb-0.5 rounded-full text-sm ">
            Cloud Computing
          </div>
          <div className="bg-[#87f8dc] px-4 pb-0.5 rounded-full text-sm ">
            Project Management
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bangkit;
