import React from "react";
import { useStyles } from "./Styles";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerWrapper}>
      <div className={classes.inner}>
        <a href="/" className={classes.up}>
          UP
        </a>
        <div className={classes.footerContainer}>
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

          <div className={classes.copyright}>
            © Copyright 2022 <span>Akib Rehbari</span>. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
