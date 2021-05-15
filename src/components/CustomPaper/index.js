import { makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '14px 24px',
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 4px",
  },
}));

const CustomPaper = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={0} {...props}>
      {props.children}
    </Paper>
  );
};

export default CustomPaper;
