import classes from "./Header.module.css";
import ThemeButton from "../UI/Buttons/ThemeButton";
import Logo from "./HeaderContents/Logo";
import OpenMenuButton from "../UI/Buttons/OpenMenuButton";
import NavBar from "./HeaderContents/NavBar";
import { useState, useEffect } from "react";
const Header = (props) => {
  // const ref = useRef();
  // const [scrollY, setscrollY] = useState(0);
  const [shouldDisp, setShouldDisp] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll percentage
      // console.log("refresh");
      // console.log(window.scrollY);
      // console.log(props.AboutDist);
      if (window.scrollY > 5) {
        setShouldDisp(true);
      } else {
        setShouldDisp(false);
      }

      if (window.scrollY > props.AboutDist * 0.8964) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };

    // const handleResize = () => {
    //   props.AboutDistHandler(ref.current.offsetTop);
    // };

    window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, [props.AboutDist]);
  return (
    <header
      id="theheader"
      className={`${classes.section} ${classes.header} ${
        shouldDisp && classes.displayIt
      } ${isTransparent && classes.transparent}`}
    >
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
