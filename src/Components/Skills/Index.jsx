import React from "react";
import { useStyles } from "./Styles";
import { ProfessionalSkills, TechnicalSkills } from "./Data";
import skills from "../../Assets/Images/skills.png";
import { Progress } from "./Unit";
const Skills = () => {
  const classes = useStyles();
  return (
    <div className={classes.skillsContaienr}>
      <div className={classes.heading}>
        <img src={skills} alt="" />
        <h2>Skills</h2>
        <hr className={classes.hr1} />
        <hr className={classes.hr2} />
      </div>
      <div className={classes.progressBars}>
        <div className={classes.containerBg}>
          <Progress data={ProfessionalSkills} title="Professional Skills" />
        </div>
        <div className={classes.containerBg}>
          <Progress data={TechnicalSkills} title="Technical Skills" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
