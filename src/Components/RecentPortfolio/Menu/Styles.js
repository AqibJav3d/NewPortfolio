import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  menuContainer: {
    height: 300,
    padding: 20,
    margin: 20,
  },

  img: {
    width: 250,
    objectFit: "cover",
    maxHeight: "100%",
    borderRadius: 10,
  },
}));
