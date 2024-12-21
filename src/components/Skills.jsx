import React from "react";
import php from "../assets/images/skills/php.png";
import css from "../assets/images/skills/css.png";
import html from "../assets/images/skills/html.png";
import sql from "../assets/images/skills/sql.png";
import js from "../assets/images/skills/js.png";
import mongo from "../assets/images/skills/mongo.png";
import postgre from "../assets/images/skills/postgre.png";
import boot from "../assets/images/skills/boot.png";
import laravel from "../assets/images/skills/laravel.png";
import github from "../assets/images/skills/github.png";
import rest from "../assets/images/skills/rest.png";
import aws from "../assets/images/skills/aws.png";
import jq from "../assets/images/skills/jq.png";

const skills = [
  {
    id: 1,
    name: "PHP",
    image: php,
  },
  {
    id: 2,
    name: "HTML",
    image: html,
  },
  {
    id: 3,
    name: "CSS",
    image: css,
  },
  {
    id: 4,
    name: "MySQL",
    image: sql,
  },
  {
    id: 5,
    name: "JavaScript",
    image: js,
  },
  {
    id: 6,
    name: "Node.js",
    image:
      "https://www.sunriseintegration.com/uploads/attachments/cl4yq770gm8w7j1p76vf1ex1l-sunrise-integration-1x1-block-6.full.png", // Node.js logo
  },
  {
    id: 7,
    name: "React.js",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", // React logo
  },
  {
    id: 8,
    name: "Python",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", // Python logo
  },
  {
    id: 9,
    name: "MongoDB",
    image: mongo,
  },
  {
    id: 10,
    name: "PostgreSQL",
    image: postgre,
  },
  {
    id: 11,
    name: "Bootstrap",
    image: boot,
  },
  {
    id: 12,
    name: "Laravel",
    image: laravel,
  },
  {
    id: 13,
    name: "jQuery",
    image: jq,
  },
  {
    id: 14,
    name: "GitHub",
    image: github,
  },
  {
    id: 15,
    name: "REST APIs",
    image: rest,
  },
  {
    id: 16,
    name: "AWS ",
    image: aws,
  },
];

export default function Skills() {
  return (
    <div id="skills" className="pb-16 px-4 sm:px-8 bg-gray-100">
      <hr className="border border-black/40 border-gray-400 w-full mx-auto mb-12" />
      <div className="text-center sm:text-left mb-12 w-full">
        <p className="text-2xl text-pnk mt-2 leading-loose">Skills</p>
        <h2 className="text-4xl sm:text-6xl font-bold text-wht">
          My Tech Stack
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-16">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-black/10 shadow-xl px-6 py-8 flex flex-col items-center justify-center rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105 group cursor-pointer"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="h-16 w-16 sm:h-24 sm:w-24 mb-4 group-hover:scale-110 transition-all duration-300"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-gray mb-2 group-hover:text-pink-500 transition-all duration-300">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
