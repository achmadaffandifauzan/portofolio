import { useState, React, useEffect } from "react";
const Home = () => {
  const [scrollTop, setScrollTop] = useState(0);

  // useEffect(() => {
  //   const handleScroll = (event) => {
  //     console.log(window.scrollY);
  //     setScrollTop(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <div className="flex flex-col h-screen  justify-center px-5 sm:px-20 content-center ">
      <div className="flex flex-row flex-wrap justify-around px-5 sm:px-20 content-center">
        <div className="flex-initial flex flex-col justify-between w-full sm:w-2/5">
          <img src="affandi.svg" className="my-10 block lg:hidden" alt="" />
          <div className="text-4xl font-bold tracking-wide">
            Full Stack Web Developer
          </div>
          <div className="my-10 text-gray-700 tracking-wide">
            Hi, I'm Achmad Affandi Fauzan, A passionate Full Stack Web Developer
            based in Kediri, Indonesia.
          </div>
        </div>
        <div className="flex-initial w-80">
          <img src="foto_framed_hd.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Home;
