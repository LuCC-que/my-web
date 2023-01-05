import classes from "./FooterSocial.module.css";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
const SocialWays = [
  {
    icon: <AiFillLinkedin size={30} />,
    href: "https://www.linkedin.com/in/lu-chen-47a16a207/",
  },
  { icon: <FaGithubSquare size={30} />, href: "https://github.com/LuCC-que" },
];

const FooterSocial = () => {
  return (
    <div className={classes["footer-social"]}>
      <ul className={classes.social}>
        {SocialWays.map((SocialWay) => {
          const { icon, href } = SocialWay;
          return (
            <li className={classes.item} key={href}>
              <a href={href} className={classes.link}>
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterSocial;
