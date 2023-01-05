import classes from "./AboutMeCard.module.css";
const AboutMeCard = (props) => {
  const { quantity, text1, text2 } = props.description;
  return (
    <div className={classes["about-item"]}>
      <div className={classes["abt-text"]}>
        <p className={classes["large-text"]}>{quantity}</p>
        <p className={classes["small-text"]}>
          {text1} <br /> {text2}
        </p>
      </div>
    </div>
  );
};

export default AboutMeCard;
