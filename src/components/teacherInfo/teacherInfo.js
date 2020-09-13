import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faChild } from "@fortawesome/free-solid-svg-icons";
import "./teacherInfo.css";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";


class TeacherInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gradeLevel: "",
      school: "",
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
        <p style={title}>Teacher Information</p>

        <div className="row">
          <div className="col" id="name">
            <p>
              <FontAwesomeIcon icon={faChild} />
            </p>
          </div>
          <div className="column1" id="name">
            <p>Grade Level:</p>
          </div>
          <div className="column2">
            
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Grade Level</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                className="inputNew"
                name="gradeLevel"
                required
                id="demo-simple-select"
                // value={this.state.age}
                onChange={this.handleChange}
              >
                <MenuItem value={'Preschool'}>Preschool</MenuItem>
                <MenuItem value={'Kindergarten'}>Kindergarten</MenuItem>
                <MenuItem value={'Elementary'}>Elementary School</MenuItem>
                <MenuItem value={'Middle School'}>Middle School</MenuItem>
                <MenuItem value={'High School'}>High School</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p>
              <FontAwesomeIcon icon={faSchool} />
            </p>
          </div>
          <div className="column1">
            <p>School:</p>
          </div>
          <div className="column2">
            <div className={classes.root}>
              <TextField
                id="standard-basic"
                name="school"
                label="School"
                required
                className="inputNewTeacher"
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

export default withStyles(styles)(TeacherInfo);
