import { Box, Typography, Checkbox, Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import FormInput from "../Components/formInput";
import about from "../Assets/Images/about.png";
const ContactUs = () => {
  const classes = useStyle();
  return (
    <Box className={classes.container}>
      <Box className={classes.mainContainer}>
        <div className={classes.heading}>
          <img src={about} alt="" />
          <h2>Contact Us</h2>
          <hr className={classes.hr1} />
          <hr className={classes.hr2} />
        </div>

        <Box className={classes.innerContainer}>
          <Box className={classes.heading1}>
            <Typography className={classes.mainHeading} variant="h1">
              Have <span className={classes.span}>Questions</span>? Get In
              Touch!
            </Typography>
          </Box>
          <Box className={classes.rightContainer}>
            <Box className={classes.gridContainer}>
              <Box className={classes.field}>
                {" "}
                <FormInput
                  className={classes.gridItem1}
                  placeholder="Name"
                  Icon={PersonOutlineOutlinedIcon}
                />
              </Box>

              <Box className={classes.field}>
                {" "}
                <FormInput
                  className={classes.gridItem2}
                  placeholder="Email Adress"
                  Icon={MailOutlineIcon}
                />
              </Box>

              <Box className={classes.field}>
                {" "}
                <FormInput
                  className={classes.gridItem3}
                  placeholder="Phone"
                  Icon={PhoneOutlinedIcon}
                />
              </Box>

              <Box className={classes.field}>
                {" "}
                <FormInput
                  className={classes.gridItem4}
                  placeholder="Subject"
                  Icon={InfoOutlinedIcon}
                />
              </Box>

              <Box className={classes.gridItem5}>
                <FormInput
                  placeholder="How can we help?"
                  Icon={GroupOutlinedIcon}
                />
              </Box>
            </Box>
            <Box>
              <Button className={classes.button} variant="h3">
                Get In Touch
              </Button>
            </Box>
            <Typography className={classes.agree}>
              <Checkbox
                color=""
                inputProps={{ "aria-label": "checkbox with default color" }}
                className={classes.checkbox}
              />
              <span className={classes.text}>
                I agree that my submission date is
              </span>{" "}
              <span className={classes.span}>Collected and Started.</span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;

const useStyle = makeStyles((theme) => ({
  mainContainer: {
    padding: "0px 20px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("xl")]: {
      marginLeft: "35vh",
    },
  },

  span: {
    // color: theme.palette.primary.main,
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

  innerContainer: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      // flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("xl")]: {
      justifyContent: "space-around",
    },
  },

  heading1: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
    [theme.breakpoints.down("sm")]: {
      // fontSize: 20,
    },
  },

  contact: {
    // color: theme.palette.primary.main,
    fontSize: 19,
    fontWeight: 600,
    marginTop: 80,
    [theme.breakpoints.down("xs")]: {
      marginTop: 5,
    },
  },
  mainHeading: {
    width: 589,
    paddingTop: 50,
    fontSize: "6vw",
    fontFamily: ["Righteous", "cursive"],
    fontWeight: "500",
    lineHeight: "1.063em",
    latterSpacing: "-2.4px",
    color: "#FFFFFF",
    [theme.breakpoints.down("md")]: {
      width: "auto",
      // fontSize: "4vw",
      fontWeight: "700",
      lineHeight: "90px",
      latterSpacing: "-2.4px",
    },
    [theme.breakpoints.down("sm")]: {
      // fontSize: "3vw",
    },
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      letterSpacing: "0.4px",
      // fontSize: "22px",
      lineHeight: "20px",
      marginBottom: "5px",
    },
  },

  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "1fr 1fr 1fr",
    gap: 20,

    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  gridItem5: {
    width: "100%",
    gridColumn: "1 / span 2",
  },

  button: {
    height: 69,
    padding: 20,
    width: 340,
    marginTop: 60,
    fontWeight: "800",
    fontSize: 16,
    color: "#FFFF",

    // background: theme.palette.primary.main,
    border: " 3.66927px solid #17D7F5",
    borderRadius: " 52.5928px",
    [theme.breakpoints.down("xs")]: {
      height: 40,

      width: 221.6,
    },
  },
  text: {
    color: "#FFFFFF",
  },

  checkbox: {
    color: "#FFFFFF",
  },
  agree: {
    marginBottom: 112,
    marginTop: 29,
    [theme.breakpoints.down("xs")]: {
      fontSize: 10.5,
    },
  },
}));
