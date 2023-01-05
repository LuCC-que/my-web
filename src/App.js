import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import { useState } from "react";
function App() {
  const [AboutDist, setAboutDist] = useState();
  const AboutDistHandler = (dist) => {
    setAboutDist(dist);
  };
  return (
    <>
      <Header AboutDist={AboutDist} />
      <Home />
      {/* <About />
      <Skill /> */}
      <AboutMe AboutDistHandler={AboutDistHandler} />
      <Project />

      {/* <Contact /> */}
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
