import React from "react";
import "./accessibilityScore.css";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

class AccessibilityScore extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        accessibilityInt: '33',
        accessibility: 'Somewhat accessible'
      }
    }


    

    
   handleChange = (newValue) => {
    //  alert(newValue);
     if(newValue === 0) {
       this.setState(
         {
           accessibilityInt: "0",
           accessibility: "Inaccessible",
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
           accessibilityInt: "33",
           accessibility: "Somewhat accessible",
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
           accessibilityInt: "66",
           accessibility: "Age-appropriate",
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
           accessibilityInt: "100",
           accessibility: "N/A",
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
        <span className="colorChange6">ACCESSIBILITY SCORE:</span> How
        accessible is this{" "}
        <span className="colorChange6">book's language?</span>
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
    label: "Inaccessible",
  },
  {
    value: 33,
    label: "Somewhat accessible",
  },
  {
    value: 66,
    label: "Age-appropriate",
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


export default withStyles(styles)(AccessibilityScore);
