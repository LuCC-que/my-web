import classes from "./AboutMeSkillCard.module.css";
const AboutMeSkillCard = (props) => {
  const { skillName, progress } = props;
  return (
    <div className={classes["progress-bar"]}>
      <p className={classes["prog-title"]}>{skillName}</p>
      <div className={classes["progress-con"]}>
        <p className={classes["prog-text"]}>{progress}</p>
        <div className={classes["progress"]}>
          <span style={{ width: `${progress}` }}></span>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSkillCard;
