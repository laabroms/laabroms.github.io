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

class ThrillFactor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thrill: "50",
      ghosts: false,
      monsters: false,
      vampires: false,
      superpowers: false,
      possessions: false,
      hauntings: false,
      killers: false,
      disappearances: false,
      zombies: false,
      blood: false,
      notScary: false,
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
        thrill: newValue,
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
          <span className="colorChangeThrill">THRILL FACTOR:</span> How{" "}
          <span className="colorChangeThrill"> scary/thrilling </span>did you
          find this book?
        </p>

        <div className={classes.root}>
          <ThemeProvider theme={muiTheme}>
            <Slider
              onChange={(e, value) => this.handleChange(value)}
              defaultValue={50}
              value={this.state.thrill}
              // valueLabelDisplay="auto"
              // getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-custom"
              step={1}
              marks={marks}
            />
          </ThemeProvider>
        </div>
        <p className="moreInfo">
          What parts of this book made you scared? (select all that apply)
        </p>
        {/* <div className="checkbox"></div> */}
        <div className="checkbox">
          <FormGroup col className="moreInfo">
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.ghosts}
                  onChange={this.handleChangeCheck}
                  name="ghosts"
                  style={{
                    color: "#8b008b",
                  }}
                />
              }
              label="Ghosts/Evil spirits"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.monsters}
                  onChange={this.handleChangeCheck}
                  name="monsters"
                  style={{
                    color: "#8b008b",
                  }}
                />
              }
              label="Monsters"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.vampires}
                  onChange={this.handleChangeCheck}
                  name="vampires"
                  style={{
                    color: "#8b008b",
                  }}
                />
              }
              label="Vampires"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.superpowers}
                  onChange={this.handleChangeCheck}
                  name="superpowers"
                  style={{
                    color: "#8b008b",
                  }}
                />
              }
              label="Superpowers (e.g. telekinesis)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.possessions}
                  onChange={this.handleChangeCheck}
                  name="possessions"
                  style={{
                    color: "#8b008b",
                  }}
                />
              }
              label="Possessions"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.hauntings}
                  onChange={this.handleChangeCheck}
                  name="hauntings"
                  style={{
                    color: "#8b008b",
                  }}
                />
              }
              label="Hauntings"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.killers}
                  onChange={this.handleChangeCheck}
                  name="killers"
                  style={{
                    color: "#8b008b",
                  }}
                />
              }
              label="Killers/Murderers"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.disappearances}
                  onChange={this.handleChangeCheck}
                  name="disappearances"
                  style={{
                    color: "#8b008b",
                  }}
                />
              }
              label="Disappearances"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.zombies}
                  onChange={this.handleChangeCheck}
                  name="zombies"
                  style={{
                    color: "#8b008b",
                  }}
                />
              }
              label="Zombies"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.blood}
                  onChange={this.handleChangeCheck}
                  name="blood"
                  style={{
                    color: "#8b008b",
                  }}
                />
              }
              label="Blood/Gore"
            />

            <div className="otherInfoSection">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.other}
                    onChange={this.handleChangeCheck}
                    name="other"
                    style={{
                      color: "#8b008b",
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
                    className="inputThrill"
                  />
                </FadeIn>
              ) : null}
            </div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.notScary}
                  onChange={this.handleChangeCheck}
                  name="notScary"
                  style={{
                    color: "#8b008b",
                  }}
                />
              }
              label="NOT scary"
            />
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
    label: <Hidden xsDown>Not at all</Hidden>,
  },
  {
    value: 50,
    label: "Somewhat scary",
  },
  {
    value: 100,
    label: <Hidden xsDown>Very scary</Hidden>,
  },
];

export default withStyles(styles)(ThrillFactor);
