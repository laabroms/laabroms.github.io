import React from "react";
import "./younger.css";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FadeIn from "react-fade-in";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

class SillyScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      silly: "50",
      physical: false,
      verbal: false,
      gross: false,
      loving: false,
      other: false,
      otherInfo: "",
    };
  }

  handleChangeCheck = (e) => {
    this.setState({ [e.target.name]: e.target.checked }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    });
  };

  handleChangeOtherInfo = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(this.state);
        }
      }
    );
  };

  handleChange = (newValue) => {
    this.setState(
      {
        silly: newValue,
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
          <span className="colorChangeSilly">SILLY SCORE:</span> Did this book
          make you <span className="colorChangeSilly">laugh?</span>
        </p>

        <div className={classes.root}>
          <ThemeProvider theme={muiTheme}>
            <Slider
              onChange={(e, value) => this.handleChange(value)}
              defaultValue={50}
              value={this.state.silly}
              // valueLabelDisplay="auto"
              // getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-custom"
              step={1}
              marks={marks}
            />
          </ThemeProvider>
        </div>
        <p className="moreInfo">
          What
          <span className="colorChangeSilly"> type of humor</span> did this book include? (select all that apply)
        </p>
        {/* <div className="checkbox"></div> */}
        <div className="checkbox">
          <FormGroup col className="moreInfo">
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.physical}
                  onChange={this.handleChangeCheck}
                  name="physical"
                  style={{
                    color: "#42e0f5",
                  }}
                />
              }
              label="Over-the-top/physical"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.verbal}
                  onChange={this.handleChangeCheck}
                  name="verbal"
                  style={{
                    color: "#42e0f5",
                  }}
                />
              }
              label="Clever/verbal"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.gross}
                  onChange={this.handleChangeCheck}
                  name="gross"
                  style={{
                    color: "#42e0f5",
                  }}
                />
              }
              label="Gross"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.loving}
                  onChange={this.handleChangeCheck}
                  name="loving"
                  style={{
                    color: "#42e0f5",
                  }}
                />
              }
              label="Loving"
            />
            
            <div className="otherInfoSection">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.other}
                    onChange={this.handleChangeCheck}
                    name="other"
                    style={{
                      color: "#42e0f5",
                    }}
                  />
                }
                label="Other"
              />
              {this.state.other ? (
                <FadeIn>
                  <input
                    name="otherInfo"
                    onBlur={this.handleChangeOtherInfo}
                    className="inputSilly"
                  />
                </FadeIn>
              ) : null}
            </div>
          </FormGroup>
        </div>
      </>
    );
  }
}

const styles = (theme) => ({
  root: {
    width: "100%",
    paddingLeft: "10%",
    paddingTop: 10,
    paddingRight: "10%",
    backgroundColor: "#e3e3e3",
    border: "4px solid",
    borderColor: "#d1d1d1",
    // borderImageSource: "linear-gradient(to right, #f87D1D, #5222E2)",
    borderImageSlice: "1",
    borderRadius: 10,
  },
});

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: "#666666",
      },
      track: {
        color: "#8c8c8c",
      },
      rail: {
        color: "black",
      },
    },
  },
});

const marks = [
  {
    value: 0,
    label: "Not a chuckle",
  },
  {
    value: 50,
    label: "Some giggles",
  },
  {
    value: 100,
    label: "Laugh-out-loud funny",
  },
];

// function valuetext(value) {
//   return `${value}`;
// }

// function valueLabelFormat(value) {
//   return marks.findIndex((mark) => mark.value === value) + 1;
// }

export default withStyles(styles)(SillyScore);
