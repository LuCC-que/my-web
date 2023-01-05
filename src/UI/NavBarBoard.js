import NarBarItemCard from "./Cards/NarBarItemCard";
import classes from "./NavBarBoard.module.css";
const NavBarBoard = (props) => {
  const itemCards = props.NavBarItemsInfo.map((item) => {
    return <NarBarItemCard item={item} key={item.href}></NarBarItemCard>;
  });
  return <ul className={classes.list}>{itemCards}</ul>;
};

export default NavBarBoard;
