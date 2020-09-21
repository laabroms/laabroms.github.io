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

class SuspenseScale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suspense: "50",
      characters: false,
      pacing: false,
      conflict: false,
      setting: false,
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
        suspense: newValue,
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
          <span className="colorChangeSuspense">SUSPENSE SCALE:</span> How{" "}
          <span className="colorChangeSuspense"> suspenseful </span>is this book?
        </p>

        <div className={classes.root}>
          <ThemeProvider theme={muiTheme}>
            <Slider
              onChange={(e, value) => this.handleChange(value)}
              defaultValue={50}
              value={this.state.suspense}
              // valueLabelDisplay="auto"
              // getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-custom"
              step={1}
              marks={marks}
            />
          </ThemeProvider>
        </div>
        <p className="moreInfo">
          What elements of the book did you find <span className='colorChangeSuspense'> suspenseful and intriguing </span>? (select all that apply)
        </p>
        {/* <div className="checkbox"></div> */}
        <div className="checkbox">
          <FormGroup col className="moreInfo">
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.characters}
                  onChange={this.handleChangeCheck}
                  name="characters"
                  style={{
                    color: "#00659c",
                  }}
                />
              }
              label="The characters/their identities (who's the 'good guy' and who's the 'bad guy'?)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.pacing}
                  onChange={this.handleChangeCheck}
                  name="pacing"
                  style={{
                    color: "#00659c",
                  }}
                />
              }
              label="The pacing"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.conflict}
                  onChange={this.handleChangeCheck}
                  name="conflict"
                  style={{
                    color: "#00659c",
                  }}
                />
              }
              label="The conflict"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.setting}
                  onChange={this.handleChangeCheck}
                  name="setting"
                  style={{
                    color: "#00659c",
                  }}
                />
              }
              label="The setting/atmosphere"
            />
           
            <div className="otherInfoSection">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.other}
                    onChange={this.handleChangeCheck}
                    name="other"
                    style={{
                      color: "#00659c",
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
                    className="inputSuspense"
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
    label: "Boring and not suspenseful",
  },
  {
    value: 50,
    label: "Somewhat suspenseful",
  },
  {
    value: 100,
    label: "Very suspenseful",
  },
];

export default withStyles(styles)(SuspenseScale);
