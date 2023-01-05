import classes from "./AboutMe.module.css";
import AboutMeTitle from "./AboutMeContents/AboutMeTitle";
import AboutMeInfo from "./AboutMeContents/AboutMeInfo";
import AboutMeSkill from "./AboutMeContents/AboutMeSkill";
import { useEffect, useRef } from "react";
const ExperienceArray = [
  { quantity: "01", text1: "Internship", text2: "Experience" },
  { quantity: "10+", text1: "Completed", text2: "projects" },
  { quantity: "05+", text1: "Companies", text2: "worked" },
];

const SkillArray = [
  { skillName: "Python/Flask", progress: "70%" },
  { skillName: "C/C++/CMake", progress: "65%" },
  { skillName: "RUST", progress: "32%" },
  { skillName: "GO", progress: "40%" },
  { skillName: "Docker/K8s", progress: "60%" },
  { skillName: "Git/GitHub/GitLab", progress: "80%" },
  { skillName: "HTML/CSS/JS/React", progress: "70%" },
];

const AboutMe = (props) => {
  const sectionRef = useRef();
  useEffect(() => {
    const handleResize = () => {
      //for every resize it will reset the current offset to the top
      props.AboutDistHandler(sectionRef.current.offsetTop);

      // console.log(`Distance from top: ${sectionRef.current.offsetTop} pixels`);
      // console.log(`the current Y is ${window.scrollY}`);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    // return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <section ref={sectionRef} className={`${classes.section}`} id="about">
      <div className={classes.container}>
        <AboutMeTitle />
        <AboutMeInfo ExperienceArray={ExperienceArray} />
        <AboutMeSkill SkillArray={SkillArray} />
      </div>
    </section>
  );
};

export default AboutMe;
