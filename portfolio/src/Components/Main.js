import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

const Main = ({ img_src, name, linkedin, github, intro }) => {
  return (
    <div className="mx-0 md:mx-2 bg-gray-300 flex flex-col md:flex-row justify-between min-h-[90%] md:px-30 px-2 rounded-lg md:items-center items-start md:w-auto w-screen">
      <div className="flex flex-col gap-5">
        <div className="md:w-120 md:h-50 w-90 h-50 flex items-center">
          <h1 className="md:text-7xl text-6xl font-bold text-gray-900 leading-snug">
            Hello, I'm {name}
          </h1>
        </div>
        <div className="md:w-2xl w-90">
            <p className="text-lg text-gray-700 leading-relaxed w-full">
                {intro}
            </p>
        </div>
        <div className="flex gap-7 md:m-0 m-auto">
            <a target="_blank" href={github}><FaGithub size={40} className="text-gray-800 p-0.5 hover:text-gray-950 hover:scale-[1.05]" /></a>
            <a target="_blank" href={linkedin}><IoLogoLinkedin size={40} className="text-blue-800 p-0.5 hover:text-blue-600 hover:scale-[1.05]" /></a>
        </div>
      </div>
      <img
        className="md:w-100 md:h-100 rounded-lg w-50 h-50 mt-10 md:mt-0 md:m-0 m-auto"
        src={img_src}
        alt={name}
      />
    </div>
  );
};

export default Main;
