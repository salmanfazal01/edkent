import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import {
  IconButton,
  InputAdornment,
  makeStyles,
  Popover,
  TextField,
} from "@material-ui/core";
import moment from "moment";
import { CalendarTodayOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  textField: {
    [`& fieldset`]: {
      borderRadius: "7px",
    },
  },
}));

const CustomDatePicker = () => {
  const classes = useStyles();
  const [calAnchor, setCalAnchor] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleDateChange = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <div>
      <TextField
        variant="outlined"
        fullWidth
        className={classes.textField}
        value={`${moment(startDate).format("L")} - ${moment(endDate).format(
          "L"
        )}`}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={(e) => setCalAnchor(e.currentTarget)}>
                <CalendarTodayOutlined fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Popover
        id={calAnchor ? "plusBtn" : undefined}
        open={Boolean(calAnchor)}
        anchorEl={calAnchor}
        onClose={() => setCalAnchor(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          style: {
            minHeight: "120px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
          },
        }}>
        <DateRangePicker ranges={[selectionRange]} onChange={handleDateChange} />
      </Popover>
    </div>
  );
};

export default CustomDatePicker;
