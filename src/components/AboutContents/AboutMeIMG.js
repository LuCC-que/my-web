import classes from "./AboutMeIMG.module.css";
const AboutMeImg = () => {
  return (
    <div className={classes["about-photo"]}>
      <picture>
        <source type="image/webp" srcSet="./assets/img/about.webp" />
        <source type="image/jpg" srcSet="./assets/img/about.jpg" />
        <img
          src="./assets/img/about.jpg"
          alt="photo Alexa"
          width="197"
          height="155"
        />
      </picture>
    </div>
  );
};

export default AboutMeImg;
