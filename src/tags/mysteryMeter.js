import React from "react";
import "./younger.css";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

class MysteryMeter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mystery: "50",
      funExciting: false,
      intense: false,
      mix: false,
      
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
        mystery: newValue,
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
          <span className="colorChangeMystery">MYSTERY METER:</span> How{" "}
          <span className="colorChangeMystery"> mysterious </span>is this book?
        </p>

        <div className={classes.root}>
          <ThemeProvider theme={muiTheme}>
            <Slider
              onChange={(e, value) => this.handleChange(value)}
              defaultValue={50}
              value={this.state.mystery}
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
          <span className="colorChangeMystery"> mystery</span> does this book explore?
        </p>
        {/* <div className="checkbox"></div> */}
        <div className="checkbox">
          <FormGroup col className="moreInfo">
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.funExciting}
                  onChange={this.handleChangeCheck}
                  name="funExciting"
                  style={{
                    color: "#00588f",
                  }}
                />
              }
              label="Fun and Exciting"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.intense}
                  onChange={this.handleChangeCheck}
                  name="intense"
                  style={{
                    color: "#00588f",
                  }}
                />
              }
              label="Intense and Nerve-Wrecking"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.mix}
                  onChange={this.handleChangeCheck}
                  name="mix"
                  style={{
                    color: "#00588f",
                  }}
                />
              }
              label="Mix of both"
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
    label: "Not much",
  },
  {
    value: 50,
    label: "A good amount",
  },
  {
    value: 100,
    label: "Packed with twists and turns",
  },
];

export default withStyles(styles)(MysteryMeter);
