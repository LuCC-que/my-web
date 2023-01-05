import ProjectCard from "./Cards/ProjectCard";
import classes from "./ProjectBoard.module.css";
const ProjectBoard = (props) => {
  const { projects } = props;
  return (
    <div className={classes.container}>
      {/* <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard> */}
      {projects.map((project) => (
        <ProjectCard project={project} key={project.title} />
      ))}
    </div>
  );
};

export default ProjectBoard;
