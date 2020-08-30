import React from "react";
import './clearnessCalculator.css';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

export default function ClearnessCalculator() {


    const classes = useStyles();
   

   
    return (
        <>
      
        <p className="title1">
          2.{" "}
          <span className='colorChange1'>
            CLEARNESS CALCULATOR:
          </span>{" "}
          Is it easy to read and follow the{" "}
          <span className='colorChange1'>
            words on each page?
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
    paddingRight:'8%',
    backgroundColor: "#e3e3e3",
  },
});

const marks = [
  {
    value: 0,
    label: "No, very unclear",
  },
  {
    value: 33,
    label: "Sometimes clear",
  },
  {
    value: 66,
    label: "Yes, very clear",
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