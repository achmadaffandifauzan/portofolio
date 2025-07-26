import { React } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="z-30 fixed top-0 left-0 right-0 flex flex-row justify-center sm:justify-between flex-wrap content-center h-14 px-5 sm:px-20 backdrop-blur-md bg-white/30 shadow-md sm:shadow-sm w-screen">
      <img
        src="affandi.webp"
        className="w-48 self-center hidden lg:block"
        alt=""
      />
      {/* Desktop Nav */}
      <div className="hidden sm:flex text-black text-sm font-bold gap-4 tracking-widest">
        <Link to="about-page" duration={500} className="cursor-pointer">
          About
        </Link>
        <Link to="experiences-page" duration={500} className="cursor-pointer">
          Experiences
        </Link>
        <Link to="projects-page" duration={500} className="cursor-pointer">
          Projects
        </Link>
        <Link to="contact-page" duration={500} className="cursor-pointer">
          Contact
        </Link>
      </div>
      {/* Mobile Breadcrumb */}
      <div className="flex sm:hidden w-full justify-center items-center text-xs font-semibold uppercase tracking-wider">
        <Link to="about-page" duration={500} className="cursor-pointer">
          About
        </Link>
        <span className="mx-4 text-gray-400">/</span>
        <Link to="experiences-page" duration={500} className="cursor-pointer">
          Exp
        </Link>
        <span className="mx-4 text-gray-400">/</span>
        <Link to="projects-page" duration={500} className="cursor-pointer">
          Proj
        </Link>
        <span className="mx-4 text-gray-400">/</span>
        <Link to="contact-page" duration={500} className="cursor-pointer">
          Contact
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
