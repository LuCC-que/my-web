import classes from "./ProjectCard.module.css";

import FrontCard from "./ProjectCardContent/FrontCard";
import BackCard from "./ProjectCardContent/BackCard";
import { useState } from "react";
const ProjectCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { project } = props;

  return (
    <div
      className={classes.game}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`${classes.rank} ${isHovered && classes.hoverRank}`}>
        {project.mark}
      </div>
      <FrontCard isHovered={isHovered} project={project}></FrontCard>
      {isHovered && <BackCard project={project}></BackCard>}
    </div>
  );
};

export default ProjectCard;
