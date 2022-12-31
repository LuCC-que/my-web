import classes from "./Skill.module.css";
import SkillCard from "../UI/Cards/SkillCard";

const Skills = [
  {
    description: { title: "Frontend developer", subtitle: "More than 1 years" },
    techs: [
      { name: "HTML/CSS", value: "90%" },
      { name: "JavaScript", value: "90%" },
      { name: "React", value: "70%" },
    ],
  },
];

const Skill = () => {
  return (
    <section id="skills" className={classes.section}>
      <div className={classes["section-title"]}>
        <h2 className={classes.title}>Skills</h2>
        <span className={classes.subtitle}>My technical level</span>
      </div>
      <div className={classes.container}>
        {Skills.map((skill) => (
          <SkillCard skill={skill} key={skill.description.title}></SkillCard>
        ))}
      </div>
    </section>
  );
};

export default Skill;

/**
 *  <div className="skill-accordion">
          <button className="skill-button">
            <svg
              className="icon"
              width="25"
              height="28"
              viewBox="0 0 25 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Backend icon</title>
              <path
                d="M7.5 6.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zM23.75 22.5h-7.725a3.75 3.75 0 0 0-2.275-2.275V17.5h5a3.75 3.75 0 0 0 3.75-3.75v-2.5a3.75 3.75 0 0 0-.975-2.5 3.75 3.75 0 0 0 .975-2.5v-2.5A3.75 3.75 0 0 0 18.75 0H6.25A3.75 3.75 0 0 0 2.5 3.75v2.5a3.75 3.75 0 0 0 .975 2.5 3.75 3.75 0 0 0-.975 2.5v2.5a3.75 3.75 0 0 0 3.75 3.75h5v2.725A3.75 3.75 0 0 0 8.975 22.5H1.25a1.25 1.25 0 0 0 0 2.5h7.725a3.75 3.75 0 0 0 7.05 0h7.725a1.25 1.25 0 0 0 0-2.5zM5 3.75A1.25 1.25 0 0 1 6.25 2.5h12.5A1.25 1.25 0 0 1 20 3.75v2.5a1.25 1.25 0 0 1-1.25 1.25H6.25A1.25 1.25 0 0 1 5 6.25v-2.5zM6.25 15A1.25 1.25 0 0 1 5 13.75v-2.5A1.25 1.25 0 0 1 6.25 10h12.5A1.25 1.25 0 0 1 20 11.25v2.5A1.25 1.25 0 0 1 18.75 15H6.25zm6.25 10a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm-5-13.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"
                fill="#000000"
              />
            </svg>
            <div className="label">
              <h3 className="title">Backend developer</h3>
              <span className="subtitle">More than 2 years</span>
            </div>
            <svg
              className="chevron"
              width="16"
              height="9"
              viewBox="0 0 16 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Chevron button icon</title>
              <path
                d="M.413 2.465 6.94 8.574c.141.135.31.242.495.315a1.595 1.595 0 0 0 1.17 0c.185-.073.353-.18.495-.315l6.45-6.11c.143-.133.256-.292.333-.468a1.376 1.376 0 0 0 0-1.108 1.438 1.438 0 0 0-.333-.469A1.566 1.566 0 0 0 14.477 0c-.401 0-.787.15-1.072.419l-5.385 5.1L2.634.42A1.596 1.596 0 0 0 .985.109a1.53 1.53 0 0 0-.496.31C.342.549.222.704.14.877a1.378 1.378 0 0 0 .274 1.588z"
                fill="#000000"
              />
            </svg>
          </button>
          <div className="skill-content">
            <ul className="skill-list">
              <li className="skill-item">
                <div className="skill-title">
                  <span className="name">NodeJS</span>
                  <span className="value">60%</span>
                </div>
                <div className="skill-bar -node"></div>
              </li>
              <li className="skill-item">
                <div className="skill-title">
                  <span className="name">PHP</span>
                  <span className="value">50%</span>
                </div>
                <div className="skill-bar -php"></div>
              </li>
              <li className="skill-item">
                <div className="skill-title">
                  <span className="name">MongoDB</span>
                  <span className="value">70%</span>
                </div>
                <div className="skill-bar -mongo"></div>
              </li>
              <li className="skill-item">
                <div className="skill-title">
                  <span className="name">Firebase</span>
                  <span className="value">50%</span>
                </div>
                <div className="skill-bar -firebase"></div>
              </li>
            </ul>
          </div>
        </div>
        <div className="skill-accordion">
          <button className="skill-button">
            <svg
              className="icon"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Designer icon</title>
              <path
                d="M6.25 17.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm15.075-5 1.538-1.537a3.75 3.75 0 0 0 0-5.3l-3.538-3.526a3.75 3.75 0 0 0-5.3 0L12.5 3.676A3.75 3.75 0 0 0 8.75 0h-5A3.75 3.75 0 0 0 0 3.75v17.5A3.75 3.75 0 0 0 3.75 25h17.5A3.75 3.75 0 0 0 25 21.25v-5a3.75 3.75 0 0 0-3.675-3.75zM10 21.25a1.25 1.25 0 0 1-1.25 1.25h-5a1.25 1.25 0 0 1-1.25-1.25V3.75A1.25 1.25 0 0 1 3.75 2.5h5A1.25 1.25 0 0 1 10 3.75v17.5zM12.5 7.2l3.3-3.3a1.25 1.25 0 0 1 1.762 0L21.1 7.5a1.25 1.25 0 0 1 0 1.762l-3.6 3.6-5 4.938V7.2zm10 14.05a1.25 1.25 0 0 1-1.25 1.25h-8.975a3.9 3.9 0 0 0 .213-1.15l6.35-6.35h2.412a1.25 1.25 0 0 1 1.25 1.25v5z"
                fill="#000000"
              />
            </svg>
            <div className="label">
              <h3 className="title">Designer</h3>
              <span className="subtitle">More than 5 years</span>
            </div>
            <svg
              className="chevron"
              width="16"
              height="9"
              viewBox="0 0 16 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Chevron button icon</title>
              <path
                d="M.413 2.465 6.94 8.574c.141.135.31.242.495.315a1.595 1.595 0 0 0 1.17 0c.185-.073.353-.18.495-.315l6.45-6.11c.143-.133.256-.292.333-.468a1.376 1.376 0 0 0 0-1.108 1.438 1.438 0 0 0-.333-.469A1.566 1.566 0 0 0 14.477 0c-.401 0-.787.15-1.072.419l-5.385 5.1L2.634.42A1.596 1.596 0 0 0 .985.109a1.53 1.53 0 0 0-.496.31C.342.549.222.704.14.877a1.378 1.378 0 0 0 .274 1.588z"
                fill="#000000"
              />
            </svg>
          </button>
          <div className="skill-content">
            <ul className="skill-list">
              <li className="skill-item">
                <div className="skill-title">
                  <span className="name">Photoshop</span>
                  <span className="value">80%</span>
                </div>
                <div className="skill-bar -photoshop"></div>
              </li>
              <li className="skill-item">
                <div className="skill-title">
                  <span className="name">Illustrator</span>
                  <span className="value">70%</span>
                </div>
                <div className="skill-bar -illustrator"></div>
              </li>
              <li className="skill-item">
                <div className="skill-title">
                  <span className="name">Figma</span>
                  <span className="value">80%</span>
                </div>
                <div className="skill-bar -figma"></div>
              </li>
              <li className="skill-item">
                <div className="skill-title">
                  <span className="name">Sketch</span>
                  <span className="value">55%</span>
                </div>
                <div className="skill-bar -sketch"></div>
              </li>
            </ul>
          </div>
        </div>
 * 
 * 
 */
