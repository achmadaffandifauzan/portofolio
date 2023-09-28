import { React } from "react";
const Navbar = () => {
  return (
    <nav className="z-30 fixed top-0 left-0 right-0 flex flex-row justify-end sm:justify-between flex-wrap content-center h-14  px-5 sm:px-20  backdrop-blur-md bg-white/30 shadow-md sm:shadow-sm ">
      <img
        src="affandi.png"
        className="w-48 h-fit self-center hidden lg:block"
        alt=""
      />
      <div className="">
        <a
          href="#about-page"
          className="text-black text-sm font-bold px-3 tracking-wide"
        >
          About
        </a>
        <a
          href="#portofolio-page"
          className="text-black text-sm font-bold px-3 tracking-wide "
        >
          Projects
        </a>
        <a
          href="#contact-page"
          className="text-black text-sm font-bold px-3 tracking-wide"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
