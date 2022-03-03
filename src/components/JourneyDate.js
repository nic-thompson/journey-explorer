import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import css from "./css/JourneyDate.module.css";

export default function BasicDatePicker(props) {
  const [date, setValue] = React.useState(new Date());

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Pick a journey date"
          value={date.toLocaleDateString()}
          onChange={(newDate) => {
            setValue(newDate);
            props.onDateChange(newDate);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <div className={css["journey-time"]}>
        <h3 className={css.title}>{props.title}</h3>
        <div className={css.time}>{props.time}</div>
        <ArrowBackIosIcon
          onClick={() => {
            props.onTimeChange("back");
          }}
        />
        <ArrowForwardIosIcon
          onClick={() => {
            props.onTimeChange("forward");
          }}
        />
      </div>
    </>
  );
}
