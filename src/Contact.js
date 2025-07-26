import { React } from "react";
const socials = [
  {
    name: "GitHub",
    username: "achmadaffandifauzan",
    url: "https://github.com/achmadaffandifauzan",
    icon: "logo/github.svg",
  },
  {
    name: "LinkedIn",
    username: "achmad-affandi-fauzan",
    url: "https://www.linkedin.com/in/achmad-affandi-fauzan/",
    icon: "logo/linkedin.svg",
  },
  {
    name: "Instagram",
    username: "achmadaffandifauzan",
    url: "https://www.instagram.com/achmadaffandifauzan/",
    icon: "logo/instagram.svg",
  },
  {
    name: "Twitter",
    username: "aaffandif",
    url: "https://twitter.com/aaffandif",
    icon: "logo/twitter.svg",
  },
];

const Contact = () => {
  return (
    <div
      id="contact-page"
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="flex flex-col h-screen justify-center items-center px-5 sm:px-20"
    >
      <img src="socials.webp" className="w-56 mb-8" alt="" />
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 w-full max-w-xl">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 bg-white/70 hover:bg-indigo-100 transition rounded-xl shadow p-4 group"
          >
            <img src={social.icon} className="w-10 h-10" alt={social.name} />
            <div>
              <div className="font-bold text-lg">{social.name}</div>
              <div className="text-gray-600 text-sm">@{social.username}</div>
            </div>
            <img
              src="logo/new-window.svg"
              className="w-4 h-4 ml-auto opacity-60"
              alt="Open"
            />
          </a>
        ))}
      </div>
    </div>
  );
};
export default Contact;
