import React from "react";
import "./discussionDial.css";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

class DiscussionDial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      discussionInt: "33",
      discussion: "Some discussion",
    };
  }

  handleChange = (newValue) => {
    //  alert(newValue);
    if (newValue === 0) {
      this.setState(
        {
          discussionInt: "0",
          discussion: "Not at all",
        },
        () => {
          if (this.props.onChange) {
            this.props.onChange(this.state);
          }
        }
      );
    } else if (newValue === 33) {
      this.setState(
        {
          discussionInt: "33",
          discussion: "Some discussion",
        },
        () => {
          if (this.props.onChange) {
            this.props.onChange(this.state);
          }
        }
      );
    } else if (newValue === 66) {
      this.setState(
        {
          discussionInt: "66",
          discussion: "Definitely",
        },
        () => {
          if (this.props.onChange) {
            this.props.onChange(this.state);
          }
        }
      );
    } else if (newValue === 100) {
      this.setState(
        {
          discussionInt: "100",
          discussion: "N/A",
        },
        () => {
          if (this.props.onChange) {
            this.props.onChange(this.state);
          }
        }
      );
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <p className="title">
          <span className="colorChangeDiscussion">DISCUSSION DIAL:</span> Do you think
          that this book would{" "}
          <span className="colorChangeDiscussion">prompt meaningful discussions?</span>
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
    label: "Some discussion",
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

export default withStyles(styles)(DiscussionDial);
