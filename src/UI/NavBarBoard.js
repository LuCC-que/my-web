import NavBarItemCard from "./Cards/NavBarItemCard";
import classes from "./NarBarBoard.module.css";
const NavBarBoard = (props) => {
  const itemCards = props.NavBarItemsInfo.map((item) => {
    return <NavBarItemCard item={item} key={item.href}></NavBarItemCard>;
  });
  return <ul className={classes.list}>{itemCards}</ul>;
};

export default NavBarBoard;
