import classes from "./AboutMeSkill.module.css";
import AboutMeSkillCard from "../../UI/Cards/AboutMeSkillCard";
import { useLayoutEffect, useRef, useState } from "react";
const AboutMeSkill = (props) => {
  const titleRef = useRef();
  const [distToAS, setDistToAS] = useState();
  const [showBars, setShowBars] = useState(false);
  // console.log(`initial ${}`)
  useLayoutEffect(() => {
    const DistToAsHandler = () => {
      setDistToAS(titleRef.current.offsetTop);
      // console.log(`Distance from top: ${titleRef.current.offsetTop} pixels`);
    };
    const setBarsHandler = () => {
      // console.log(`${window.scrollY} - ${distToAS} - ${distToAS * 1.5}`);
      if (window.scrollY > distToAS * 1.34) {
        setShowBars(true);
      }
    };
    DistToAsHandler();
    setBarsHandler();
    window.addEventListener("resize", DistToAsHandler);
    window.addEventListener("scroll", setBarsHandler);
    return () => {
      window.removeEventListener("resize", DistToAsHandler);
      window.removeEventListener("scroll", setBarsHandler);
    };
  }, [distToAS]);

  return (
    <div id="skills" className={classes["about-stats"]}>
      <h4 ref={titleRef} className={classes["stat-title"]}>
        My Skills
      </h4>
      <div className={classes["progress-bars"]}>
        {props.SkillArray.map((skill) => {
          const { skillName, progress } = skill;
          return (
            <AboutMeSkillCard
              skillName={skillName}
              progress={showBars ? progress : "0%"}
              key={skillName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutMeSkill;
