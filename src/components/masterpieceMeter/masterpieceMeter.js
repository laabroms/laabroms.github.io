import React, {useState} from "react";
import "./masterpieceMeter.css";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

export default function MasterpieceMeter() {
  const classes = useStyles();

  const [data, setData] = useState({
    masterpieceInt: "33",
    masterpiece: "They were okay",
  });


  const handleChange = (newValue) => {
    if (newValue === 0) {
      setData({
        ...data,
        masterpieceInt: "0",
        masterpiece: "Not at all",
      });
    } else if (newValue === 33) {
      setData({
        masterpieceInt: "33",
        masterpiece: "They were okay",
      });
    } else if (newValue === 66) {
      setData({
        ...data,
        masterpieceInt: "66",
        masterpiece: "Loved them",
      });
    } else if (newValue === 100) {
      setData({
        ...data,
        masterpieceInt: "100",
        masterpiece: "N/A",
      });
    }
  };



  return (
    <>
      <p className="title">
        3. <span className="colorChange">MASTERPIECE METER:</span> Are the
        pictures in this book <span className="colorChange">enjoyable?</span>
      </p>

      <div className={classes.root}>
        <Slider
          value={data.masterpieceInt}
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
