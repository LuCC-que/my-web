import classes from "./FrontCard.module.css";

const FrontCard = (props) => {
  const isHovered = props.isHovered;
  const { title, subtitle, langauges, image } = props.project;
  // console.log(langauges);
  return (
    <div className={`${classes.front} ${isHovered && classes.hover}`}>
      <img className={classes.thumbnail} src={image} alt="" />
      <h3
        className={`${classes.name} ${classes.icon} ${
          isHovered && classes.hoverName
        }`}
      >
        {title}
      </h3>
      <div className={`${classes.stats} ${isHovered && classes.hoverStat}`}>
        <p className={`${classes.viewers} ${classes.icon}`}>{subtitle}</p>
        <div className={classes.streamers}>{langauges}</div>
      </div>
    </div>
  );
};

export default FrontCard;
