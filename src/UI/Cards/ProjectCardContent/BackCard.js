import classes from "./BackCard.module.css";

const BackCard = (props) => {
  const { langauges, image, href } = props.project;
  return (
    <>
      <div className={classes.back}>
        <div className={classes["streaming-info"]}></div>
        <a href={href}>
          <button className={classes.btn}>Check out in Github</button>
        </a>

        <button className={classes.btn}>Demo Not Availble</button>
        <div className={classes.langauges}>
          {langauges.map((langauge, index) => (
            <span key={`l-${index}`}>{langauge}</span>
          ))}
        </div>
      </div>
      <div className={classes.background}>
        <img src={image} alt="" />
      </div>
    </>
  );
};

export default BackCard;
