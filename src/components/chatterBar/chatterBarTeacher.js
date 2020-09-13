import React from "react";
import "./chatterBar.css";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

class ChatterBarTeacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatter: "50",
    };
  }

  handleChange = (newValue) => {
        this.setState(
          {
            chatter: newValue,
          },
          () => {
            if (this.props.onChange) {
              this.props.onChange(this.state);
            }
          }
        );

    //  alert(newValue);
    // if (newValue === 0) {
    //   this.setState(
    //     {
    //       chatter: "0",
    //       chatterVal: "Not at all",
    //     },
    //     () => {
    //       if (this.props.onChange) {
    //         this.props.onChange(this.state);
    //       }
    //     }
    //   );
    // } else if (newValue === 33) {
    //   this.setState(
    //     {
    //       chatter: "33",
    //       chatterVal: "Sort of",
    //     },
    //     () => {
    //       if (this.props.onChange) {
    //         this.props.onChange(this.state);
    //       }
    //     }
    //   );
    // } else if (newValue === 66) {
    //   this.setState(
    //     {
    //       chatter: "66",
    //       chatterVal: "Definitely",
    //     },
    //     () => {
    //       if (this.props.onChange) {
    //         this.props.onChange(this.state);
    //       }
    //     }
    //   );
    // } else if (newValue === 100) {
    //   this.setState(
    //     {
    //       chatter: "100",
    //       chatterVal: "N/A",
    //     },
    //     () => {
    //       if (this.props.onChange) {
    //         this.props.onChange(this.state);
    //       }
    //     }
    //   );
    // }
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <p className="title">
          <span className="colorChange3">CHATTER BAR:</span> Could you imagine
          this book{" "}
          <span className="colorChange3">
            sparking conversation among your students?
          </span>
        </p>

        <div className={classes.root}>
          <Slider
            onChange={(e, value) => this.handleChange(value)}
            defaultValue={50}
            value={this.state.chatter}
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
    label: "Definitely",
  },
 
];

function valuetext(value) {
  return `${value}`;
}

// function valueLabelFormat(value) {
//   return marks.findIndex((mark) => mark.value === value) + 1;
// }

export default withStyles(styles)(ChatterBarTeacher);
