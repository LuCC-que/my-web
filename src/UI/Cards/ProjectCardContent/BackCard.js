import classes from "./BackCard.module.css";

import gameCover from ".././img/game-cover.jpg";
const BackCard = (props) => {
  const { langauges } = props.project;
  return (
    <>
      <div className={classes.back}>
        <div className={classes["streaming-info"]}></div>
        <button className={classes.btn}>Check out in Github</button>
        <button className={classes.btn}>Run the demo</button>
        <div className={classes.langauges}>
          {langauges.map((langauge) => (
            <span>{langauge}</span>
          ))}
        </div>
      </div>
      <div className={classes.background}>
        <img src={gameCover} alt="" />
      </div>
      {/* <svg width="0" height="0" x="0px" y="0px" style={{ overflow: "hidden" }}>
        <defs style={{ overflow: "hidden" }}>
          <clipPath
            id="wave"
            clipPathUnits="objectBoundingBox"
            style={{ overflow: "hidden" }}
          >
            <path
              d="M1.5,0H1H0.5H0v0.8C0.3,0.8,0.3,1,0.5,1c0,0,0,0,0,0C0.8,1,0.8,0.8,1,0.8c0,0,0,0,0,0C1.3,0.8,1.3,1,1.5,1
	C1.8,1,1.8,0.8,2,0.8V0H1.5z"
            />
            <animateTransform
              attributeType="XML"
              attributeName="transform"
              type="translate"
              from="0 0"
              to="-200 0"
              begin="0s"
              dur="10s"
              repeatCount="indefinite"
              style={{ overflow: "hidden" }}
            />
          </clipPath>
        </defs>
      </svg> */}
    </>
  );
};

export default BackCard;

/**
 * 
 *  <div className="streamer">
            <div className="icon">
              <img src={streamer1} alt="" />
            </div>
            <p className="name">Gamer 2</p>
            <p className="number">35.1k</p>
          </div>
          <div className="streamer">
            <div className="icon">
              <img src={streamer1} alt="" />
            </div>
            <p className="name">Gamer 3</p>
            <p className="number">34.1k</p>
          </div>
 * 
 */
