import classes from "./SocialBoard.module.css";
import SocialCard from "./Cards/SocialCard";
const SocialBoard = () => {
  return (
    <ul className={classes["social"]}>
      <SocialCard></SocialCard>
    </ul>
  );
};

export default SocialBoard;
//{classes["home-social"]}
