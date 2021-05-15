import { Divider, Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import CustomPaper from "../CustomPaper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles((theme) => {});

const CustomCollapse = ({ title, children }) => {
  const classes = useStyles();
  const [collapse, setCollapse] = useState(false);

  return (
    <CustomPaper>
      <Grid container justify="space-between" alignItems="center" spacing={2}>
        <Grid item xs>
          <Typography className={classes.collapseTitle}>{title}</Typography>
        </Grid>
        <Grid item>
          <IconButton
            size="small"
            onClick={() => setCollapse(!collapse)}
            className={classes.collapseButton}>
            {!collapse ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          </IconButton>
        </Grid>

        {collapse && (
          <>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            
            <Grid item xs={12}>
              {children}
            </Grid>
          </>
        )}
      </Grid>
    </CustomPaper>
  );
};

export default CustomCollapse;
