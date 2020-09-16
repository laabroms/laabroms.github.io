import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faUserCircle, faImage } from "@fortawesome/free-solid-svg-icons";
import "../personalInfo/personalInfo.css";
import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MultipleSelectTypeOfBook from '../../parts/multipleSelectTypeOfBook';


class PlatformInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      platform: "",
      accountName: "",
      ageRange: '',
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
    const title = {
      paddingTop: 20,
      color: "#797D7F",
    };
    const { classes } = this.props;


    return (
      <>
        <p style={title}>Platform Information</p>

        <div className="row">
          <div className="col" id="name">
            <p>
              <FontAwesomeIcon icon={faImage} />
            </p>
          </div>
          <div className="column1" id="name">
            <p>Platform Type (Youtube, Blog, etc.):</p>
          </div>
          <div className="column2">
            
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Platform Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                className="inputNew"
                name="platform"
                required
                id="demo-simple-select"
                // value={this.state.age}
                onChange={this.handleChange}
              >
                <MenuItem value={'YouTube'}>YouTube</MenuItem>
                <MenuItem value={'Blog'}>Blog</MenuItem>
                <MenuItem value={'?'}>?</MenuItem>
                
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p>
              <FontAwesomeIcon icon={faUserCircle} />
            </p>
          </div>
          <div className="column1">
            <p>Account Name:</p>
          </div>
          <div className="column2">
          <div className={classes.root}>
            <TextField
              id="standard-basic"
              name="accountName"
              label="Account Name"
              className="inputNew"
              onChange={this.handleChange}
            />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              <FontAwesomeIcon icon={faBook} />
            </p>
          </div>
          <div className="column1">
            <p>Type of books you typically review:</p>
          </div>
          <div className="column2">
            {/* <input
              name="ageRange"
              className="input"
              type="number"
              min="0"
              required
              // value={this.state.age}
              // onChange={(e) => this.setState({ age: e.target.value })}
              onChange={this.handleChange}
            ></input> */}
            <MultipleSelectTypeOfBook />
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

export default withStyles(styles)(PlatformInfo);
