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
import Hidden from "@material-ui/core/Hidden";

class HeartMeter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heart: "50",
      historical: false,
      willThey: false,
      bestFriends: false,
      dystopian: false,
      enemies: false,
      firstLove: false,
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
        heart: newValue,
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
          <span className="colorChangeHeart">HEART METER:</span> How central to the plot is the {" "}
          <span className="colorChangeHeart">romantic arc</span> in this book?
        </p>

        <div className={classes.root}>
          <ThemeProvider theme={muiTheme}>
            <Slider
              onChange={(e, value) => this.handleChange(value)}
              defaultValue={50}
              value={this.state.heart}
              // valueLabelDisplay="auto"
              // getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-custom"
              step={1}
              marks={marks}
            />
          </ThemeProvider>
        </div>
        <p className="moreInfo">
          What kind of 
          <span className="colorChangeHeart"> romantic arc</span> does this book display? (select all that apply)
        </p>
        {/* <div className="checkbox"></div> */}
        <div className="checkbox">
          <FormGroup col className="moreInfo">
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.historical}
                  onChange={this.handleChangeCheck}
                  name="historical"
                  style={{
                    color: "#e600b4",
                  }}
                />
              }
              label="Historical romance"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.willThey}
                  onChange={this.handleChangeCheck}
                  name="willThey"
                  style={{
                    color: "#e600b4",
                  }}
                />
              }
              label="Will-they/won't-they romance"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.bestFriends}
                  onChange={this.handleChangeCheck}
                  name="bestFriends"
                  style={{
                    color: "#e600b4",
                  }}
                />
              }
              label="Best friends-turned-romantic partners romance"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.dystopian}
                  onChange={this.handleChangeCheck}
                  name="dystopian"
                  style={{
                    color: "#e600b4",
                  }}
                />
              }
              label="Dystopian or paranormal romance"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.enemies}
                  onChange={this.handleChangeCheck}
                  name="enemies"
                  style={{
                    color: "#e600b4",
                  }}
                />
              }
              label="Enemies-turned-romantic partners romance"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.firstLove}
                  onChange={this.handleChangeCheck}
                  name="firstLove"
                  style={{
                    color: "#e600b4",
                  }}
                />
              }
              label="First loves"
            />
           
            <div className="otherInfoSection">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.other}
                    onChange={this.handleChangeCheck}
                    name="other"
                    style={{
                      color: "#e600b4",
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
                    className="inputHeart"
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
    label: <Hidden xsDown>Not very relevant</Hidden>,
  },
  {
    value: 50,
    label: "Somewhat important",
  },
  {
    value: 100,
    label: <Hidden xsDown>Very central to the story</Hidden>,
  },
];

export default withStyles(styles)(HeartMeter);
