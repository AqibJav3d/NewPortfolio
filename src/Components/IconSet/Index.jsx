import React from "react";
import { Icon, makeStyles } from "@material-ui/core";

const Unit = ({ icon, link }) => {
  const classes = useStyles();
  <li className={classes.icon}>
    <a href={link}>
      <icon>{icon}</icon>
    </a>
  </li>;
};

const Social = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.social}>
      <ul className={classes.icons}>
        {data.map(({ item, i }) => (
          <Unit key={i} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default Social;

const useStyles = makeStyles((theme) => ({
  icons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginRight: "-15px",
    marginLeft: "-15px",
  },
  icon: {
    margin: "0 5px",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    fontSize: "22px",
    height: "42px",
    width: "42px",
    border: "1px solid white",
    listStyle: "none",
    borderRadius: "100%",

    "& a": {
      color: "white",
      marginTop: "10px",
      listStyle: "none",
    },

    "&:hover": {
      backgroundColor: "#1CB698",
      cursor: "default",
      transform: "rotateX(360deg)",
      transition: " all 1s ease-in-out 0s",
    },
  },
}));
