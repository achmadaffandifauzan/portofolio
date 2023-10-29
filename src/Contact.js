import { React } from "react";
const Contact = () => {
  return (
    <div
      id="contact-page"
      className="flex flex-wrap flex-col h-screen justify-center px-5 sm:px-20 content-center "
    >
      <img src="socials.webp" className="w-56 self-center" alt="" />
      <div className="my-5 flex flex-row content-center justify-center">
        <img src="logo/github.svg" className="w-6 me-6" alt="" />
        <span className="me-2 truncate">github.com/achmadaffandifauzan</span>
        <a
          target="_blank"
          href="https://github.com/achmadaffandifauzan"
          className="flex content-center"
        >
          <img src="logo/new-window.svg" className="w-4" alt="" />
        </a>
      </div>
      <div className="my-5 flex flex-row content-center justify-center">
        <img src="logo/linkedin.svg" className="w-6 me-6" alt="" />
        <span className="me-2 truncate max-w-xs sm:max-w-fit ">
          linkedin.com/in/achmad-affandi-fauzan
        </span>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/achmad-affandi-fauzan/"
          className="flex content-center min-w-max"
        >
          <img src="logo/new-window.svg" className="w-4" alt="" />
        </a>
      </div>
      <div className="my-5 flex flex-row content-center justify-center">
        <img src="logo/instagram.svg" className="w-6 me-6" alt="" />
        <span className="me-2 truncate">instagram.com/achmadaffandifauzan</span>
        <a
          target="_blank"
          href="https://www.instagram.com/achmadaffandifauzan/"
          className="flex content-center"
        >
          <img src="logo/new-window.svg" className="w-4" alt="" />
        </a>
      </div>
      <div className="my-5 flex flex-row content-center justify-center">
        <img src="logo/twitter.svg" className="w-6 me-6" alt="" />
        <span className="me-2 truncate">twitter.com/aaffandif</span>
        <a
          target="_blank"
          href="https://twitter.com/aaffandif"
          className="flex content-center"
        >
          <img src="logo/new-window.svg" className="w-4" alt="" />
        </a>
      </div>
    </div>
  );
};
export default Contact;
