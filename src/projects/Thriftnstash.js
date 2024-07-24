import { React, useState, useEffect } from "react";
import LoadingAnimation from "../LoadingAnimation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Thriftnstash = ({ windowWidth }) => {
  const [loadingImage, setLoadingImage] = useState(true);
  const [loadingGIF, setLoadingGIF] = useState(true);
  const imageSrc = "projects/thriftnstash.webp";
  const animationSrc = "projects/thriftnstash_animate.webp";
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
      id="project_thriftnstash"
      className="flex flex-row flex-wrap justify-center gap-20 mb-32 content-center"
    >
      <div
        id="previewProject_thriftnstash"
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
            <LazyLoadImage effect="blur" src={"projects/thriftnstash.webp"} />
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
            <LazyLoadImage src={"projects/thriftnstash_animate.webp"} />
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

      <div className="sm:w-2/5 flex flex-col justify-center sm:gap-4">
        <div className="font-bold text-center text-sm  mb-2 gap-2 flex flex-col">
          <div className="mb-3">THRIFT & STASH</div>
          <div className=" py-1 px-4 rounded-xl bg-blue-300 mx-1 font-semibold">
            2-Member Team
          </div>
          <div className="py-2  rounded-3xl  bg-[#87f8dc3b] text-black font-semibold text-[13px] flex flex-col flex-wrap justify-center items-center">
            <div className=" pb-1.5">My Role</div>
            <div className="flex flex-row flex-wrap justify-center items-center">
              <span className="py-1 px-4 rounded-xl bg-[#87f8dc] mx-1 ">
                Full-Stack Developer
              </span>
              <span className="py-1 px-4 rounded-xl bg-[#87f8dc] mx-1 ">
                Project Manager
              </span>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-700 ">
          {/* restful since it only stores session in server as authentication purposes */}
          An online thrift shopping platform, powered by Laravel and MySQL, with
          a RESTful implementation that follows the MVC architectural pattern
          and provides a seamless, transaction-free experience for users to
          discover a wide range of sustainable products at affordable prices.
        </div>
        <div className="text-sm flex flex-row flex-wrap justify-around font-bold my-4">
          <div className="mx-4 my-1 flex gap-2 ">
            <span className="self-center">MySQL</span>{" "}
            <img
              src="/logo/mysql.svg"
              className="w-6 h-fit self-center"
              alt=""
            />
          </div>
          <div className="mx-4 my-1 flex gap-2 ">
            <span className="self-center">Laravel</span>{" "}
            <img
              src="/logo/laravel.svg"
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
            href="https://github.com/CampusProjectsFigoAndFandi/thriftandstash"
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
    </div>
  );
};
export default Thriftnstash;
