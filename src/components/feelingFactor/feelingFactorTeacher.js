import React from "react";
import "./feelingFactor.css";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

class FeelingFactorTeacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feelingInt: "33",
      feeling: "Sort of",
    };
  }

  handleChange = (newValue) => {
    //  alert(newValue);
    if (newValue === 0) {
      this.setState(
        {
          feelingInt: "0",
          feeling: "Not at all",
        },
        () => {
          if (this.props.onChange) {
            this.props.onChange(this.state);
          }
        }
      );
    } else if (newValue === 33) {
      this.setState(
        {
          feelingInt: "33",
          feeling: "Sort of",
        },
        () => {
          if (this.props.onChange) {
            this.props.onChange(this.state);
          }
        }
      );
    } else if (newValue === 66) {
      this.setState(
        {
          feelingInt: "66",
          feeling: "Yes, very much so",
        },
        () => {
          if (this.props.onChange) {
            this.props.onChange(this.state);
          }
        }
      );
    } else if (newValue === 100) {
      this.setState(
        {
          feelingInt: "100",
          feeling: "N/A",
        },
        () => {
          if (this.props.onChange) {
            this.props.onChange(this.state);
          }
        }
      );
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <p className="title">
          <span className="colorChange5">FEELING FACTOR:</span> Did/would this book effectively teach your students anything about {" "}
          <span className="colorChange5">
            their own feelings?
          </span>
        </p>

        <div className={classes.root}>
          <Slider
            onChange={(e, value) => this.handleChange(value)}
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
}

const styles = (theme) => ({
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

export default withStyles(styles)(FeelingFactorTeacher);
