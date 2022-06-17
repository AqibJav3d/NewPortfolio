import React from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const Unit = ({ title, subTitle, date, para, right }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  return (
    <div className={clsx(classes.cardContainer, { [classes.reverse]: !right })}>
      <div className={clsx(classes.card1, { [classes.borderLeft]: !right })}>
        <div>
          <h5>
            {" "}
            {title} <strong>{subTitle}</strong>
          </h5>
          <h6>
            <strong>{date}</strong>
          </h6>
          <p>{para}</p>
        </div>
      </div>
      <div className={clsx(classes.connector, { [classes.reverse]: !right })}>
        <hr />
        <div className={classes.circle} />
      </div>
    </div>
  );
};

export const ResumeDetails1 = ({ data, titles, right }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.col1}>
        <h3>{titles}</h3>

        <div
          className={clsx(classes.cards1, {
            [classes.containerBorder]: !right,
          })}
        >
          {data.map((item, i) => (
            <Unit
              key={i}
              {...item}
              right={titles.toLowerCase() === "education"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  col1: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  cards1: {
    borderRight: "1px solid #333",
  },

  card1: {
    padding: 25,
    background: "#252A2E",
    boxShadow: "0px 18px 18px 0 rgb(0 0 0 / 20%)",
    borderRight: " 1px solid #1CB698",
    position: "relative",
    display: " flex",
  },
  cardContainer: {
    display: " flex",
    marginBottom: 30,

    "& hr": {
      width: 35,
      height: 2,

      border: "none",
      right: " -35px",
      top: "50%",

      background: "#1CB698",
    },
    "& .MuiSvgIcon-root": {
      right: " -48px",
      top: "45%",
    },
  },
  connector: {
    display: " flex",
    alignItems: "center",
    position: "relative",
  },
  circle: {
    height: 15,
    width: 15,
    borderRadius: "100%",
    backgroundColor: "#1CB698",
  },
  reverse: {
    flexDirection: "row-reverse",
    borderRight: "1px solid #333",
  },
  borderLeft: {
    borderLeft: " 1px solid #1CB698",
    borderRight: "none",
  },

  container: {
    borderRight: "1px solid #333",
  },
  containerBorder: {
    borderLeft: "1px solid #333",
  },
}));
