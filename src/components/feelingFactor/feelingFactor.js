import React, {useState} from "react";
import "./feelingFactor.css";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

export default function FeelingFactor() {
  const classes = useStyles();

  const [data, setData] = useState({
    feelingInt: "33",
    feeling: "Sort of",
  });

  const handleChange = (newValue) => {
    if (newValue === 0) {
      setData({
        ...data,
        feelingInt: "0",
        feeling: "Sort of",
      });
    } else if (newValue === 33) {
      setData({
        feelingInt: "33",
        feeling: "Yes, very much so",
      });
    } else if (newValue === 66) {
      setData({
        ...data,
        feelingInt: "66",
        feeling: "Loved them",
      });
    } else if (newValue === 100) {
      setData({
        ...data,
        feelingInt: "100",
        feeling: "N/A",
      });
    }
  };


  return (
    <>
      <p className="title">
        7. <span className="colorChange5">FEELING FACTOR:</span> Do you think
        this book effectively explores ways for readers to{" "}
        <span className="colorChange5">
          navigate difficult emotions and social situations?
        </span>
      </p>

      <div className={classes.root}>
        <Slider
          value={data.feelingInt}
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
    label: "Yes, very much so",
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
