import classes from "./Footer.module.css";
import FooterSiteMap from "./FooterContents/FooterSiteMap";
import FooterSocial from "./FooterContents/FooterSocial";

const Footer = () => {
  return (
    <footer className={`${classes.section} ${classes.footer}`}>
      <div className={classes.container}>
        <div className={classes["section-title"]}>
          <h2 className={classes.title}>Lu Chen</h2>
          <span className={classes.subtitle}>Coder</span>
        </div>
        <FooterSiteMap />
        <FooterSocial />
      </div>
    </footer>
  );
};

export default Footer;
