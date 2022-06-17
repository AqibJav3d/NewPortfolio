import React from "react";
import { useStyles } from "./Styles";

const Menu = (prop) => {
  const classes = useStyles();
  return (
    <div className={classes.menuContainer}>
      <>
        <img className={classes.img} src={prop.img} alt="img" />
      </>
    </div>
  );
};

export default Menu;
