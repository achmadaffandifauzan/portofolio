import { React } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const About = () => {
  return (
    <div
      id="about-page"
      className="flex flex-row sm:h-screen gap-14 flex-wrap justify-center content-between sm:content-center px-5 sm:px-10 py-20 sm:py-0"
    >
      <div className="sm:w-2/6 flex align-middle content-center flex-wrap">
        <LazyLoadImage
          effect="blur"
          src={"stack.png"}
          className="rounded-xl h-fit transition-all duration-300"
        />
      </div>
      <div className="sm:w-2/5 ">
        <div className="text-blue-500 font-extrabold text-xs mb-2 tracking-wider">
          ABOUT ME
        </div>
        <div className="text-xl font-extrabold mb-6">
          A dedicated Full Stack Web Developer based in Surabaya, Indonesia
        </div>
        <div className=" text-gray-700 tracking-tight">
          Hello, I'm Achmad Affandi Fauzan, a dedicated Full Stack Web Developer
          based in Surabaya, Indonesia. Currently a third-year student at
          Universitas Airlangga, pursuing Bachelor of Information System. I'm
          passionate about creating dynamic web experiences that seamlessly
          blend form and function. I thrive on turning ideas into fully
          functional web applications. I'm excited to contribute my skills and
          expertise to create innovative web solutions.
        </div>
      </div>
    </div>
  );
};

export default About;
