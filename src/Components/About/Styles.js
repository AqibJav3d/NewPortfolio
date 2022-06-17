import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gap: 12,
    padding: "65px 0px",
    "& button": {
      fontSize: "16px",
      color: "white",
      backgroundColor: "transparent",
      padding: "10px 22px",
      border: "1px solid #fff",
      fontWeight: 500,
      width: 170,
    },
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

  para: {
    color: "white",
    marginBottom: "30px",
    alignItems: "center",
    padding: "0px 100px",
    "& span": {
      fontWeight: 600,
      color: "#1CB698",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0px 10px",
    },
  },
  lower: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "30px",
    },
  },
  inner: {
    display: "flex",
  },
  personalDetails: {},
  innerDetails: {
    // width: "150vh",
    width: "450px",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      width: "300px",
    },
    "& ul": {
      listStyle: "none",
      background: "#252A2E",

      borderRadius: 5,
      padding: 20,
      [theme.breakpoints.down("sm")]: {
        padding: "15px",
      },
      "& li": {
        paddingTop: 7,
        display: "flex",
        justifyContent: "space-between",
        "& strong": {
          width: 85,
          display: "flex",
          justifyContent: "cemter",
          [theme.breakpoints.down("xs")]: {
            width: "85px",
          },
          // display: "inline-block",
        },
      },
    },
  },
  myInterests: {},

  cvBtn: {
    marginLeft: "40%",
  },
}));
