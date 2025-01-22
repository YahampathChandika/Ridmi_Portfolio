import React from "react";
import image from "../assets/images/ridmi.jpeg";
import mysql from "../assets/images/mysql.png";
import { SiMysql } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
export default function Hero() {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-0 md:py-20 space-y-10 md:space-y-0"
    >
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <p className="font-medium text-gray tracking-widest	">
          WELCOME TO MY WORLD
        </p>
        <p className="text-3xl text-wht md:text-6xl font-semibold leading-tight tracking-wide">
          Hi, I’m <span className="text-pnk">Ridmi</span>{" "}
          <br className="hidden md:block" /> a Full-Stack Developer
        </p>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end md:hidden">
          <img
            src={image}
            alt="Ridmi Jayasekara"
            className="rounded-lg shadow-lg w-10/12 md:w-8/12"
          />
        </div>
        <p className="text-gray text-base md:text-lg">
          I am passionate about crafting intuitive, efficient, and user-focused
          web applications. My goal is to deliver impactful, scalable, and
          modern digital products that prioritize reliability and user
          experience. I use animation as a third dimension to simplify
          experiences and guide interactions, not just to enhance visuals, but
          to make a meaningful difference.
        </p>
        {/* Buttons */}
        <div className="flex flex-col md:flex-row md:justify-between items-center pt-20 md:items-start space-y-10 md:space-y-0">
          <div>
            <p className="text-base text-gray mb-3 font-light tracking-wide">
              FIND WITH ME
            </p>
            <div className="flex justify-center md:justify-start space-x-4 text-gray-500">
              <a
                href="https://www.linkedin.com/in/ridmi-jayasekara-1bb7011a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-black/50 to-black/20 text-wht w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded shadow-lg hover:bg-black/50 hover:-translate-y-2 transition-transform duration-300"
              >
                <i className="fab fa-linkedin-in text-2xl md:text-3xl"></i>
              </a>
              <a
                href="https://github.com/ridmijayasekara2713"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-black/50 to-black/20 text-wht w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded shadow-lg hover:bg-black/50 hover:-translate-y-2 transition-transform duration-300"
              >
                <i className="fab fa-github text-2xl md:text-3xl"></i>
              </a>
              <a
                href="https://wa.me/+94761506328"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-black/50 to-black/20 text-wht w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded shadow-lg hover:bg-black/50 hover:-translate-y-2 transition-transform duration-300"
              >
                <i className="fab fa-whatsapp text-2xl md:text-3xl"></i>
              </a>
            </div>
          </div>

          <div>
            <p className="text-base text-gray mb-3 font-light tracking-wide">
              BEST SKILLS ON
            </p>
            <div className="flex justify-center md:justify-start space-x-4 text-gray-500">
              <div className="bg-gradient-to-br from-black/50 to-black/20 text-wht w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded shadow-lg hover:bg-black/50 hover:-translate-y-2 transition-transform duration-300">
                <i className="fab fa-html5 text-2xl md:text-3xl"></i>
              </div>
              <div className="bg-gradient-to-br from-black/50 to-black/20 text-wht w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded shadow-lg hover:bg-black/50 hover:-translate-y-2 transition-transform duration-300">
                <i className="fab fa-css3-alt text-2xl md:text-3xl"></i>
              </div>
              <div className="bg-gradient-to-br from-black/50 to-black/20 text-wht w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded shadow-lg hover:bg-black/50 hover:-translate-y-2 transition-transform duration-300">
                <GrMysql className="fab fa-mysql text-2xl md:text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 justify-center hidden md:flex md:justify-end">
        <img
          src={image}
          alt="Ridmi Jayasekara"
          className="rounded-lg shadow-2xl shadow-neutral-700 w-10/12 md:w-8/12"
        />
      </div>
    </div>
  );
}
