import React from "react";
import "./feelingFactor.css";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

import "../chatterBar/chatterBar.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FadeIn from "react-fade-in";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

class FeelingFactor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeling: "50",
      happiness: false,
      sadness: false,
      fear: false,
      anger: false,
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
        chatter: newValue,
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
          <span className="colorChange5">FEELING FACTOR:</span> How{" "}
          <span className="colorChange5"> emotionally charged</span> is this
          book?
        </p>

        <div className={classes.root}>
          <ThemeProvider theme={muiTheme}>
            <Slider
              onChange={(e, value) => this.handleChange(value)}
              defaultValue={50}
              value={this.state.chatter}
              // valueLabelDisplay="auto"
              // getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-custom"
              step={1}
              marks={marks}
            />
          </ThemeProvider>
        </div>
        <p className="moreInfo">
          What emotion(s) did this book make you
          <span className="colorChange5"> feel</span>? (select all that apply)
        </p>
        {/* <div className="checkbox"></div> */}
        <div className="checkbox">
          <FormGroup col className="moreInfo">
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.character}
                  onChange={this.handleChangeCheck}
                  name="happiness"
                  style={{
                    color: "#EBB700",
                  }}
                />
              }
              label="Happiness"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.plot}
                  onChange={this.handleChangeCheck}
                  name="sadness"
                  style={{
                    color: "#EBB700",
                  }}
                />
              }
              label="Sadness"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.setting}
                  onChange={this.handleChangeCheck}
                  name="fear"
                  style={{
                    color: "#EBB700",
                  }}
                />
              }
              label="Fear"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.educational}
                  onChange={this.handleChangeCheck}
                  name="anger"
                  style={{
                    color: "#EBB700",
                  }}
                />
              }
              label="Anger"
            />
            <div className="otherInfoSection">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.other}
                    onChange={this.handleChangeCheck}
                    name="other"
                    style={{
                      color: "#EBB700",
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
                    className="feelingColor"
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
    border: "5px solid",
    borderColor: "#d1d1d1",
    borderImageSlice: "1",
    borderRadius: 10,
  },
});

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: "#4d4d4d",
      },
      track: {
        color: "#2b2b2b",
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
    label: "Totally unemotional",
  },
  {
    value: 50,
    label: "Slightly emotional",
  },
  {
    value: 100,
    label: "Extremely emotional",
  },
];

function valuetext(value) {
  return `${value}`;
}



export default withStyles(styles)(FeelingFactor);
