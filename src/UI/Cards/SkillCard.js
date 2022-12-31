import classes from "./SkillCard.module.css";
import SkillDropDown from "../Buttons/SkillDropDown";
import SkillListCard from "./SkillListCard";
import { useState } from "react";
const SkillCard = (props) => {
  const [dropDown, setDropDown] = useState(false);
  const { description, techs } = props.skill;
  // contentClass = {`${classes["skill-content"]}`}

  return (
    <div className={classes["skill-accordion"]}>
      <SkillDropDown
        description={description}
        dropDown={dropDown}
        setDropDown={setDropDown}
      />
      <div
        className={`${classes["skill-content"]} ${
          dropDown && classes["-active"]
        }`}
      >
        <ul className={classes["skill-list"]}>
          {techs.map((tech) => (
            <SkillListCard tech={tech} key={tech.name} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillCard;

//${classes["-active"]}
