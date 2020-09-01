import React, {useState} from "react";
import "./heartToHeart.css";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

export default function HeartToHeart() {
  const classes = useStyles();


  const [data, setData] = useState({
    heartInt: "33",
    heart: "Sort of",
  });

  const handleChange = (newValue) => {
    if (newValue === 0) {
      setData({
        ...data,
        heartInt: "0",
        heart: "Not at all",
      });
    } else if (newValue === 33) {
      setData({
        heartInt: "33",
        heart: "Sort of",
      });
    } else if (newValue === 66) {
      setData({
        ...data,
        heartInt: "66",
        heart: "Definitely",
      });
    } else if (newValue === 100) {
      setData({
        ...data,
        heartInt: "100",
        heart: "N/A",
      });
    }
  };


  return (
    <>
      <p className="title">
        6. <span className="colorChange4">HEART TO HEART:</span> Do you think
        that this book had a{" "}
        <span className="colorChange4">positive message?</span>
      </p>

      <div className={classes.root}>
        <Slider
          value={data.heartInt}
          onChange={(e, value) => handleChange(value)}
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
