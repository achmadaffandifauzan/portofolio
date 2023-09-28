import { useState, React, useEffect } from "react";
const Home = () => {
  return (
    <div className="flex flex-col h-screen justify-center px-5 sm:px-20 content-center ">
      <div className="flex flex-col-reverse sm:flex-row flex-wrap justify-around gap-20 sm:px-20 content-center">
        <div className="flex-initial flex flex-col justify-around w-full sm:w-2/5">
          <div className="text-4xl font-bold tracking-wide mt-10">
            Full Stack Web Developer
          </div>
          <div className="my-10 text-gray-700 tracking-wide flex">
            <span>
              <span>
                Hi, I'm{" "}
                <span className="font-extrabold">Achmad Affandi Fauzan</span>, A
                passionate Full Stack Web Developer based in
              </span>
              <span className="flex">
                Surabaya, Indonesia.
                <img src="logo/location.svg" className="w-6 flex" alt="" />{" "}
              </span>
            </span>
          </div>
        </div>
        <div className="flex-initial w-80 self-center">
          <img src="foto_framed_hd.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Home;
