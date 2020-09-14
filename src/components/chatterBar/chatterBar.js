import React from "react";
import "./chatterBar.css";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

class ChatterBar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        chatter: '50',
        
      }
    }


    

    
   handleChange = (newValue) => {

    this.setState({
      chatter: newValue,
    }, () => {
           if (this.props.onChange) {
             this.props.onChange(this.state);
           }
         })

   }

   render() {
     const { classes } = this.props;
   

     

  return (
    <>
      <p className="title">
        <span className="colorChange3">CHATTER BAR:</span> Did you want to{" "}
        <span className="colorChange3">talk</span> about this book after you
        finished reading it?
      </p>

      <div className={classes.root}>
        <Slider
          onChange={(e, value) => this.handleChange(value)}
          defaultValue={50}
          value={this.state.chatter}
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
    paddingTop: 10,
    paddingRight: "9%",
    backgroundColor: "#e3e3e3",
    border: "5px solid",
    borderColor: "#d1d1d1",
    // borderImageSource: "linear-gradient(to right, #f87D1D, #5222E2)",
    borderImageSlice: "1",
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

// function valueLabelFormat(value) {
//   return marks.findIndex((mark) => mark.value === value) + 1;
// }


export default withStyles(styles)(ChatterBar);
