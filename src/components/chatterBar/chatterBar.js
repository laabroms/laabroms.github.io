import React, {useState} from "react";
import "./chatterBar.css";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

export default function ChatterBar() {
  const classes = useStyles();

  const [data, setData] = useState({
    chatterInt: "33",
    chatter: "They were okay",
  });

  const handleChange = (newValue) => {
    if (newValue === 0) {
      setData({
        ...data,
        chatterInt: "0",
        chatter: "Not at all",
      });
    } else if (newValue === 33) {
      setData({
        chatterInt: "33",
        chatter: "Sort of",
      });
    } else if (newValue === 66) {
      setData({
        ...data,
        chatterInt: "66",
        chatter: "Definitely",
      });
    } else if (newValue === 100) {
      setData({
        ...data,
        chatterInt: "100",
        chatter: "N/A",
      });
    }
  };



  return (
    <>
      <p className="title">
        5. <span className="colorChange3">CHATTER BAR:</span> Did you want to{" "}
        <span className="colorChange3">talk</span> about this book after you
        finished reading it?
      </p>

      <div className={classes.root}>
        <Slider
          value={data.chatterInt}
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
