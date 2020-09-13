import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { withStyles } from "@material-ui/core/styles";



import "../personalInfo/personalInfo.css";
import MultipleSelectTypeOfBook from "../../parts/multipleSelectTypeOfBook";
import MultipleSelectGenres from "../../parts/multipleSelectGenres";

class AuthorInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      readingLevels: "",
      bookType: [],
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    });
  };

  handleChangeGenre = (data) => {
    this.setState({ genres: data.genres }, () => {
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

    // const { classes } = this.props;

    return (
      <>
        <p style={title}>Author/Illustrator Information</p>

        <div className="row">
          <div className="col">
            <p>
              <FontAwesomeIcon icon={faBook} />
            </p>
          </div>
          <div className="column1">
            <p>Genre(s) of your books:</p>
          </div>
          <div className="column2">
            {/* <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Genres</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                className="inputNew"
                name="genres"
                // multiple
                required
                id="demo-simple-select"
                onChange={this.handleChange}
              >
                <MenuItem value={"Baby Books"}>Baby Books</MenuItem>
                <MenuItem value={"Picture Books"}>Picture Books</MenuItem>
                <MenuItem value={"Readers"}>Readers</MenuItem>
                <MenuItem value={"Chapter Books"}>Chapter Books</MenuItem>
                <MenuItem value={"Middle Grade Novels"}>
                  Middle Grade Novels
                </MenuItem>
                <MenuItem value={"YA"}>YA</MenuItem>
              </Select>
            </FormControl> */}
            <MultipleSelectGenres
              name="genres"
              onChange={this.handleChangeGenre}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              <FontAwesomeIcon icon={faBook} />
            </p>
          </div>
          <div className="column1">
            <p>Type of book you typically work on:</p>
          </div>
          <div className="column2">
            {/* <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Genres</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                className="inputNew"
                name="genres"
                // multiple
                required
                id="demo-simple-select"
                onChange={this.handleChange}
              >
                <MenuItem value={"Baby Books"}>Baby Books</MenuItem>
                <MenuItem value={"Picture Books"}>Picture Books</MenuItem>
                <MenuItem value={"Readers"}>Readers</MenuItem>
                <MenuItem value={"Chapter Books"}>Chapter Books</MenuItem>
                <MenuItem value={"Middle Grade Novels"}>
                  Middle Grade Novels
                </MenuItem>
                <MenuItem value={"YA"}>YA</MenuItem>
              </Select>
            </FormControl> */}
            <MultipleSelectTypeOfBook
              name="bookType"
              onChange={this.handleChangeGenre}
            />
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



export default withStyles(styles)(AuthorInfo);
