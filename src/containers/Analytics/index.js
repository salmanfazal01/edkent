import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { CalendarTodayOutlined } from "@material-ui/icons";
import clsx from "clsx";
import React, { useState } from "react";
import CustomPaper from "../../components/CustomPaper";
import LineChart from "../../components/LineChart";
import moment from "moment";
import CustomDatePicker from "../../components/CustomDatePicker";
import LineChart2 from "../../components/LineChart2";

const data = {
  headings: [
    {
      title: "Heading1",
      subtitle: "24,350",
    },
    {
      title: "Heading2",
      subtitle: "12,360",
    },
    {
      title: "Heading3",
      subtitle: "10,671",
    },
    {
      title: "Heading4",
      subtitle: "6,562",
    },
  ],
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "24px",
  },
  title: {
    fontWeight: 500,
    fontSize: "18px",
  },
  headings: {
    border: "1px solid lightgrey",
    borderRadius: "7px",
    padding: "5px",
    display: "flex",
    flexWrap: "wrap",
    minHeight: "44px",
  },
  headingsItem: {
    padding: "0 10px",
  },
  headingsRightPadding: {
    paddingRight: "30px",
    borderRight: "1px solid lightgrey",
  },
  headingsTitle: {
    fontWeight: 500,
    fontSize: "14px",
  },
  headingsSubtitle: {
    fontSize: "14px",
  },
  textField: {
    [`& fieldset`]: {
      borderRadius: "7px",
    },
  },
  chartContainer: {
    height: "400px",
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "200px",
    },
  },
  buttonActive: {
    backgroundColor: "blue",
    color: "white",
    "& :hover": {
      color: "black",
    },
  },
}));

const Analytics = () => {
  const classes = useStyles();
  const [library, setLibrary] = useState(true);

  const handleToggle = () => {
    setLibrary(!library);
  };

  return (
    <CustomPaper className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Grid container spacing={2} justify="space-between">
            <Grid item>
              <Typography className={classes.title}>Analytics</Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <CustomDatePicker />
                </Grid>
                <Grid item>
                  <div className={classes.headings}>
                    {data.headings.map((item, i) => (
                      <div
                        key={i}
                        className={clsx(
                          classes.headingsItem,
                          i !== data.headings.length - 1 &&
                            classes.headingsRightPadding
                        )}>
                        <Typography className={classes.headingsTitle}>
                          {item.title}
                        </Typography>
                        <Typography className={classes.headingsSubtitle}>
                          {item.subtitle}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.chartContainer}>
            {library ? <LineChart2 /> : <LineChart />}
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            *Note: this charting library does not support responsiveness on
            browser resizing, please refresh window to recalculate browser and
            chart size
          </Typography>
          <Button
            variant="outlined"
            onClick={handleToggle}
            size="small"
            className={`${library && classes.buttonActive}`}>
            Toggle Charting Library
          </Button>
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default Analytics;
