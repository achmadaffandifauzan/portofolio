import { React, useState, useEffect } from "react";
import LoadingAnimation from "../LoadingAnimation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { GreenTag } from "../components/Tags";

const Socialize = ({ windowWidth }) => {
  const [loadingImage, setLoadingImage] = useState(true);
  const [loadingGIF, setLoadingGIF] = useState(true);
  const imageSrc = "projects/socialize.webp";
  const animationSrc = "projects/socialize_animate.webp";
  useEffect(() => {
    const image = new Image();
    image.src = imageSrc;

    image.onload = () => {
      setLoadingImage(false);
    };
  }, [imageSrc]);
  useEffect(() => {
    if (!loadingImage) {
      const image = new Image();
      image.src = animationSrc;

      image.onload = () => {
        setLoadingGIF(false);
      };
    }
  }, [animationSrc, loadingImage]);
  return (
    <div
      id="project_socialize"
      className="flex flex-row flex-wrap justify-center gap-20 mb-32 content-center "
    >
      <div
        id="previewProject_socialize"
        data-aos="fade-right"
        data-aos-duration="300"
        className="sm:w-2/5 flex flex-col justify-center gap-5 content-center relative transition-all duration-300"
        onMouseEnter={(e) => {
          if (windowWidth.current >= 640) {
            if (loadingImage == false) {
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
            if (loadingImage == false) {
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
          {loadingImage ? (
            <>
              <span className="text-sm text-gray-500 font-semibold text-center">
                Loading Image
              </span>
              <LoadingAnimation />
            </>
          ) : (
            <LazyLoadImage effect="blur" src={"projects/socialize.webp"} />
          )}
        </div>
        <div
          id="preview-gif"
          className="opacity-0 absolute self-center transition-all duration-300"
        >
          {loadingGIF ? (
            <>
              <span className="text-sm text-gray-500 font-semibold">
                Loading Gif
              </span>
              <LoadingAnimation />
            </>
          ) : (
            <LazyLoadImage src={"projects/socialize_animate.webp"} />
          )}
        </div>
        <button
          className="justify-self-center block sm:hidden self-center px-5 py-1.5 bg-indigo-500 active:ring-4 text-white text-sm text-center rounded-lg"
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

      <div
        data-aos="fade-left"
        data-aos-duration="300"
        className="sm:w-2/5 flex flex-col justify-center sm:gap-8"
      >
        <div className="mb-3 flex flex-row flex-wrap justify-center items-center gap-2">
          <div className="font-bold text-center text-lg leading-4">
            SOCIALIZE
          </div>
          <div className="flex flex-row flex-wrap justify-center items-center gap-2">
            <GreenTag text={"SOLO"} />
            <GreenTag text={"WEB"} />
            <GreenTag text={"OPEN SOURCE"} />
          </div>
        </div>
        <div className="text-center text-gray-700 ">
          Social Media Platform, Powered by Node.js and built upon the Express
          framework, with real time chatting feature using Socket.io and
          React.js in a RESTful manner.
        </div>
        <div className="text-sm flex flex-row flex-wrap justify-around font-bold my-4">
          <div className="mx-4 my-1 flex gap-2 ">
            <span className="self-center">Socket.IO</span>{" "}
            <img
              src="/logo/socketio.svg"
              className="w-6 h-fit self-center"
              alt=""
            />
          </div>
          <div className="mx-4 my-1 flex gap-2 ">
            <span className="self-center">MongoDB</span>{" "}
            <img
              src="/logo/mongodb.svg"
              className="w-6 h-fit self-center"
              alt=""
            />
          </div>
          <div className="mx-4 my-1 flex gap-2 ">
            <span className="self-center">ExpressJS</span>{" "}
            <img
              src="/logo/express.svg"
              className="w-6 h-fit self-center"
              alt=""
            />
          </div>
          <div className="mx-4 my-1 flex gap-2 ">
            <span className="self-center">ReactJS</span>{" "}
            <img
              src="/logo/react.svg"
              className="w-6 h-fit self-center"
              alt=""
            />
          </div>
          <div className="mx-4 my-1 flex gap-2 ">
            <span className="self-center">NodeJS</span>{" "}
            <img
              src="/logo/nodejs.svg"
              className="w-6 h-fit self-center"
              alt=""
            />
          </div>
          <div className="mx-4 my-1 flex gap-2 ">
            <span className="self-center">Bootstrap</span>{" "}
            <img
              src="/logo/bootstrap.svg"
              className="w-6 h-fit self-center"
              alt=""
            />
          </div>
          <div className="mx-4 my-1 flex gap-2 ">
            <span className="self-center">Cloudinary</span>{" "}
            <img
              src="/logo/cloudinary.svg"
              className="w-6 h-fit self-center"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-12 justify-center font-semibold">
          <a
            target="_blank"
            href="https://github.com/achmadaffandifauzan/socialize"
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
            href="https://socialize.affandif.com"
          >
            <span className="self-center">Visit Website</span>
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
export default Socialize;
