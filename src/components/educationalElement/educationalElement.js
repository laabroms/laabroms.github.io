import React from "react";
import "./educationalElement.css";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

class EducationalElement extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        educational: 50
      }
    }



    
   handleChange = (newValue) => {
    
    this.setState({
      educational: newValue
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
      <p className="title2">
        <span className="colorChange2">EDUCATIONAL ELEMENT:</span> Do you think
        this book has{" "}
        <span className="colorChange2">significant educational value?</span>
      </p>

      <div className={classes.root}>
        <Slider
          onChange={(e, value) => this.handleChange(value)}
          defaultValue={50}
          value={this.state.educational}
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
    paddingRight: "9%",
    backgroundColor: "#e3e3e3",
    borderColor: "#d1d1d1",
    border: "5px solid",
    borderRadius: 10,

    // borderImageSource: "linear-gradient(to right, #f87D1D, #5222E2)",
    borderImageSlice: "1",
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

// function valueLabelFormat(value) {
//   return marks.findIndex((mark) => mark.value === value) + 1;
// }


export default withStyles(styles)(EducationalElement);
