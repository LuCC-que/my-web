import classes from "./ContactInfo.module.css";
import { SiGmail } from "react-icons/si";
import { BsFillPhoneFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
const ContactInfo = () => {
  return (
    <div className={classes.contactInfo}>
      <div>
        <h2>Contact Info</h2>
        <ul className={classes.info}>
          <li>
            <span>
              <SiGmail size={25} color={"white"} />
            </span>
            {/* <!-- <span>nassosanagn@gmail.com</span> --> */}
            <span>
              <a href="mailto: nassosanagn@gmail.com">
                chen1968493689@gmail.com
              </a>
            </span>
          </li>
          <li>
            <span>
              <BsFillPhoneFill size={25} color={"white"} />
            </span>
            <span>647-7868895</span>
          </li>
        </ul>
      </div>
      <ul className={classes.sci}>
        <li>
          <a href="https://www.facebook.com/nassosanagn/">{/* svg */}</a>
        </li>
        <li>
          <a href="https://www.instagram.com/nassosanagn_/?hl=el">
            {/* svg */}
          </a>
        </li>
        <li>
          <a href="https://github.com/LuCC-que">
            <FaGithubSquare size={25} color={"white"}></FaGithubSquare>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/lu-chen-47a16a207/">
            <AiFillLinkedin size={25} color={"white"} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
