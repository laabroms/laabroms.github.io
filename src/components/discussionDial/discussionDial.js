import React from "react";
import "./discussionDial.css";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

class DiscussionDial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      discussion: "50",
    };
  }

  handleChange = (newValue) => {

    this.setState({
        discussion: newValue
    }, () => {
        if (this.props.onChange) {
            this.props.onChange(this.state);
        }
    })
   
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <p className="title">
          <span className="colorChangeDiscussion">DISCUSSION DIAL:</span> Do you
          think that this book would{" "}
          <span className="colorChangeDiscussion">
            prompt meaningful discussions?
          </span>
        </p>

        <div className={classes.root}>
          <Slider
            onChange={(e, value) => this.handleChange(value)}
            defaultValue={50}
            value={this.state.discussion}
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
    borderColor: "#d1d1d1",
    border: "5px solid",
    paddingTop: 10,
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
    label: "Some discussion",
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

export default withStyles(styles)(DiscussionDial);
