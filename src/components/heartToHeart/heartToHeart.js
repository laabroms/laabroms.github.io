import React from "react";
import "./heartToHeart.css";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

class HeartToHeart extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        heartInt: '33',
        heart: 'Sort of'
      }
    }


    

    
   handleChange = (newValue) => {
    //  alert(newValue);
     if(newValue === 0) {
       this.setState(
         {
           heartInt: "0",
           heart: "Not at all",
         },
         () => {
           if (this.props.onChange) {
             this.props.onChange(this.state);
           }
         }
       );
     }
     else if (newValue === 33) {
       this.setState(
         {
           heartInt: "33",
           heart: "Sort of",
         },
         () => {
           if (this.props.onChange) {
             this.props.onChange(this.state);
           }
         }
       );
     }
     else if (newValue === 66) {
       this.setState(
         {
           heartInt: "66",
           heart: "Definitely",
         },
         () => {
           if (this.props.onChange) {
             this.props.onChange(this.state);
           }
         }
       );
     }
     else if (newValue === 100) {
       this.setState(
         {
           heartInt: "100",
           heart: "N/A",
         },
         () => {
           if (this.props.onChange) {
             this.props.onChange(this.state);
           }
         }
       );
     }

   }

   render() {
     const { classes } = this.props;
   



  return (
    <>
      <p className="title">
        <span className="colorChange4">HEART TO HEART:</span> Do you think
        that this book had a{" "}
        <span className="colorChange4">positive message?</span>
      </p>

      <div className={classes.root}>
        <Slider
          onChange={(e, value) => this.handleChange(value)}
          defaultValue={33}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-restrict"
          step={null}
          // valueLabelDisplay="auto"
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
    paddingLeft: "12%",
    paddingRight: "8%",
    backgroundColor: "#e3e3e3",
  },
});

const marks = [
  {
    value: 0,
    label: "Not at all",
  },
  {
    value: 33,
    label: "Sort of",
  },
  {
    value: 66,
    label: "Definitely",
  },
  {
    value: 100,
    label: "N/A",
  },
];

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}


export default withStyles(styles)(HeartToHeart);
