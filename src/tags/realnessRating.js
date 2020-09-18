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

class RealnessRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      realness: "50",
      dialogue: false,
      characters: false,
      setting: false,
      problems: false,
      resolution: false,
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
        realness: newValue,
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
          <span className="colorChangeRealness">REALNESS RATING:</span> did you
          find this book <span className="colorChangeRealness">believable</span>{" "}
          and <span className="colorChangeRealness">true-to-life?</span>
        </p>

        <div className={classes.root}>
          <ThemeProvider theme={muiTheme}>
            <Slider
              onChange={(e, value) => this.handleChange(value)}
              defaultValue={50}
              value={this.state.realness}
              // valueLabelDisplay="auto"
              // getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-custom"
              step={1}
              marks={marks}
            />
          </ThemeProvider>
        </div>
        <p className="moreInfo">
          What aspects of this book do you find
          <span className="colorChangeRealness">
            {" "}
            believable and true-to-life?
          </span>{" "}
          (select all that apply)
        </p>
        {/* <div className="checkbox"></div> */}
        <div className="checkbox">
          <FormGroup col className="moreInfo">
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.dialogue}
                  onChange={this.handleChangeCheck}
                  name="dialogue"
                  style={{
                    color: "#556b2f",
                  }}
                />
              }
              label="The dialogue"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.characters}
                  onChange={this.handleChangeCheck}
                  name="characters"
                  style={{
                    color: "#556b2f",
                  }}
                />
              }
              label="The characters"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.setting}
                  onChange={this.handleChangeCheck}
                  name="setting"
                  style={{
                    color: "#556b2f",
                  }}
                />
              }
              label="The setting"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.problems}
                  onChange={this.handleChangeCheck}
                  name="problems"
                  style={{
                    color: "#556b2f",
                  }}
                />
              }
              label="The problems that the characters face"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.resolution}
                  onChange={this.handleChangeCheck}
                  name="resolution"
                  style={{
                    color: "#556b2f",
                  }}
                />
              }
              label="The resolution of the story"
            />
            

            <div className="otherInfoSection">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.other}
                    onChange={this.handleChangeCheck}
                    name="other"
                    style={{
                      color: "#556b2f",
                    }}
                  />
                }
                label="Other"
              />
              {this.state.other ? (
                <FadeIn>
                  <input
                    name="otherInfo"
                    onChange={this.handleChangeOtherInfo}
                    className="inputRealness"
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
    width: "80%",
    paddingLeft: "10%",
    paddingTop: 10,
    paddingRight: "9%",
    backgroundColor: "#e3e3e3",
    border: "4px solid",
    borderColor: "#d1d1d1",
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
    label: "Not at all",
  },
  {
    value: 50,
    label: "Somewhat",
  },
  {
    value: 100,
    label: "Very true-to-life",
  },
];

export default withStyles(styles)(RealnessRating);
