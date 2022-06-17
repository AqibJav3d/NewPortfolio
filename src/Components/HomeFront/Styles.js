import { makeStyles } from "@material-ui/core";
import bg from "../../Assets/Images/bg2.jpg";

export const useStyles = makeStyles((theme) => ({
  HomeContainer: {
    textAlign: " center",
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    padding: "55px 0px",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "75vh",
    background: "#252A2E",
    [theme.breakpoints.down("xs")]: {
      // display: "none",
    },
  },

  profileCard: {
    background: " #252A2E",
    padding: 50,
    boxShadow: "-1rem 0 3rem rgb(0 0 0 / 20%)",
    position: "relative",

    marginTop: 100,
    borderRadius: 5,
    height: "240px  ",
  },
  img: {
    width: "250px",
    height: "250px",
    border: "5px solid #fff",
    maxWidth: "100%",
    borderRadius: "180px",
    marginBottom: 30,
    position: "absolute",
    top: -130,
    right: "18%",
    transition: " all 1s ease-in-out 0s",
    [theme.breakpoints.down("sm")]: {
      border: "none",
      borderRadius: 5,
      display: "none",
    },
    "&:hover": {
      cursor: "default",
      borderColor: "#1CB698",
      transform: "rotateY(360deg)",
      transition: " all 1s ease-in-out 0s",
    },
  },
  banner: {
    paddingTop: 100,
    marginBottom: 30,
    "& h1": {
      fontFamily: ["Righteous", "cursive"],
      fontSize: "6vh",

      textTransform: "uppercase",
    },
    "& h2": {
      fontSize: 17,
      marginBottom: 30,
    },
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginRight: "-15px",
    marginLeft: "-15px",

    "& ul": {
      display: "flex",
      justifyContent: "center",
    },
  },
  icon: {
    margin: "0 5px",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    fontSize: "22px",
    height: "42px",
    width: "42px",
    border: "1px solid white",
    borderRadius: "100%",
    "& a": {
      color: "white",
      marginTop: "10px",
    },

    "&:hover": {
      backgroundColor: "#1CB698",
      cursor: "default",
      transform: "rotateX(360deg)",
      transition: " all 1s ease-in-out 0s",
    },
  },
}));
