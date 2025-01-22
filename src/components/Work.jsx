import React from "react";

const experiences = [
  {
    id: 1,
    title: "Associate Software Engineer",
    company: "Hayleys Fentons",
    duration: "Aug 2023 - Present",
    description: [
      "Proficient in designing and developing user interfaces for web applications using HTML, CSS, and modern front-end frameworks to ensure responsive and visually appealing designs.",
      "Skilled in back-end development using PHP and JavaScript, integrating server-side logic with databases to create robust and scalable web applications.",
      "Experienced in end-to-end development processes, including requirement analysis, coding, testing, and deployment, ensuring seamless functionality and user experience.",
      "Adept at collaborating with cross-functional teams to deliver innovative and efficient web solutions.",
    ],
  },
  {
    id: 2,
    title: "Intern - Software Engineer",
    company: "Hayleys Fentons",
    duration: "Apr 2023 - Oct 2023",
    description: [
      "Assisted in designing and developing user interfaces for web applications using HTML, CSS, and modern front-end frameworks to ensure responsive and visually appealing designs.",
      "Contributed to back-end development using PHP and JavaScript, integrating server-side logic with databases to create functional web applications.",
      "Gained experience in various stages of the development process, including requirement analysis, coding, testing, and deployment, ensuring basic functionality and user experience.",
      "Collaborated with cross-functional teams, learning best practices in delivering web solutions and improving development efficiency.",
    ],
  },
  {
    id: 3,
    title: "Intern - Power Electronics Engineer",
    company: "Vega Innovations, Trace Expert City, Maradana",
    duration: "Apr 2022 - Aug 2022",
    description: [
      "Designed and implemented a step-down converter, performing detailed calculations, drawing schematic diagrams, and creating a PCB design.",
      "Strategically placed and routed power paths and signal paths for optimized circuit functionality.",
      "Applied practical knowledge of component selection, layout optimization, and manufacturing considerations for effective PCB design. ",
      "Adept at collaborating with cross-functional teams to deliver innovative and efficient web solutions.",
      "Conducted in-depth research on Vehicle-to-Grid (V2G) technology, exploring its principles, applications, and potential impact on energy systems.",
      "Analyzed and studied delta-sigma modulation techniques for advanced signal processing and their applications in electronic systems. ",
      "Prepared comprehensive documentation and gained a solid understanding of these innovative technologies.",
    ],
  },
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
            <div className="bg-zinc-900 hover:bg-pnk p-5 md:p-8 rounded-lg shadow-2xl transition-all duration-300 group-hover:text-white">
              <h3 className="text-xl sm:text-2xl font-semibold text-wht transition-all duration-300 group-hover:text-white">
                {exp.title}
              </h3>
              <p className="text-lg text-pnk font-medium transition-all duration-300 group-hover:text-white">
                {exp.company}
              </p>
              <span className="text-gray text-sm transition-all duration-300 group-hover:text-white">
                {exp.duration}
              </span>
              <ul className="list-disc list-outside text-gray ml-4 mt-4 transition-all duration-300 group-hover:text-white">
                {exp.description.map((desc, index) => (
                  <li className="mb-2" key={index}>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
