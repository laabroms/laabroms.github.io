import React from "react";
import "./masterpieceMeter.css";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

export default function MasterpieceMeter() {
  const classes = useStyles();



  return (
    <>
      <p className="title">
        3. <span className="colorChange">MASTERPIECE METER:</span> Are the pictures in this book{" "}
        <span className="colorChange">enjoyable?</span>
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
    label: "They were okay",
  },
  {
    value: 66,
    label: "Loved them",
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
