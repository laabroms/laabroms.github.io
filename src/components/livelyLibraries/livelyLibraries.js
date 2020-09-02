import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import './livelyLibraries.css';

class LivelyLibraries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      livelyLibrariesInt: "33",
      livelyLibraries: "Sort of",
    };
  }

  handleChange = (newValue) => {
    //  alert(newValue);
    if (newValue === 0) {
      this.setState(
        {
          livelyLibrariesInt: "0",
          livelyLibraries: "Not at all",
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
          livelyLibrariesInt: "33",
          livelyLibraries: "Maybe",
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
          livelyLibrariesInt: "66",
          livelyLibraries: "Definitely",
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
          livelyLibrariesInt: "100",
          livelyLibraries: "N/A",
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
          <span className="colorChangelivelyLibraries">LIVELY LIBRARIES:</span> Do you
          think  this book would be {" "}
          <span className="colorChangelivelyLibraries">
            popular
          </span> in your classroom library?
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
    label: "Maybe",
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

export default withStyles(styles)(LivelyLibraries);
