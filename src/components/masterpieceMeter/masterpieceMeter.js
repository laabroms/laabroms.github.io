import React from "react";
import "./masterpieceMeter.css";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

class MasterpieceMeter extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        masterpiece: '50'
      }
    }



    
   handleChange = (newValue) => {
    this.setState({
      masterpiece: newValue
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
        <span className="colorChange">MASTERPIECE METER:</span> Are the pictures
        in this book <span className="colorChange">enjoyable?</span>
      </p>

      <div className={classes.root}>
        <Slider
          // value={data.masterpieceInt}
          onChange={(e, value) => this.handleChange(value)}
          defaultValue={50}
          value={this.state.masterpiece}
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
    paddingTop: 10,
    borderColor: "#d1d1d1",
    border: "5px solid",
    // borderImageSource: "linear-gradient(to right, red, orange)",
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
    label: "They were okay",
  },
  {
    value: 100,
    label: "Loved them",
  },
  
];

function valuetext(value) {
  return `${value}`;
}



export default withStyles(styles)(MasterpieceMeter);
