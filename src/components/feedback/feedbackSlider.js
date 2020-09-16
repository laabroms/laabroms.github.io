import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

class FeedbackSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: "50",
    };
  }

  handleChange = (newValue) => {
    this.setState(
      {
        feedback: newValue,
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(this.state);
        }
      }
    );
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <p className="title">
          Thank you for your input! How much did you enjoy this survey?
        </p>

        <div className={classes.root}>
          <Slider
            onChange={(e, value) => this.handleChange(value)}
            defaultValue={50}
            value={this.state.feedback}
            // valueLabelDisplay="auto"
            // getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-custom"
            step={1}
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
    paddingLeft: "10%",
    paddingRight: "9%",
    backgroundColor: "#e3e3e3",
    borderColor: "#d1d1d1",
    border: "5px solid",
    paddingTop: 10,
    borderRadius: 10,
  },
});

const marks = [
  {
    value: 0,
    label: "Needs improvement",
  },
  {
    value: 50,
    label: "It was satisfactory",
  },
  {
    value: 100,
    label: "Loved it",
  },
];

function valuetext(value) {
  return `${value}`;
}

export default withStyles(styles)(FeedbackSlider);
