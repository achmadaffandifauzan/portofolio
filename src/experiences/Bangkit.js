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
          by industry experts from Gojek and GoTo, I am undergoing comprehensive
          training in Cloud Computing. This program offers firsthand exposure to
          real-world practitioners and equips us with skills for successful tech
          careers. In this academy, My roles in my team's capstone project are
          as a project manager, backend engineer, and cloud engineer.
        </div>
        <div className="flex flex-row max-sm:justify-center flex-wrap gap-2 my-2 tracking-normal">
          <div className="bg-[#87f8dc] px-4 pb-0.5 rounded-full text-sm ">
            Backend Web Development
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
