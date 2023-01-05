import classes from "./NavBar.module.css";
import NavBarBoard from "../../UI/NavBarBoard";
import CloseMenuButton from "../../UI/Buttons/CloseMenuButton";

const NavBarItemsInfo = [
  { href: "#home", content: "Home" },
  { href: "#about", content: "About" },
  { href: "#skills", content: "Skills" },
  { href: "#projects", content: "Projects" },
  { href: "#contact", content: "Contact me" },
];

const NavBar = () => {
  return (
    <nav className={classes["main-nav"]}>
      <NavBarBoard NavBarItemsInfo={NavBarItemsInfo} />
      <CloseMenuButton />
    </nav>
  );
};

export default NavBar;
