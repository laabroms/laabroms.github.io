import React from "react";
import "./feelingFactor.css";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

class FeelingFactor extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        feeling: '50'
      }
    }


    

    
   handleChange = (newValue) => {

    this.setState({
        feeling: newValue
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
        <span className="colorChange5">FEELING FACTOR:</span> Do you think this
        book effectively explores ways for readers to{" "}
        <span className="colorChange5">
          navigate difficult emotions and social situations?
        </span>
      </p>

      <div className={classes.root}>
        <Slider
          onChange={(e, value) => this.handleChange(value)}
          defaultValue={50}
          value={this.state.feeling}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-custom"
          step={10}
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
    paddingRight: "10%",
    backgroundColor: "#e3e3e3",
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
    label: "Yes, very much so",
  },
  
];

function valuetext(value) {
  return `${value}`;
}

// function valueLabelFormat(value) {
//   return marks.findIndex((mark) => mark.value === value) + 1;
// }


export default withStyles(styles)(FeelingFactor);
