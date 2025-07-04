import { React } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Home = () => {
  return (
    <div className="flex flex-col h-screen justify-center px-5 sm:px-10 content-center ">
      <div className="flex flex-col-reverse sm:flex-row flex-wrap justify-around gap-14 sm:px-20 content-center">
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className="flex-initial flex flex-col sm:gap-4 sm:justify-center justify-around w-full sm:w-2/5"
        >
          <div className="text-4xl font-bold tracking-wide mt-10  max-sm:text-center">
            Full Stack Developer
          </div>
          <div className="my-8 mb-4 text-gray-700 tracking-wide flex max-sm:text-center">
            <span>
              <span>
                Hi, I'm{" "}
                <span className="font-extrabold">Achmad Affandi Fauzan</span>, A
                passionate Full Stack Developer based in
              </span>
              <span className="flex  max-sm:justify-center">
                Surabaya, Indonesia.
                <img src="logo/location.svg" className="w-6 flex" alt="" />{" "}
              </span>
            </span>
          </div>
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-duration="500"
          className="flex-initial w-80 sm:w-96 self-center"
        >
          <img
            alt={"photo_of_me"}
            src={"foto_hijau_circle.webp"}
            className="transition-all duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
