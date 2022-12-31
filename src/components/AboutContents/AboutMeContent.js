import DownloadButton from "../../UI/Buttons/DownloadButton";
import AboutMeCard from "../../UI/Cards/AboutMeCard";
import classes from "./AboutMeContent.module.css";

const ExperienceArray = [
  { quantity: "08+", text: "Years experience" },
  { quantity: "20+", text: "Completed projects" },
  { quantity: "05+", text: "Companies worked" },
];

const AboutMeContent = () => {
  //make an array here
  const AboutMeCards = ExperienceArray.map((EA) => {
    return <AboutMeCard description={EA} key={EA.text} />;
  });
  return (
    <div className={classes["about-content"]}>
      <p className={classes.description}>
        Web developer, with extensive knowledge and years of experience, working
        in web technologies and UI / UX design, delivering quality work.
      </p>
      <ul className={classes["about-numbers"]}>{AboutMeCards}</ul>
      <DownloadButton />
    </div>
  );
};

export default AboutMeContent;
