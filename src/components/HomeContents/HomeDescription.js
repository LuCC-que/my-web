import classes from "./HomeDescription.module.css";
const HomeDescription = () => {
  return (
    <div className={classes["home-content"]}>
      <h1 className={classes["home-title"]}>
        Hi, <br></br>I'm Lu Chen
      </h1>
      <span className={classes.subtitle}>I am a Coder</span>
      <p className={classes.text}>
        As a coder, I am always looking for new challenges to tackle
        <br></br>
        and enjoy the process of problem-solving through coding.
      </p>
      <a href="#contact" className={classes.calltoaction}>
        Contact Me
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <title>Contact me</title>
          <path d="M14.67 5.853 3.472.251A2.4 2.4 0 0 0 .207 3.372l1.92 4.298a.849.849 0 0 1 0 .656l-1.92 4.297A2.402 2.402 0 0 0 2.4 16a2.51 2.51 0 0 0 1.08-.256l11.2-5.602a2.4 2.4 0 0 0 0-4.289h-.008zM13.96 8.71l-11.2 5.601a.8.8 0 0 1-1.08-1.04l1.912-4.297c.025-.057.046-.116.064-.176h5.512a.8.8 0 0 0 0-1.6H3.655a1.6 1.6 0 0 0-.064-.177L1.68 2.724a.8.8 0 0 1 1.08-1.04l11.2 5.601a.8.8 0 0 1 0 1.425z" />
        </svg>
      </a>
    </div>
  );
};

export default HomeDescription;
