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


class ActionAverage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: "50",
      gradualAdventure: false,
      bursts: false,
      goodVsEvil: false,
      roadTrip: false,
      findSomething: false,
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
        action: newValue,
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
          <span className="colorChangeAction">ACTION AVERAGE:</span> What was
          the <span className="colorChangeAction"> action and adventure </span>{" "}
          like in this book?
        </p>

        <div className={classes.root}>
          <ThemeProvider theme={muiTheme}>
            <Slider
              onChange={(e, value) => this.handleChange(value)}
              defaultValue={50}
              value={this.state.action}
              // valueLabelDisplay="auto"
              // getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-custom"
              step={1}
              marks={marks}
            />
          </ThemeProvider>
        </div>
        <p className="moreInfo">
          What type of
          <span className="colorChangeAction"> action and adventure </span> was
          in this book? (select all that apply)
        </p>
        {/* <div className="checkbox"></div> */}
        <div className="checkbox">
          <FormGroup col className="moreInfo">
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.gradualAdventure}
                  onChange={this.handleChangeCheck}
                  name="gradualAdventure"
                  style={{
                    color: "#003e9c",
                  }}
                />
              }
              label="Gradually building adventure"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.bursts}
                  onChange={this.handleChangeCheck}
                  name="bursts"
                  style={{
                    color: "#003e9c",
                  }}
                />
              }
              label="Quick bursts of action"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.goodVsEvil}
                  onChange={this.handleChangeCheck}
                  name="goodVsEvil"
                  style={{
                    color: "#003e9c",
                  }}
                />
              }
              label="Good vs. evil battles"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.roadTrip}
                  onChange={this.handleChangeCheck}
                  name="roadTrip"
                  style={{
                    color: "#003e9c",
                  }}
                />
              }
              label="Road trip adventure"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.findSomething}
                  onChange={this.handleChangeCheck}
                  name="findSomething"
                  style={{
                    color: "#003e9c",
                  }}
                />
              }
              label="Adventure to find something"
            />

            <div className="otherInfoSection">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.other}
                    onChange={this.handleChangeCheck}
                    name="other"
                    style={{
                      color: "#003e9c",
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
                    className="inputAction"
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
    label: <Hidden xsDown>Slow</Hidden>,
  },
  {
    value: 50,
    label: "Some action",
  },
  {
    value: 100,
    label: <Hidden smDown>Edge-of-my-seat exciting</Hidden>,
  },
];



export default withStyles(styles)(ActionAverage);
