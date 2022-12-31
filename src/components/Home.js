import classes from "./Home.module.css";
import HomeBackground from "./HomeContents/HomeBackground";
import HomeDescription from "./HomeContents/HomeDescription";
import ScrollDownButton from "../UI/Buttons/ScrollDownButton";
import Social from "./HomeContents/Social";
const Home = () => {
  return (
    <section id="home" className={`${classes.section} ${classes.home}`}>
      <div className={classes.container}>
        <Social />
        <HomeBackground />
        <HomeDescription />
        <ScrollDownButton />
      </div>
    </section>
  );
};

export default Home;
