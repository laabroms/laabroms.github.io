import React from "react";
import './clearnessCalculator.css';
import { withStyles } from "@material-ui/core/styles";

import Slider from "@material-ui/core/Slider";

class ClearnessCalculator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        clearnessInt: '33',
        clearness: 'Sometimes clear'
      }
    }


    // const [data, setData] = useState({
    //   clearnessInt: '33',
    //   clearness: 'Sometimes clear'
    // });


    
   handleChange = (newValue) => {
    //  alert(newValue);
     if(newValue === 0) {
       this.setState(
         {
           clearnessInt: "0",
           clearness: "No, very unclear",
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
           clearnessInt: "33",
           clearness: "Sometimes clear",
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
           clearnessInt: "66",
           clearness: "Yes, very clear",
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
           clearnessInt: "100",
           clearness: "N/A",
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
      
        <p className="title1">
          {" "}
          <span className='colorChange1'>
          CLEARNESS CALCULATOR:
          </span>{" "}
          Is it easy to read and follow the{" "}
          <span className='colorChange1'>
            words on each page?
          </span>
        </p>

        <div className={classes.root}>
      
      <Slider
        // value={data.clearnessInt}
        onChange={(e, value)=> this.handleChange(value)}
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
    label: "No, very unclear",
  },
  {
    value: 33,
    label: "Sometimes clear",
  },
  {
    value: 66,
    label: "Yes, very clear",
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

export default withStyles(styles)(ClearnessCalculator);
