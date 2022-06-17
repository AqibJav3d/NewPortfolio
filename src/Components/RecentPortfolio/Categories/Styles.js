import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  btnContainer: {
    display: "flex",
    justifyContent: "center",
  },
  categories: {
    marginBottom: "1rem !important",
    display: "flex",
    justifyContent: "center",

    flexWrap: "wrap",
    listStyle: "none",
    "& button": {
      margin: "0px 5px",
      border: "0px !important",
      outline: "0px !important",
      cursor: "pointer",

      fontSize: 16,
      color: "#fff",
      letterSpacing: "0.5px",
      fontWeight: "500",
      background: "transparent",
      padding: "10px 22px",
    },
  },
}));
