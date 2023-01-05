import classes from "./Project.module.css";
import ProjectBoard from "../UI/ProjectBoard";
import project from "../img/project1.jpg";

import {
  SiGo,
  SiCplusplus,
  SiCmake,
  SiPython,
  SiFlask,
  SiDocker,
} from "react-icons/si";

const ProjectsArray = [
  [
    {
      title: "Crypto File Sharing",
      subtitle: "Cryptography",
      langauges: [<SiGo size={30} key={`SiGo-${1}`} />],
      mark: 1,
      image: project,
      href: "https://github.com/LuCC-que/end-to-end-enc-sys-in-go",
    },
    {
      title: "Virtual Machine",
      subtitle: "C++",
      langauges: [
        <SiCplusplus size={20} key={`SiCplusplus-${1}`} />,
        <SiCmake size={20} key={`SiCmake-${1}`} />,
      ],
      mark: 2,
      image: project,
      href: "https://github.com/LuCC-que/hoover-vm",
    },
    {
      title: "Interpreter",
      subtitle: "Yang",
      langauges: [
        <SiPython size={20} key={`SiPython-${1}`} />,
        <SiFlask size={20} key={`SiFlask-${1}`} />,
        <SiDocker size={20} key={`SiDocker-${1}`} />,
      ],
      mark: 3,
      image: project,
      href: "https://github.com/LuCC-que/hoover-vm",
    },
  ],
];
let count = 0;
const Project = () => {
  return (
    <section id="projects" className="section">
      <div className={classes["section-title"]}>
        <h2 className={classes.title}>Things I've Built</h2>
        <span className={classes.subtitle}>Some of my recent Projects</span>
      </div>

      {ProjectsArray.map((projects) => (
        <ProjectBoard projects={projects} key={`project-row-${count++}`} />
      ))}
    </section>
  );
};

export default Project;
