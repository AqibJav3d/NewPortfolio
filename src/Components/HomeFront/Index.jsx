import React from "react";
import { useStyles } from "./Styles";
import BannerImg from "../../Assets/Images/home.jpg";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";
const HomeFront = () => {
  const classes = useStyles();
  return (
    <div className={classes.HomeContainer}>
      <div className={classes.profileCard}>
        <img src={BannerImg} alt="" className={classes.img} />

        <div className={classes.banner}>
          <h1>AKIB REHBARI</h1>
          <h2>Software Engineer</h2>
          <div className={classes.social}>
            <ul className={classes.icons}>
              <li className={classes.icon}>
                <a href="https://www.upwork.com/freelancers/~01b651a4cc234f97f8?viewMode=1  ">
                  <SiUpwork />
                </a>
              </li>
              <li className={classes.icon}>
                <a href="https://twitter.com/akib_rehbari">
                  <FiTwitter />
                </a>
              </li>
              <li className={classes.icon}>
                <a href="https://github.com/AqibJav3d">
                  <FiGithub />
                </a>
              </li>
              <li className={classes.icon}>
                <a href="https://www.linkedin.com/in/aqib-javeed-41a592207/">
                  <FiLinkedin />
                </a>
              </li>
              <li className={classes.icon}>
                <a href="https://www.instagram.com/akib.rehbari/">
                  <FiInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFront;
