import React from "react";
import './clearnessCalculator.css';
import { withStyles } from "@material-ui/core/styles";

import Slider from "@material-ui/core/Slider";

class ClearnessCalculator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        clearness: '50'
      }
    }


    


    
   handleChange = (newValue) => {
    this.setState(
      {
        clearness: newValue,
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(this.state);
        }
      }
    );

   }

   render() {
     const { classes } = this.props;
   
   
    return (
      <>
        <p className="title1">
          {" "}
          <span className="colorChange1">CLEARNESS CALCULATOR:</span> Is it easy
          to read and follow the{" "}
          <span className="colorChange1">words on each page?</span>
        </p>

        <div className={classes.root}>
          <Slider
            // value={data.clearnessInt}
            onChange={(e, value) => this.handleChange(value)}
            defaultValue={50}
            value={this.state.clearness}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-custom"
            step={5}
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
    // background: 'linear-gradient(to right, red, green)',
    // backgroundOpacity: '50%',
    paddingTop: 10,

    border: "5px solid",
    borderColor: "#d1d1d1",
    // borderImageSource: "linear-gradient(45deg, #c41b1b, #45f542)",
    borderImageSlice: "1",
    borderRadius: 10,
  },
});

const marks = [
  {
    value: 0,
    label: "No, very unclear",
  },
  {
    value: 50,
    label: "Sometimes clear",
  },
  {
    value: 100,
    label: "Yes, very clear",
  },
  
];

function valuetext(value) {
  return `${value}`;
}

// function valueLabelFormat(value) {
//   return marks.findIndex((mark) => mark.value === value) + 1;
// }

export default withStyles(styles)(ClearnessCalculator);
