import { React } from "react";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex flex-row justify-between flex-wrap content-center h-14 border-b-2 border-gray-100 px-5 sm:px-20">
      <a
        href="#my-projects"
        className="flex justify-center content-center flex-wrap text-black font-bold  rounded-lg"
      >
        My Projects
      </a>
      <button className="bg-teal-300 text-black font-semibold rounded-lg py-1 h-10 px-3 text-center align-middle">
        Contact Me
      </button>
    </nav>
  );
};
export default Navbar;
