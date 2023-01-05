import classes from "./AboutMeTitle.module.css";

const AboutMeTitle = () => {
  return (
    <div className={classes["section-title"]}>
      <h2 className={classes.title}>Things About me</h2>
      <span className={classes.subtitle}>
        A Summary of My Experiences and Qualifications
      </span>
    </div>
  );
};

export default AboutMeTitle;
