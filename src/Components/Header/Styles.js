import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  headerWrapper: {
    height: 60,
    background: "#1E2326",
  },
  headerContainer: {
    visibility: "visible",
    animationName: "fadeInUp",
    width: "100%",
    transition: "all 0.5s ease 0s",
    background: "#1E2326",
    position: "absolute",
    top: -15,
  },
  header: {
    padding: "15px 0",
    background: "#1E2326",
  },
  container: {
    width: "100%",
    paddingTop: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    position: "fixed",
    marginRight: "auto",
    marginLeft: "auto",
    zIndex: 1,
    background: "#1E2326",
  },

  logo: {
    "& a": {
      fontSize: 36,

      color: "white",
      fontFamily: ["Rightius", "cursive"],
      textDecoration: "none",
      cursor: "pointer",
      // transition: "background 1s, color 1s",
      transition: "all 0.5s ease 0s",
      "&:hover": {
        color: "#1CB698",
      },
    },
  },

  cssMenu: {
    display: "table",

    float: "right",
    width: "auto",
    border: 0,
    listStyle: "none",
    lineHeight: 1,
    position: "relative",
    "& button": {
      display: "none",
    },
    "& ul": {
      margin: "0px 0 0 0",
      listStyle: "none",
      lineHeight: 1,
      display: "flex",
      textDecoration: "none",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
      "& li": {
        float: "left",
        listStyle: "none",
        margin: "0px 0px",
        padding: "0 0px",
        borderRight: "0px solid #FFF",
        "& a": {
          position: "relative",
          padding: "10px 0px",
          margin: "0 15px",
          textTransform: "uppercase",
          fontSize: "16px",
          fontWeight: "normal",
          letterSpacing: "0.5px",
          textAlign: "center",
          transition: "all 0.8s ease 0s",
          textDecoration: "none",
          display: "block",
          color: "white",
          "& before": {
            overflow: "hidden",
            padding: "10px",
            maxWidth: "0",
            color: "#1CB698",
            content: "attr(data-hover)",
            transition: "max-width 0.8s",
          },
          "&:hover": {
            color: "#1CB698",
          },
        },
      },
    },
  },
  hamburger: {
    display: "none",
    color: "#fff",
    "& .MuiSvgIcon-root": {
      color: "white",
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));
