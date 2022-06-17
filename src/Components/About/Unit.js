import React from "react";
// import { useStyles } from "./Styles";
import { makeStyles } from "@material-ui/core";
const Unit = ({ text, icon }) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <icon icon={icon} />
      <h5>{text}</h5>
    </div>
  );
};

export const Cards = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.cards}>
      {data.map((item, i) => (
        <Unit key={i} {...item} />
      ))}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",

    height: "205px",
  },
  card: {
    width: 70,
    height: 55,
    background: "#252A2E",
    paddingTop: "20px",

    borderRadius: "10px",
    textAlign: " center",
  },
}));
