import React from "react";
import "./feelingFactor.css";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

class FeelingFactorTeacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeling: "50",
    };
  }

  handleChange = (newValue) => {
    this.setState({
        feeling: newValue
    }, () => {
        if (this.props.onChange) {
            this.props.onChange(this.state)
        }
    })
    

  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <p className="title">
          <span className="colorChange5">FEELING FACTOR:</span> Did/would this
          book effectively teach your students anything about{" "}
          <span className="colorChange5">their own feelings?</span>
        </p>

        <div className={classes.root}>
          <Slider
            onChange={(e, value) => this.handleChange(value)}
            defaultValue={50}
            value={this.state.feeling}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-custom"
            step={5}
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
    label: "Not at all",
  },
  {
    value: 50,
    label: "Sort of",
  },
  {
    value: 100,
    label: "Yes, very much so",
  },
  
];

function valuetext(value) {
  return `${value}`;
}


export default withStyles(styles)(FeelingFactorTeacher);
