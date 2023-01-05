import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import { useState, useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
function App() {
  const [AboutDist, setAboutDist] = useState();
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  });
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  const AboutDistHandler = (dist) => {
    setAboutDist(dist);
  };
  return (
    <>
      <Header AboutDist={AboutDist} />
      <Home />
      <AboutMe AboutDistHandler={AboutDistHandler} />
      <Project />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
