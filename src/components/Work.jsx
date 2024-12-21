import React from "react";

const experiences = [
  {
    id: 1,
    title: "Associate Software Engineer",
    company: "Hayleys Fentons",
    duration: "Aug 2023 - Present",
    description:
      "Developed user interfaces for web applications using html and css and backend using php and JavaScript.",
  },
  {
    id: 2,
    title: "Intern - Power Electronics Engineer",
    company: "Vega Innovations, Trace Expert City, Maradana",
    duration: "Apr 2022 - Aug 2022",
    description:
      "Made a step down converter doing calculations, drawing schematic diagram and the pcb design of the circuit with suitable placements and routing the power path and signal path.\nResearched about V2G technology and delta sigma modulation.",
  }
  
];

export default function Work() {
  return (
    <div
      id="work"
      className="pb-16 px-4 sm:px-8 bg-gray-100 flex flex-col items-center"
    >
      {/* Section Title */}
      <hr className="border border-black/40 border-gray-400 w-full mx-auto mb-12" />
      <div className="text-center sm:text-left mb-12 w-full max-w-screen-lg">
        <p className="text-2xl text-pnk mt-2 leading-loose">Career</p>
        <h2 className="text-4xl sm:text-6xl font-bold text-wht">
          Work Experience
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-pnk w-full max-w-screen-lg">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="mb-6 sm:mb-10 ml-6 group transition-all duration-300 cursor-pointer"
          >
            {/* Timeline Marker */}
            <div className="absolute w-4 h-4 bg-pnk rounded-full -left-2.5 border-2 border-wht"></div>
            {/* Content */}
            <div className="bg-zinc-900 hover:bg-pnk p-6 rounded-lg shadow-2xl transition-all duration-300 group-hover:text-white">
              <h3 className="text-xl sm:text-2xl font-semibold text-wht transition-all duration-300 group-hover:text-white">
                {exp.title}
              </h3>
              <p className="text-lg text-pnk font-medium transition-all duration-300 group-hover:text-white">
                {exp.company}
              </p>
              <span className="text-gray text-sm transition-all duration-300 group-hover:text-white">
                {exp.duration}
              </span>
              <p className="text-gray mt-4 transition-all duration-300 group-hover:text-white">
                {exp.description}
              </p>  
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
