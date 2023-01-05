import classes from "./AboutMeInfo.module.css";
import AboutMeCard from "../../UI/Cards/AboutMeCard";
import DownloadButton from "../../UI/Buttons/DownloadButton";
const AboutMeInfo = (props) => {
  return (
    <div className={classes["about-container"]}>
      <div className={classes["left-about"]}>
        <h4>Information About me</h4>
        <p>
          I am a fourth-year computer science student with a focus on security
          at Queens's University. During my time at school, I developed a
          translating tool that converts UML class diagrams into Yang language
          as part of a research internship. This tool will be integrated into
          the Telus devOS pipeline, demonstrating my ability to develop
          practical solutions for real-world problems. <br /> <br /> In my free
          time, I have built several personal projects, including a
          re-implementation of TCP/IP, a virtual machine, an interpreter, and a
          mini database system. These projects showcase my ability to
          independently learn and apply new concepts, as well as my
          problem-solving skills. I have also taken courses in
          front-end/back-end development and am familiar with tools like React,
          Bootstrap, Flask, Node.js, Nginx, Docker, and microservices. With this
          diverse set of skills and experiences, I am confident that I can make
          a positive impact as a member of your team.
        </p>
        <DownloadButton />
      </div>

      <div className={classes["right-about"]}>
        {props.ExperienceArray.map((Exp) => (
          <AboutMeCard description={Exp} key={Exp.text1} />
        ))}
      </div>
    </div>
  );
};

export default AboutMeInfo;
