import React from "react";
import {
  FaWifi,
  FaRobot,
  FaServer,
  FaCloud,
  FaBrain,
  FaMicrochip,
  FaNetworkWired,
} from "react-icons/fa";

// Define the data array
const researchData = [
  {
    title: "Networking and Communication Systems",
    icon: <FaNetworkWired className="text-4xl mb-2 text-blue-500" />,
    description:
      "Exploring efficient communication protocols and network design for high-speed, reliable data transmission.",
  },
  {
    title: "Machine Learning and Deep Learning",
    icon: <FaRobot className="text-4xl mb-2 text-green-500" />,
    description:
      "Applying machine learning algorithms to automate processes and gain insights from large datasets.",
  },
  {
    title: "Advanced Computing Architectures",
    icon: <FaMicrochip className="text-4xl mb-2 text-orange-500" />,
    description:
      "Designing and optimizing high-performance computing systems for complex computations.",
  },
  {
    title: "Internet of Things (IoT) Applications",
    icon: <FaCloud className="text-4xl mb-2 text-indigo-500" />,
    description:
      "Developing interconnected systems for smart homes, cities, and industries using IoT devices.",
  },
  {
    title: "Intelligent Control Systems",
    icon: <FaBrain className="text-4xl mb-2 text-purple-500" />,
    description:
      "Creating autonomous systems that can adapt and make decisions in real-time environments.",
  },
  {
    title: "Artificial Intelligence",
    icon: <FaBrain className="text-4xl mb-2 text-red-500" />,
    description:
      "Investigating AI techniques to enhance machine learning, robotics, and natural language processing.",
  },
];

function ResearchInterests() {
  return (
    <div className="pb-16 px-4 sm:px-8 bg-gray-100 flex flex-col items-center">
      <hr className="border border-black/40 border-gray-400 w-full mx-auto mb-12" />
      <div className="text-center sm:text-left mb-12 w-full max-w-screen-lg">
        <p className="text-2xl text-pnk mt-2 leading-loose"> Areas of Focus</p>
        <h2 className="text-4xl sm:text-6xl font-bold text-wht">
          Research Interests
        </h2>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {researchData.map((research, index) => (
          <div
            key={index}
            className="bg-zinc-900 hover:bg-pnk p-5 md:p-8 rounded-lg shadow-2xl text-wht/80 transition-all duration-300 group cursor-pointer"
          >
            {research.icon}
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 group-hover:text-white transition-all duration-300">
              {research.title}
            </h3>
            <p className="text-gray-600 group-hover:text-white transition-all duration-300">
              {research.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResearchInterests;
