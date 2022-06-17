import React from "react";
import skills from "./../../Assets/Images/resume.png";
import { useStyles } from "./Styles";
import { education, work } from "./Data";
import { ResumeDetails1 } from "./unit";

const Resume = () => {
  const classes = useStyles();
  return (
    <div className={classes.resumeContainer}>
      <div className={classes.heading}>
        <img src={skills} alt="" />
        <h2>Resume</h2>
        <hr className={classes.hr1} />
        <hr className={classes.hr2} />
      </div>
      <div className={classes.row}>
        <div className={classes.col1}>
          <ResumeDetails1 data={education} titles="Education" right />
        </div>
        <div className={classes.col2}>
          <ResumeDetails1 data={work} titles="Work" />
        </div>
      </div>
    </div>
  );
};

export default Resume;
