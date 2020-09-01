import React, {useState} from "react";
import "./educationalElement.css";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

export default function EducationalElement() {
  const classes = useStyles();

  const [data, setData] = useState({
    educationalInt: "33",
    educational: "Sort of",
  });

  const handleChange = (newValue) => {
    if (newValue === 0) {
      setData({
        ...data,
        educationalInt: "0",
        educational: "Not at all",
      });
    } else if (newValue === 33) {
      setData({
        educationalInt: "33",
        educational: "Sort of",
      });
    } else if (newValue === 66) {
      setData({
        ...data,
        educationalInt: "66",
        educational: "Definitely",
      });
    } else if (newValue === 100) {
      setData({
        ...data,
        educationalInt: "100",
        educational: "N/A",
      });
    }
  };
 

  return (
    <>
      <p className="title2">
        4. <span className="colorChange2">EDUCATIONAL ELEMENT:</span> Do you
        think this book has{" "}
        <span className="colorChange2">significant educational value?</span>
      </p>

      <div className={classes.root}>
        <Slider
          value={data.educationalInt}
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
