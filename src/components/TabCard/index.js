import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CustomPaper from "../CustomPaper";

const useStyles = makeStyles((theme) => ({
  image: {
    maxHeight: "40px",
    objectFit: "contain",
  },
  title: {
    fontWeight: 500,
  },
  subtitle: {
    fontSize: "12px",
  },
}));

const TabCard = ({ image, title, subtitle }) => {
  const classes = useStyles();

  return (
    <CustomPaper>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <img src={image} alt="" className={classes.image} />
        </Grid>
        <Grid item>
          <Typography className={classes.title}>{title}</Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default TabCard;
