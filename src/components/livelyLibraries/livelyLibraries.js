import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import './livelyLibraries.css';

class LivelyLibraries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      livelyLibraries: "50",
    };
  }

  handleChange = (newValue) => {
    this.setState({
        livelyLibraries: newValue
    }, () => {
        if (this.props.onChange) {
            this.props.onChange(this.state)
        }
    })



  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <p className="title">
          <span className="colorChangelivelyLibraries">LIVELY LIBRARIES:</span>{" "}
          Do you think this book would be{" "}
          <span className="colorChangelivelyLibraries">popular</span> in your
          classroom library?
        </p>

        <div className={classes.root}>
          <Slider
            onChange={(e, value) => this.handleChange(value)}
            defaultValue={50}
            value={this.state.livelyLibraries}
            // valueLabelDisplay="auto"
            // getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-custom"
            step={1}
            marks={marks}
          />
        </div>
      </>
    );
  }
}

const styles = (theme) => ({
  root: {
    width: "80%",
    paddingLeft: "10%",
    paddingRight: "9%",
    backgroundColor: "#e3e3e3",
    borderColor: "#d1d1d1",
    border: "5px solid",
    paddingTop: 10,
    borderRadius: 10,
    
  },
});

const marks = [
  {
    value: 0,
    label: "Not at all",
  },
  {
    value: 50,
    label: "Maybe",
  },
  {
    value: 100,
    label: "Definitely",
  },
  
];

function valuetext(value) {
  return `${value}`;
}



export default withStyles(styles)(LivelyLibraries);
