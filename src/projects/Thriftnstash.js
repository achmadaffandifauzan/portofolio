import { React, useState, useEffect } from "react";
import LoadingAnimation from "../LoadingAnimation";

const Thriftnstash = ({ windowWidth }) => {
  const [loadingPNG, setLoadingPNG] = useState(true);
  const [loadingGIF, setLoadingGIF] = useState(true);
  const pngImageUrl = "previewProject-thriftnstash.png";
  const gifImageUrl = "previewProject-thriftnstash.gif";
  useEffect(() => {
    const image = new Image();
    image.src = pngImageUrl;

    image.onload = () => {
      setLoadingPNG(false);
    };
  }, [pngImageUrl]);
  useEffect(() => {
    const image = new Image();
    image.src = gifImageUrl;

    image.onload = () => {
      setLoadingGIF(false);
    };
  }, [gifImageUrl]);
  return (
    <div
      id="project_5"
      className="flex flex-row flex-wrap justify-center gap-20 content-center"
    >
      <div
        id="previewProject-thriftnstash"
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
            <img src={"previewProject-thriftnstash.png"} />
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
            <img src={"previewProject-thriftnstash.gif"} />
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

      <div className="sm:w-2/5 flex flex-col justify-center sm:gap-8">
        <div className="font-bold text-center text-sm  mb-2">
          THRIFT & STASH
        </div>
        <div className="text-center text-gray-700 ">
          An online thrift shopping platform, powered by Laravel and MySQL,
          which follows the MVC architectural pattern and provides a seamless,
          transaction-free experience for users to discover a wide range of
          sustainable products at affordable prices.
        </div>
        <div className="text-sm flex flex-row flex-wrap justify-around font-bold my-4">
          <div className="mx-4 my-1 flex gap-2 ">
            <span className="self-center">MySql</span>{" "}
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
          <a
            target="_blank"
            className="flex gap-2"
            href="https://thriftnstash.affandif.com/"
          >
            <span className="self-center">Live Demo</span>
            <img
              src="/logo/new-window.svg"
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
