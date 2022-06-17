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
              <a href="/">
                <SiUpwork />
              </a>
            </li>
            <li className={classes.icon}>
              <a href="/">
                <FiTwitter />
              </a>
            </li>
            <li className={classes.icon}>
              <a href="/">
                <FiGithub />
              </a>
            </li>
            <li className={classes.icon}>
              <a href="/">
                <FiLinkedin />
              </a>
            </li>
            <li className={classes.icon}>
              <a href="/">
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
