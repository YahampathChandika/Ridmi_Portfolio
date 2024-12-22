import React, { useState, useEffect } from "react";
import image from "../assets/images/pp.png";
export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state
  const menuItems = ["Home", "Features", "Projects", "Work", "Contact"];

  const handleScroll = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Detect which section is currently in view
  const handleActiveSectionChange = () => {
    const sections = menuItems.map((item) =>
      document.getElementById(item.toLowerCase())
    );
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        setActiveItem(section.id.charAt(0).toUpperCase() + section.id.slice(1));
      }
    });
  };

  // Track scroll position for navbar effects
  const handleNavbarScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleActiveSectionChange);
    window.addEventListener("scroll", handleNavbarScroll);
    return () => {
      window.removeEventListener("scroll", handleActiveSectionChange);
      window.removeEventListener("scroll", handleNavbarScroll);
    };
  }, []);

  const handleResumeClick = () => {
    window.open("https://drive.google.com/your-resume-link", "_blank");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 text-[#89919C] px-4 md:px-20 py-1 md:py-8 transition-all duration-300 ${
        isScrolled
          ? "bg-[#212428]/90 backdrop-blur-md shadow-md"
          : "bg-[#212428]"
      }`}
    >
      <div className="flex items-center justify-between ">
        <div className="flex items-center space-x-3">
          <img
            // src="https://i.pinimg.com/736x/99/8f/41/998f41fc4c63e69c06b99a6e03629815.jpg"
            src={image}
            className="rounded-full h-12 w-12 md:h-14 md:w-14"
            alt="pp"
          />
          <div className="text-lg text-wht md:text-2xl font-semibold">
            Ridmi
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl focus:outline-none transition duration-300 ease-in-out"
          >
            <span
              className={`material-symbols-outlined text-pnk font-semibold transform transition-transform duration-300 ${
                isMenuOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              {isMenuOpen ? "close" : "density_medium"}
            </span>
          </button>
        </div>

        {/* Menu items for larger screens */}
        <ul className="hidden md:flex space-x-12 text-lg">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer ${
                activeItem === item ? "text-pnk" : "hover:text-pnk"
              }`}
              onClick={() => {
                setActiveItem(item);
                handleScroll(item.toLowerCase());
              }}
            >
              {item}
            </li>
          ))}
          <li
            className="cursor-pointer text-pnk font-semibold hover:text-red-500 flex items-center"
            onClick={handleResumeClick}
          >
            Resume{" "}
            <span className="material-symbols-outlined font-semibold ml-2">
              open_in_new
            </span>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center transform transition-transform duration-500 ease-in-out ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <ul className="text-white text-2xl space-y-6 list-none text-center">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer ${
                activeItem === item
                  ? "text-pnk"
                  : "hover:text-pnk transition-colors"
              }`}
              onClick={() => {
                setActiveItem(item);
                setIsMenuOpen(false); // Close the menu after selection
                handleScroll(item.toLowerCase());
              }}
            >
              {item}
            </li>
          ))}
          <li
            className="cursor-pointer text-pnk font-semibold hover:text-red-500 flex items-center"
            onClick={handleResumeClick}
          >
            Resume
            <span className="material-symbols-outlined font-semibold ml-2">
              open_in_new
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
