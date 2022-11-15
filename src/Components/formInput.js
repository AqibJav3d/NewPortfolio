import { Box, Input, InputAdornment } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";

const FormInput = ({ name, Icon, ...props }) => {
  const classes = useStyle();
  return (
    <Box>
      <Box className={classes.input}>
        <Input
          color="secondary"
          {...props}
          className={classes.inputField}
          startAdornment={
            <InputAdornment position="start">
              <Icon />
            </InputAdornment>
          }
        />
      </Box>
    </Box>
  );
};

export default FormInput;

const useStyle = makeStyles((theme) => ({
  inner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    gap: 5,
  },
  input: {
    // "& .MuiInput-underline:before": {
    //   borderBottom: "2px solid" + theme.palette.text.primary,
    // },
    // "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    //   borderBottom: "2px solid" + theme.palette.text.primary,
    // },
    padding: 5,
  },
  inputField: {
    background: "transparent",

    color: "#ffffff",
    width: "100%",
  },
  icon: {
    // color: theme.palette.text.primary,
    fontSize: 23,
  },
}));
