import { React } from "react";

const About = () => {
  return (
    <div
      id="about-page"
      className="flex flex-row h-screen gap-20 flex-wrap justify-center px-5 sm:px-20 content-center"
    >
      <div className="sm:w-2/6 flex align-middle content-center flex-wrap">
        <img src="stack.png" className="rounded-xl h-fit" alt="" />
      </div>
      <div className="sm:w-2/5 ">
        <div className="text-blue-500 font-extrabold text-xs mb-2 tracking-wider">
          ABOUT ME
        </div>
        <div className="text-xl font-extrabold mb-6">
          A dedicated Full Stack Web Developer based in Kediri, Indonesia
        </div>
        <div className=" text-gray-700 tracking-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sit
          veniam commodi ea, expedita quod minus dignissimos? Nostrum, quaerat
          velit deserunt itaque repellat suscipit est saepe necessitatibus
          maxime alias debitis. Atque aperiam deleniti asperiores dignissimos
          minus quasi ea esse obcaecati dolor consectetur quas excepturi
          voluptatibus molestias, vero nulla eaque quaerat quibusdam incidunt
          corrupti sapiente illum nihil animi. Asperiores, similique ad?
        </div>
      </div>
    </div>
  );
};

export default About;
