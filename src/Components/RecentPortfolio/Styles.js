import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  portfolioContainer: {
    gap: "12px",

    display: " flex",
    padding: " 65px 0px",
    flexDirection: "column",
    justifyContent: "center",

    "& .MuiGrid-container": {
      display: "flex !important",
      justifyContent: "center",
    },
  },

  heading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: " center",

    "& img": {
      width: 60,
      height: "auto",
      padding: 10,
      margin: "0 auto 10px",
      borderRadius: 5,
      background: "#252A2E",
    },
    "& h2": {
      fontFamily: ["Righteous", "cursive"],
      fontSize: 48,
      paddingBottom: 20,
      textTransform: "Capitalize",
    },
  },
  hr1: {
    width: 80,

    height: "2px",
    marginBottom: 5,
    backgroundColor: "#1CB698",
    border: "none",
  },
  hr2: {
    width: "40px",
    height: "2px",
    marginBottom: 5,
    backgroundColor: "#1CB698",
    border: "none",
  },

  menu: {
    maxWidth: "200px !important",
  },
}));
