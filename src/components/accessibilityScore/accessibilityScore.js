import React from "react";
import "./accessibilityScore.css";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

export default function AccessibilityScore() {
  const classes = useStyles();

  return (
    <>
      <p className="title">
        8. <span className="colorChange6">ACCESSIBILITY SCORE:</span> How accessible is this {" "}
        <span className="colorChange6">
          book's language?
        </span>
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
    label: "Inaccessible",
  },
  {
    value: 33,
    label: "Somewhat accessible",
  },
  {
    value: 66,
    label: "Age-appropriate",
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
