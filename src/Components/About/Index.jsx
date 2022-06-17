import React from "react";
import { useStyles } from "./Styles";
import about from "./../../Assets/Images/about.png";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { card } from "./Data";
import { Cards } from "./Unit";
const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.aboutContainer}>
      <div className={classes.heading}>
        <img src={about} alt="" />
        <h2>About Me</h2>
        <hr className={classes.hr1} />
        <hr className={classes.hr2} />
      </div>
      <div className={classes.para}>
        <p>
          <span>Hello! I'm Akib.</span> Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Maecenas quis ornare purus. Morbi luctus tortor nunc,
          vitae posuere nibh malesuada sed. In nec tortor eu nibh tristique
          vehicula sed in lectus. Phasellus vitae accumsan tortor. Fusce ac
          vestibulum ante
        </p>
      </div>
      <div className={classes.lower}>
        <div className={classes.personalDetails}>
          <h3>Personal Details</h3>
          <div className={classes.innerDetails}>
            <ul>
              <li>
                <strong>Birthdate</strong> 19-12-2002
              </li>
              <li>
                <strong>Phone</strong> +92 3468333522
              </li>
              <li>
                <strong>Email</strong> aqibjaveed508@gmail.com
              </li>
              <li>
                <strong>Github</strong> AqibJav3d
              </li>
              <li>
                <strong>Adress</strong> House 27, st 9, Sadiqabad Rwp
              </li>

              <li>
                <strong>Job Status</strong> <span>Freelance</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.myInterests}>
          <h3>My Interests</h3>
          <div className={classes.innerDetails}>
            <Cards data={card} />
          </div>
        </div>
      </div>

      {/* <button className={classes.cvBtn}>Download CV</button> */}
    </div>
  );
};

export default About;
