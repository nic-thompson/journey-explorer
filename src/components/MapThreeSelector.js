import * as React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import css from "./css/JourneyDate.module.css";

const MapThreeSelector = (props) => {

  return (
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
  );
};

export default MapThreeSelector;
