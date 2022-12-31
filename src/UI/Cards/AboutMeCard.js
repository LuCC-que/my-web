import classes from "./AboutMeCard.module.css";
const AboutMeCard = (props) => {
  const { quantity, text } = props.description;
  return (
    <li className={classes.item}>
      <p className={classes.value}>{quantity}</p>
      <p className={classes.text}>{text}</p>
    </li>
  );
};

export default AboutMeCard;
/* <li className="item">
        <p className="value">20+</p>
        <p className="text">Completed projects</p>
      </li>
      <li className="item">
        <p className="value">05+</p>
        <p className="text">Companies worked</p>
      </li> */
