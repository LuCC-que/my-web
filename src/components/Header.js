import classes from "./Header.module.css";
import ThemeButton from "../UI/Buttons/ThemeButton";
import Logo from "./HeaderContents/Logo";
import OpenMenuButton from "../UI/Buttons/OpenMenuButton";
import NavBar from "./HeaderContents/NavBar";
const Header = () => {
  return (
    <header className={`${classes.section} ${classes.header}`}>
      <div className={classes.container}>
        <Logo />
        <ThemeButton />
        <OpenMenuButton />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
