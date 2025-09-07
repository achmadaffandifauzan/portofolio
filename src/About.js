import { React } from "react";
const About = () => {
  return (
    <div
      id="about-page"
      className="flex flex-row sm:h-screen gap-14 flex-wrap justify-center content-between sm:content-center px-5 sm:px-10 py-20 sm:py-0"
    >
      <div
        data-aos="zoom-in-right"
        data-aos-duration="500"
        className="sm:w-2/6 flex align-middle content-center flex-wrap"
      >
        <img
          effect="blur"
          src={"stack.webp"}
          className="rounded-xl  transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"
        />
      </div>
      <div className="sm:w-2/5 flex sm:flex-row flex-wrap sm:justify-between">
        <div
          data-aos="fade-left"
          data-aos-duration="500"
          className="text-blue-500 font-extrabold text-xs mb-2 tracking-wider"
        >
          ABOUT ME
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="500"
          className="text-xl font-extrabold mb-6"
        >
          Full Stack Developer based in Surabaya, Indonesia
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="500"
          className=" text-gray-700 tracking-tight"
        >
          Bachelor of Computer Science from Universitas Airlangga with
          experience in software development. Currently a Full Stack Developer
          at HM Sampoerna — Philip Morris International, building scalable
          digital platforms.
        </div>
      </div>
    </div>
  );
};

export default About;
