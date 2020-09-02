import React from "react";
import "./educationalElement.css";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

class EducationalElement extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        educationalInt: '33',
        educational: 'Sort of'
      }
    }



    
   handleChange = (newValue) => {
    //  alert(newValue);
     if(newValue === 0) {
       this.setState(
         {
           educationalInt: "0",
           educational: "Not at all",
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
           educationalInt: "33",
           educational: "Sort of",
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
           educationalInt: "66",
           educational: "Definitely",
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
           educationalInt: "100",
           educational: "N/A",
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
      <p className="title2">
        <span className="colorChange2">EDUCATIONAL ELEMENT:</span> Do you
        think this book has{" "}
        <span className="colorChange2">significant educational value?</span>
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


export default withStyles(styles)(EducationalElement);
