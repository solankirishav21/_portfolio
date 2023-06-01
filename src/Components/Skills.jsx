// eslint-disable-next-line no-unused-vars
import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import cpp from "../assets/cpp.png";
import python from "../assets/python.png";
import sql from "../assets/sql.png";
import mongodb from "../assets/mongodb.png";



const Skills = () => {

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: node,
      title: "Node",
      style: "shadow-green-800",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: cpp,
      title: "C++",
      style: "shadow-blue-700",
    },
    {
        id: 10,
        src: python,
        title: "Python",
        style: "shadow-green-300",
      },{
        id: 11,
        src: sql,
        title: "SQL",
        style: "shadow-blue-200",
      },{
        id: 12,
        src: mongodb,
        title: "MongoDB",
        style: "shadow-green-700",
      },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-black to-gray-700 w-full  pt-5 -mt-1 mb-0.75"
    >
         <h2 className=' text-yellow-400 text-4xl font-semibold text-center underline decoration-gray-300 decoration-4 '>
           Skills
           </h2>
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">

        <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-4 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
