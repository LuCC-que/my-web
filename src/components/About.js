import classes from "./About.module.css";
import AboutMeContent from "./AboutContents/AboutMeContent";
import AboutMeImg from "./AboutContents/AboutMeIMG";
const About = () => {
  return (
    <section id="about" className={`${classes.section} ${classes.about}`}>
      <div className={classes["section-title"]}>
        <h2 className={classes.title}>About Me</h2>
        <span className={classes.subtitle}>My Introducion</span>
      </div>
      <div className={classes.container}>
        <AboutMeImg />
        <AboutMeContent />
      </div>
    </section>
  );
};

export default About;
