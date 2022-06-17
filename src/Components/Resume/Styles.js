import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  resumeContainer: {
    gap: "12px",

    display: " flex",
    padding: " 55px 20px",
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
  row: {
    display: " flex",
    justifyContent: "space-around",
    gap: 30,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "30px",
    },
  },
  col1: {
    display: " flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "50%",
  },
  cards1: {
    borderRight: "1px solid #333",
  },

  col2: {
    display: " flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "50%",
  },
  cards2: {
    borderLeft: "1px solid #333",
  },
  card2: {
    padding: 25,
    background: "#252A2E",
    boxShadow: "0px 18px 18px 0 rgb(0 0 0 / 20%)",
    marginBottom: 30,
    borderLeft: " 1px solid #1CB698",
    position: "relative",
    "& hr": {
      position: "absolute",
      width: 35,
      height: 2,
      top: "50%",
      left: "-35px",
      border: "none",

      background: "#1CB698",
    },
    "& .MuiSvgIcon-root": {
      color: "#1CB698",
      position: "absolute",
      top: "44%",
      left: "-48px",
    },
  },
}));
