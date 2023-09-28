import React from "react";

const Socialize = ({ windowWidth }) => {
  return (
    <div
      id="project_1"
      className="flex flex-row flex-wrap justify-center gap-20 mb-24 content-center"
    >
      {(() => {
        if (windowWidth.current >= 640) {
          return (
            <div
              id="previewProject-socialize"
              className="sm:w-2/6 flex flex-col justify-center gap-5 content-center relative"
              onMouseEnter={(e) => {
                e.currentTarget
                  .querySelector("#preview-gif")
                  .classList.toggle("opacity-0");
                e.currentTarget
                  .querySelector("#preview-png")
                  .classList.toggle("opacity-0");
              }}
              onMouseLeave={(e) => {
                e.currentTarget
                  .querySelector("#preview-gif")
                  .classList.toggle("opacity-0");
                e.currentTarget
                  .querySelector("#preview-png")
                  .classList.toggle("opacity-0");
              }}
            >
              <img
                id="preview-png"
                className="transition duration-300 "
                src={"previewProject-socialize.png"}
                alt=""
              />
              <img
                id="preview-gif"
                className="transition duration-300 absolute top-1/4 opacity-0"
                src={"previewProject-socialize.gif"}
                alt=""
              />
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
          );
        } else {
          return (
            <div
              id="previewProject-socialize"
              className="sm:w-2/6 flex flex-col justify-center gap-5 content-center relative"
            >
              <img
                id="preview-png"
                className="transition duration-300 "
                src={"previewProject-socialize.png"}
                alt=""
              />
              <img
                id="preview-gif"
                className="transition duration-300 absolute top-1/4 opacity-0"
                src={"previewProject-socialize.gif"}
                alt=""
              />
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
          );
        }
      })()}
      <div className="sm:w-2/6 flex flex-col justify-center sm:gap-8">
        <div className="font-bold text-center text-sm  mb-2">SOCIALIZE</div>
        <div className="text-center text-gray-700 ">
          Social Media Platform, Powered by Node.js and built upon the Express
          framework, with real time chatting feature using Socket.io and
          React.js
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
            className="flex gap-2"
            href="https://socialize.affandif.com"
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
export default Socialize;