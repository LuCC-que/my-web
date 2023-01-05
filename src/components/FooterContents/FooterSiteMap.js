import classes from "./FooterSiteMap.module.css";

const FooterItemsInfo = [
  { href: "#home", content: "Home" },
  { href: "#about", content: "About" },
  { href: "#skills", content: "Skills" },
  { href: "#projects", content: "Projects" },
];

const FooterSiteMap = () => {
  return (
    <div className={classes["footer-sitemap"]}>
      <ul className={classes.list}>
        {FooterItemsInfo.map((item, index) => {
          const { href, content } = item;
          return (
            <li className={classes.item} key={`${href}-${content}-${index}`}>
              <a href={href} className={classes.link}>
                {content}
              </a>
            </li>
          );
        })}
        {/* <li className="item">
          <a href="#services" className="link">
            Services
          </a>
        </li>
        <li className="item">
          <a href="#portfolio" className="link">
            Portfolio
          </a>
        </li>
        <li className="item">
          <a href="#contact" className="link">
            Contact me
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default FooterSiteMap;
