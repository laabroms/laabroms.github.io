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
      spooky: "50",
      fun: false,
      spookiness: false,
      humorous: false,
      emotional: false,
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
        spooky: newValue,
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
          <span className="colorChangeSpooky">SPOOKY SCORE:</span> Was this book
          filled with{" "}
          <span className="colorChangeSpooky">Halloween spirit?</span>
        </p>

        <div className={classes.root}>
          <ThemeProvider theme={muiTheme}>
            <Slider
              onChange={(e, value) => this.handleChange(value)}
              defaultValue={50}
              value={this.state.spooky}
              // valueLabelDisplay="auto"
              // getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-custom"
              step={1}
              marks={marks}
            />
          </ThemeProvider>
        </div>
        <p className="moreInfo">
          What was the 
          <span className="colorChangeSpooky"> tone</span> of this spooky book? (select all that apply)
        </p>
        {/* <div className="checkbox"></div> */}
        <div className="checkbox">
          <FormGroup col className="moreInfo">
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.fun}
                  onChange={this.handleChangeCheck}
                  name="fun"
                  style={{
                    color: "#3b0087",
                  }}
                />
              }
              label="Fun"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.spookiness}
                  onChange={this.handleChangeCheck}
                  name="spookiness"
                  style={{
                    color: "#3b0087",
                  }}
                />
              }
              label="Spooky"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.humorous}
                  onChange={this.handleChangeCheck}
                  name="humorous"
                  style={{
                    color: "#3b0087",
                  }}
                />
              }
              label="Humorous"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.emotional}
                  onChange={this.handleChangeCheck}
                  name="emotional"
                  style={{
                    color: "#3b0087",
                  }}
                />
              }
              label="Emotional"
            />

            <div className="otherInfoSection">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.other}
                    onChange={this.handleChangeCheck}
                    name="other"
                    style={{
                      color: "#3b0087",
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
                    className="inputSpooky"
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
    label: "No, pretty bland",
  },
  {
    value: 50,
    label: "Somewhat",
  },
  {
    value: 100,
    label: "Yes, brimming with spirit",
  },
];

// function valuetext(value) {
//   return `${value}`;
// }

// function valueLabelFormat(value) {
//   return marks.findIndex((mark) => mark.value === value) + 1;
// }

export default withStyles(styles)(SillyScore);
