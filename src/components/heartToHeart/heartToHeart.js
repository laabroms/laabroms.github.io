import React from "react";
import "./heartToHeart.css";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

class HeartToHeart extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        heart: '50'
      }
    }


    

    
   handleChange = (newValue) => {
    this.setState({
        heart: newValue
    }, () => {
        if (this.props.onChange) {
            this.props.onChange(this.state)
        }
    })
    

   }

   render() {
     const { classes } = this.props;
   



  return (
    <>
      <p className="title">
        <span className="colorChange4">HEART TO HEART:</span> Do you think that
        this book had a <span className="colorChange4">positive message?</span>
      </p>

      <div className={classes.root}>
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
    border: "5px solid",
    borderColor: "#d1d1d1",
    // borderImageSource: "linear-gradient(45deg, #c41b1b, #45f542)",
    // borderImageSlice: "1",
    // borderRadius: 10,
    paddingRight: "9%",
    backgroundColor: "#e3e3e3",
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
    label: "Sort of",
  },
  {
    value: 100,
    label: "Definitely",
  },
  
];

function valuetext(value) {
  return `${value}`;
}



export default withStyles(styles)(HeartToHeart);
