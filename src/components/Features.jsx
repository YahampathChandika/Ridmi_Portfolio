import React from "react";

// Mock Data
const features = [
  {
    id: 1,
    icon: "fas fa-code",
    title: "Frontend Development",
    description:
      "Creating responsive and dynamic web interfaces using modern technologies like HTML, CSS, and JavaScript frameworks.",
  },
  {
    id: 2,
    icon: "fas fa-server",
    title: "Backend Development",
    description:
      "Developing secure and efficient server-side applications with technologies like Node.js, PHP, and Python.",
  },
  {
    id: 3,
    icon: "fas fa-laptop-code",
    title: "Full Stack Applications",
    description:
      "Combining front-end and back-end expertise to build complete, end-to-end web solutions.",
  },
  {
    id: 4,
    icon: "fas fa-database",
    title: "Database Management",
    description:
      "Designing, optimizing, and managing databases using systems like MySQL, MongoDB, and PostgreSQL to ensure seamless data operations.",
  }
];

export default function Features() {
  return (
    <div id="features" className="py-16 px-4 sm:px-8 bg-gray-100">
      <hr className="border border-black/40 border-gray-400 w-full mx-auto mb-12" />
      <div className="text-center sm:text-left mb-12 w-full">
        <p className="text-2xl text-pnk mt-2 leading-loose">Features</p>
        <h2 className="text-4xl sm:text-6xl font-bold text-wht">What I Do</h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-16">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-gradient-to-br from-black/70 to-white/10 shadow-2xl text-wht/80 md:px-8 md:py-12 px-6 py-10 flex flex-col justify-around rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br hover:from-pnk hover:to-red-600 group cursor-pointer"
          >
            <i
              className={`${feature.icon} text-4xl text-pnk mb-4 group-hover:text-white transition-all duration-300`}
            ></i>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 group-hover:text-white transition-all duration-300">
              {feature.title}
            </h3>
            <p className="text-gray-600 group-hover:text-white transition-all duration-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
