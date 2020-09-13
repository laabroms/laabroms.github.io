import React from "react";
import "./favLeastFav.css";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";


class FavLeastFav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: "",
      leastFav: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    });
  };

  render() {

    const { classes } = this.props;


    return (
      <>
        <p className="favTopInfo">
          What was your <span className="colorChange8">FAVORITE </span>
          and <span className="colorChange9">LEAST FAVORITE </span>
          part of the book?
        </p>

        <div className="row">
          <div className="column11" id="name">
            <p>Favorite:</p>
          </div>
          <div className="column2">
            
            <div className={classes.root}>
              <TextField
                id="standard-basic"
                name="favorite"
                label="Favorite"
                required
                className="inputNew1"
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column12">
            <p>Least Favorite:</p>
          </div>
          <div className="column2">
            <div className={classes.root}>
              <TextField
                id="standard-basic"
                name="leastFav"
                label="Least Favorite"
                required
                className="inputNew1"
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}


const styles = (theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
});

export default withStyles(styles)(FavLeastFav);
