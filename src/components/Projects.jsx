import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectsData from "../assets/data/projectsData";
import { Box } from "@mui/material";

const Projects = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProject(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      id="projects"
      className="pb-16 px-4 sm:px-6 bg-gray-100 flex flex-col items-center"
    >
      <hr className="border border-black/40 border-gray-400 w-full mx-auto mb-12" />
      <div className="text-center mb-12 w-full">
        <p className="text-2xl text-pnk mt-2 leading-loose">Projects</p>
        <h2 className="text-4xl sm:text-6xl font-bold text-wht">My Work</h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 md:gap-20">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-zinc-900 px-4 py-6 md:px-8 md:py-8 shadow-2xl rounded-3xl overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-neutral-700 cursor-pointer relative"
            onClick={() => handleOpenModal(project)}
          >
            <img
              src={project.images[0]}
              alt={project.name}
              className="w-full h-32 md:h-64 object-cover rounded-lg group-hover:scale-105 transition-all duration-300"
            />
            <div className="pt-4 sm:pt-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-wht mb-2 group-hover:text-pink-600">
                {project.name}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base text-gray">
                {project.description}
              </p>
            </div>
            {/* <span class="material-symbols-outlined text-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 right-4 text-2xl">
              open_in_new
            </span> */}
          </div>
        ))}
      </div>

      {/* Modal for Project Details */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 1650,
            bgcolor: "white",
            color: "black",
            borderRadius: 3,
            boxShadow: 24,
            px: 6,
            py: 6,
            maxHeight: "90vh",
            overflowY: "auto",
            outline: "none",
            "@media (max-width: 768px)": { width: "90%", px: 3, py: 4 },
            "@media (max-width: 480px)": { width: "90%", px: 2, py: 3 },
          }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {selectedProject?.name}
          </h2>
          <div className="flex flex-col md:flex-row md:gap-10">
            <div className="md:w-1/2">
              <p className="text-sm md:text-base text-gray-700 mb-4">
                {selectedProject?.description}
              </p>

              {/* Tech Stack Section */}
              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  Tech Stack:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm md:text-base font-medium shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features Section */}
              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  Key Features:
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                  {selectedProject?.keyFeatures.map((feature, index) => (
                    <li key={index} className="text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Image Slider Section */}
            <div className="md:w-1/2 mb-6 rounded-lg">
              <Slider
                {...{
                  ...settings,
                  autoplay: true,
                  autoplaySpeed: 3000,
                  infinite: true,
                  arrows: false,
                }}
              >
                {selectedProject?.images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Project image ${index + 1}`}
                      className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          {/* GitHub Links Section */}
          {/* <div className="flex justify-between items-center mt-4">
            <a
              href={selectedProject?.githubFrontend}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blck flex items-center space-x-1 hover:text-black transition-all text-sm md:text-base"
            >
              <i className="fab fa-github"></i>
              <span>Frontend Code</span>
            </a>
            <a
              href={selectedProject?.githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blck flex items-center space-x-1 hover:text-blck transition-all text-sm md:text-base"
            >
              <i className="fab fa-github"></i>
              <span>Backend Code</span>
            </a>
          </div> */}
        </Box>
      </Modal>
    </div>
  );
};

export default Projects;
