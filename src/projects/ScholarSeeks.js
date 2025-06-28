import { React, useState, useEffect } from "react";
import LoadingAnimation from "../LoadingAnimation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { GreenTag } from "../components/Tags";

const ScholarSeeks = ({ windowWidth }) => {
  const [loadingImage, setLoadingImage] = useState(true);
  const imageSrc = "projects/scholarseeks.webp";
  useEffect(() => {
    const image = new Image();
    image.src = imageSrc;

    image.onload = () => {
      setLoadingImage(false);
    };
  }, [imageSrc]);
  return (
    <div
      id="project_scholarseeks"
      className="flex flex-row flex-wrap justify-center gap-20 mb-32 content-center"
    >
      <div
        id="previewProject_scholarseeks"
        data-aos="fade-right"
        data-aos-duration="300"
        className="sm:w-2/5 flex flex-col justify-center gap-5 content-center relative transition-all duration-300"
      >
        <div id="preview-png" className="text-center">
          {loadingImage ? (
            <>
              <span className="text-sm text-gray-500 font-semibold text-center">
                Loading Image
              </span>
              <LoadingAnimation />
            </>
          ) : (
            <LazyLoadImage
              effect="blur"
              className="rounded-xl"
              src={"projects/scholarseeks.webp"}
            />
          )}
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="300"
        className="sm:w-2/5 flex flex-col justify-center sm:gap-4"
      >
        <div className="font-bold text-center text-sm  mb-2 gap-2 flex flex-col">
          <div className="mb-3 flex flex-row flex-wrap justify-center items-center gap-2">
            <div className="font-bold text-center text-lg leading-4">
              SCHOLARSEEKS
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center gap-2">
              <GreenTag text={"TEAM"} />
              <GreenTag text={"MOBILE"} />
              <GreenTag text={"OPEN SOURCE"} />
            </div>
          </div>
          <div className=" py-1 px-4 rounded-xl bg-indigo-300 mx-1 font-semibold">
            7-Member Team
          </div>
          <div className="py-2  rounded-3xl  bg-[#87f8dc3b] text-black font-semibold text-[13px] flex flex-col flex-wrap justify-center items-center">
            <div className=" pb-1.5">My Role</div>
            <div className="flex flex-row flex-wrap justify-center items-center">
              <span className="py-1 px-4 rounded-xl bg-[#87f8dc] mx-1 ">
                Backend Developer
              </span>
              <span className="py-1 px-4 rounded-xl bg-[#87f8dc] mx-1 ">
                Project Manager
              </span>
              <span className="py-1 px-4 rounded-xl bg-[#87f8dc] mx-1 ">
                Cloud Engineer
              </span>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-700 ">
          <span className="font-semibold">
            ScholarSeeks: "Your Personalized Academic Article Recommender"&nbsp;
          </span>
          is a mobile application that simplifies the search for scholarly
          articles by providing tailored recommendations based on researchers
          interests. This system helps academics explore new topics and
          encourages cross-disciplinary research.
        </div>
        <div className="text-sm flex flex-row flex-wrap justify-around font-bold my-4">
          <div className="mx-4 my-1 flex gap-2 ">
            <span className="self-center">Flask</span>{" "}
            <img
              src="/logo/flask.svg"
              className="w-6 h-fit self-center"
              alt=""
            />
          </div>
          <div className="mx-4 my-1 flex gap-2 ">
            <span className="self-center">Firebase</span>{" "}
            <img
              src="/logo/firebase.svg"
              className="w-6 h-fit self-center"
              alt=""
            />
          </div>
          <div className="mx-4 my-1 flex gap-2 ">
            <span className="self-center">Kotlin</span>{" "}
            <img
              src="/logo/kotlin.svg"
              className="w-4 h-fit self-center"
              alt=""
            />
          </div>
          <div className="mx-4 my-1 flex gap-2 ">
            <span className="self-center">Scikit-learn</span>{" "}
            <img
              src="/logo/scikit_learn.svg"
              className="w-6 h-fit self-center"
              alt=""
            />
          </div>
          <div className="mx-4 my-1 flex gap-2 ">
            <span className="self-center">Tensorflow</span>{" "}
            <img
              src="/logo/tensorflow.svg"
              className="w-6 h-fit self-center"
              alt=""
            />
          </div>
          <div className="mx-4 my-1 flex gap-2 ">
            <span className="self-center">Postman</span>{" "}
            <img
              src="/logo/postman.svg"
              className="w-6 h-fit self-center"
              alt=""
            />
          </div>
          <div className="mx-4 my-1 flex gap-2 ">
            <span className="self-center">Docker</span>{" "}
            <img
              src="/logo/docker.svg"
              className="w-6 h-fit self-center"
              alt=""
            />
          </div>
          <div className="mx-4 my-1 flex gap-2 ">
            <span className="self-center">Google Cloud Platform</span>{" "}
            <img
              src="/logo/gcloud.svg"
              className="w-6 h-fit self-center"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-12 justify-center font-semibold">
          <a
            target="_blank"
            href="https://github.com/capstone-bangkidss"
            className="flex gap-2"
          >
            <span className="self-center">Code</span>
            <img
              src="/logo/github.svg"
              className="w-5 h-fit self-center"
              alt=""
            />
          </a>
          <a
            target="_blank"
            className="flex gap-2 hover:bg-[#87f7db] bg-indigo-300  transition-all px-5 py-1 rounded-xl"
            href="https://youtu.be/DmHi8i2hGVI"
          >
            <span className="self-center">Demo</span>
            <img
              src="/logo/new-window.svg"
              className="w-4 h-fit self-center"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default ScholarSeeks;
