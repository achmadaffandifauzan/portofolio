import { React } from "react";
const Navbar = () => {
  return (
    <nav className="z-30 fixed top-0 left-0 right-0 flex flex-row justify-center sm:justify-between flex-wrap content-center h-14  px-5 sm:px-20  backdrop-blur-md bg-white/30 shadow-md sm:shadow-sm">
      <img
        src="affandi.webp"
        className="w-48 h-fit self-center hidden lg:block"
        alt=""
      />
      <div className="flex max-sm:w-full max-sm:justify-around text-black text-sm max-sm:uppercase max-sm:text-xs font-bold sm:gap-4 sm:tracking-widest tracking-wider">
        <a href="#about-page">About</a>
        <a href="#experiences-page">Experiences</a>
        <a href="#projects-page">Projects</a>
        <a href="#contact-page">Contact</a>
      </div>
    </nav>
  );
};
export default Navbar;
