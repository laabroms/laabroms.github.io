import React from "react";
import "./chatterBar.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

export default function ChatterBar() {
  const classes = useStyles();



  return (
    <>
      <p className="title">
        5. <span className="colorChange3">CHATTER BAR:</span> Did you want to {" "}
        <span className="colorChange3">talk</span> about this book after you finished reading it?
      </p>

      <div className={classes.root}>
        <Slider
          defaultValue={33}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-restrict"
          step={null}
          // valueLabelDisplay="auto"
          marks={marks}
        />
      </div>
    </>
  );
}

const useStyles = makeStyles({
  root: {
    width: "80%",
    paddingLeft: "12%",
    paddingRight: "8%",
    backgroundColor: "#e3e3e3",
  },
});

const marks = [
  {
    value: 0,
    label: "Not at all",
  },
  {
    value: 33,
    label: "Sort of",
  },
  {
    value: 66,
    label: "Definitely",
  },
  {
    value: 100,
    label: "N/A",
  },
];

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}
