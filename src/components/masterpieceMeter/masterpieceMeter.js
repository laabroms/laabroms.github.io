import React from "react";
import "./masterpieceMeter.css";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

class MasterpieceMeter extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        masterpieceInt: '33',
        masterpiece: 'They were okay'
      }
    }



    
   handleChange = (newValue) => {
    //  alert(newValue);
     if(newValue === 0) {
       this.setState(
         {
           masterpieceInt: "0",
           masterpiece: "Not at all",
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
           masterpieceInt: "33",
           masterpiece: "They were okay",
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
           masterpieceInt: "66",
           masterpiece: "Loved them",
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
           masterpieceInt: "100",
           masterpiece: "N/A",
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
        <span className="colorChange">MASTERPIECE METER:</span> Are the
        pictures in this book <span className="colorChange">enjoyable?</span>
      </p>

      <div className={classes.root}>
        <Slider
          // value={data.masterpieceInt}
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
    paddingRight:'8%',
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
    label: "They were okay",
  },
  {
    value: 66,
    label: "Loved them",
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


export default withStyles(styles)(MasterpieceMeter);
