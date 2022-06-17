import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  skillsContaienr: {
    gap: "12px",

    display: " flex",
    padding: " 65px 0px",
    flexDirection: "column",
    justifyContent: "center",
  },

  heading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

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

  progressBars: {
    display: " flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "30px",
    },
    "& Progress": {
      background: " #252A2E",
      padding: "30px",
    },
  },
  containerBg: {
    background: " #252A2E",
    padding: "30px",
    borderRadius: 10,
  },
  Skills: {
    maxWidth: "41.66666%",

    "& h4": {
      fontSize: 28,
      lineHeight: "30px",
      letterSpacing: 0.5,
      marginBottom: 25,
    },
  },
  skill: {
    display: " flex",
    flexDirection: "column",
    gap: 20,
  },
  progress: {
    fontSize: 15,
    fontWeight: 600,
    opacity: 0.9,
    display: " flex",
    flexDirection: "column",
    gap: 5,
    "& .MuiLinearProgress-colorPrimary": {
      borderRadius: 10,
    },
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "#1CB698",
    },
  },
}));
