import { Button, Grid, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  button: {
    minWidth: "200px",
    textTransform: "inherit",
    padding: "7px 0",
    fontWeight: 300,
    [theme.breakpoints.down("sm")]: {
      minWidth: "100px",
    },
  },
  active: {
    backgroundColor: "white",
    color: "blue",
    borderColor: "blue",
  },
}));

const CustomTabs = ({ items = [], activeTab, setActiveTab }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {items.map((item, i) => (
        <Grid item key={i}>
          <Button
            variant={"outlined"}
            className={clsx(
              classes.button,
              activeTab === item && classes.active
            )}
            onClick={() => setActiveTab(item)}>
            {item}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default CustomTabs;
