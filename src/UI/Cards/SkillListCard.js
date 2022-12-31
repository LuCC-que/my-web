import classes from "./SkillListCard.module.css";
const SkillListCard = (props) => {
  const { name, value } = props.tech;
  return (
    <li className={classes["skill-item"]}>
      <div className={classes["skill-title"]}>
        <span className={classes.name}>{name}</span>
        <span className={classes.value}>{value}</span>
      </div>
      <div className={`${classes["skill-bar"]} ${classes["-htmlcss"]}`}></div>
    </li>
  );
};

export default SkillListCard;

/*
      <li className="skill-item">
        <div className="skill-title">
          <span className="name">Javascript</span>
          <span className="value">60%</span>
        </div>
        <div className="skill-bar -js"></div>
      </li>
      <li className="skill-item">
        <div className="skill-title">
          <span className="name">React</span>
          <span className="value">70%</span>
        </div>
        <div className="skill-bar -react"></div>
      </li>
      <li className="skill-item">
        <div className="skill-title">
          <span className="name">GatsbyJS</span>
          <span className="value">75%</span>
        </div>
        <div className="skill-bar -gatsby"></div>
      </li>

*/
