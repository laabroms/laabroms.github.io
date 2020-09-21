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

class FantasyFactor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fantasy: "50",
      setting: false,
      characters: false,
      magic: false,
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
        fantasy: newValue,
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
          <span className="colorChangeFantasy">FANTASY FACTOR:</span> How immersive is the fantasy world the author creates in this{" "}
          <span className="colorChangeFantasy">fantasy book?</span>
        </p>

        <div className={classes.root}>
          <ThemeProvider theme={muiTheme}>
            <Slider
              onChange={(e, value) => this.handleChange(value)}
              defaultValue={50}
              value={this.state.fantasy}
              // valueLabelDisplay="auto"
              // getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-custom"
              step={1}
              marks={marks}
            />
          </ThemeProvider>
        </div>
        <p className="moreInfo">
          What were you favorite 
          <span className="colorChangeFantasy"> fantasy elements</span> of this book?
        </p>
        {/* <div className="checkbox"></div> */}
        <div className="checkbox">
          <FormGroup col className="moreInfo">
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.setting}
                  onChange={this.handleChangeCheck}
                  name="setting"
                  style={{
                    color: "#ff00a6",
                  }}
                />
              }
              label="The setting"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.characters}
                  onChange={this.handleChangeCheck}
                  name="characters"
                  style={{
                    color: "#ff00a6",
                  }}
                />
              }
              label="The characters"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.magic}
                  onChange={this.handleChangeCheck}
                  name="magic"
                  style={{
                    color: "#ff00a6",
                  }}
                />
              }
              label="The magic"
            />

            <div className="otherInfoSection">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.other}
                    onChange={this.handleChangeCheck}
                    name="other"
                    style={{
                      color: "#ff00a6",
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
                    className="inputFantasy"
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
    label: "Somewhat immersive",
  },
  {
    value: 50,
    label: "Very immersive",
  },
  {
    value: 100,
    label: "Completely captivating",
  },
];

// function valuetext(value) {
//   return `${value}`;
// }

// function valueLabelFormat(value) {
//   return marks.findIndex((mark) => mark.value === value) + 1;
// }

export default withStyles(styles)(FantasyFactor);
