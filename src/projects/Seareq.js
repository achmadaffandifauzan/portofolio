import React, { useState, useEffect } from "react";
import LoadingAnimation from "../LoadingAnimation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Seareq = ({ windowWidth }) => {
  const [loadingPNG, setLoadingPNG] = useState(true);
  const [loadingGIF, setLoadingGIF] = useState(true);
  const imageSrc = "projects/seareq.webp";
  const animationSrc = "projects/seareq_animate.webp";
  useEffect(() => {
    const image = new Image();
    image.src = imageSrc;

    image.onload = () => {
      setLoadingPNG(false);
    };
  }, [imageSrc]);
  useEffect(() => {
    if (!loadingPNG) {
      const image = new Image();
      image.src = animationSrc;

      image.onload = () => {
        setLoadingGIF(false);
      };
    }
  }, [animationSrc, loadingPNG]);
  return (
    <div
      id="project_2"
      className="flex flex-col-reverse sm:flex-row flex-wrap justify-center gap-20 mb-24 content-center"
    >
      <div className="sm:w-2/5 flex flex-col justify-center sm:gap-8">
        <div className="font-bold text-center text-sm  mb-2 gap-2 flex flex-col">
          <div>Stakeholder Requirements Retrieval for Fresh Graduates</div>
          <div className="py-1 px-4 rounded-xl bg-blue-300 mx-1 font-semibold">
            10 People Team
          </div>
          <div className="py-2  rounded-3xl  bg-[#87f8dc3b] text-black font-semibold text-[13px] flex flex-col flex-wrap justify-center items-center">
            <div className=" pb-1.5">Role</div>
            <div className="flex flex-row flex-wrap justify-center items-center">
              <span className="py-1 px-4 rounded-xl bg-[#87f8dc] mx-1 ">
                Back-end
              </span>
              <span className="py-1 px-4 rounded-xl bg-[#87f8dc] mx-1 ">
                Project Manager
              </span>
              <span className="py-1 px-4 rounded-xl bg-[#87f8dc] mx-1 ">
                Scrum Master
              </span>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-700 ">
          A web-based platform powered by Django and MySQL. A platform to
          extract the skills and requirements for fresh graduates to secure jobs
          in fast-paced, rapidly changing industries. Getting the raw data from
          Kalibrr and RapidAPI.
        </div>
        <div className="text-center text-gray-700 ">
          Utilizing natural language processing methods in machine learning,
          such as Term Frequency-Inverse Document Frequency (TF-IDF), POS
          Tagging, Lemmatization, Stopword removal, Tokenizing, and also
          leveraging the Wikipedia API to validate the terms.
        </div>
        <div className="text-sm flex flex-row flex-wrap justify-around font-bold my-4">
          <div className="mx-4 my-1 flex gap-2 ">
            <span className="self-center">Django</span>{" "}
            <img
              src="/logo/django.svg"
              className="w-5 h-fit self-center"
              alt=""
            />
          </div>
          <div className="mx-4 my-1 flex gap-2 ">
            <span className="self-center">MySQL</span>{" "}
            <img
              src="/logo/mysql.svg"
              className="w-6 h-fit self-center"
              alt=""
            />
          </div>
          <div className="mx-4 my-1 flex gap-2 ">
            <span className="self-center">TailwindCSS</span>{" "}
            <img
              src="/logo/tailwindcss.svg"
              className="w-6 h-fit self-center"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-12 justify-center font-semibold">
          <a
            target="_blank"
            href="https://github.com/AgileRE-2023/stakeholder-requirement-retriever"
            className="flex gap-2"
          >
            <span className="self-center">Code</span>
            <img
              src="/logo/github.svg"
              className="w-5 h-fit self-center"
              alt=""
            />
          </a>
        </div>
      </div>

      <div
        id="previewProject-vote"
        className="sm:w-2/5 flex flex-col justify-center gap-5 content-center relative transition-all duration-300"
        onMouseEnter={(e) => {
          if (windowWidth.current >= 640) {
            if (loadingPNG == false) {
              e.currentTarget
                .querySelector("#preview-gif")
                .classList.toggle("opacity-0");
              e.currentTarget
                .querySelector("#preview-png")
                .classList.toggle("opacity-0");
            }
          }
        }}
        onMouseLeave={(e) => {
          if (windowWidth.current >= 640) {
            if (loadingPNG == false) {
              e.currentTarget
                .querySelector("#preview-gif")
                .classList.toggle("opacity-0");
              e.currentTarget
                .querySelector("#preview-png")
                .classList.toggle("opacity-0");
            }
          }
        }}
      >
        <div id="preview-png" className="text-center">
          {loadingPNG ? (
            <>
              <span className="text-sm text-gray-500 font-semibold text-center">
                Loading Image
              </span>
              <LoadingAnimation />
            </>
          ) : (
            <LazyLoadImage effect="blur" src={"projects/seareq.webp"} />
          )}
        </div>
        <div
          id="preview-gif"
          className="opacity-0 absolute top-1/4 self-center transition-all duration-300"
        >
          {loadingGIF ? (
            <>
              <span className="text-sm text-gray-500 font-semibold">
                Loading Gif
              </span>
              <LoadingAnimation />
            </>
          ) : (
            <LazyLoadImage src={"projects/seareq_animate.webp"} />
          )}
        </div>
        <button
          className="justify-self-center block sm:hidden self-center px-3 py-1 bg-blue-600 text-white text-sm text-center rounded-lg"
          onClick={(e) => {
            e.currentTarget.parentElement
              .querySelector("#preview-gif")
              .classList.toggle("opacity-0");
            e.currentTarget.parentElement
              .querySelector("#preview-png")
              .classList.toggle("opacity-0");
          }}
        >
          PREVIEW
        </button>
      </div>
    </div>
  );
};

export default Seareq;
