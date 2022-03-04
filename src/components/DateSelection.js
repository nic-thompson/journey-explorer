import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

const DateSelection = (props) => {
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
    </>
  );
}

export default DateSelection;