import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { withStyles } from "@material-ui/core/styles";
import "../personalInfo/personalInfo.css";
import Select from "react-select";

const options = [
  { value: "Baby Books", label: "Baby Books" },
  { value: "Picture Books", label: "Picture Books" },
  { value: "Readers", label: "Readers" },
  { value: "Chapter Books", label: "Chapter Books" },
  { value: "Middle Grade Novels", label: "Middle Grade Novels" },
  { value: "Young Adult", label: "Young Adult" },
];

const genres = [
  { value: "Realistic Fiction", label: "Realistic Fiction" },
  { value: "Historical Fiction", label: "Historical Fiction" },
  { value: "Traditional Literature", label: "Traditional Literature" },
  { value: "Science Fiction", label: "Science Fiction" },
  { value: "Fantasy", label: "Fantasy" },
  { value: "Mystery", label: "Mystery" },
  { value: "Informational", label: "Informational" },
  { value: "Biography", label: "Biography" },
  { value: "Autobiography", label: "Autobiography" },
  { value: "Poetry", label: "Poetry" },
];



class AuthorInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readingLevels: "",
      bookType: null,
      book: "",
      genreType: null,
      genre: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    });
  };

  

  handleChangeBookType = (bookType) => {
    var type;

    if (bookType == null) {
      this.setState({
        bookType,
      });
    }
    else {
    for (var i = 0, l = bookType.length; i < l; i++) {
      type += bookType[i].value + ", ";
    }
    var sliced = type.substring(9);
    // console.log(sliced);
    this.setState({ bookType });

    this.setState({ book: sliced }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    });
  }
  };

  
  handleChangeGenre = (genreType) => {
    var type;
    if (genreType == null) {
      this.setState({
        genreType
      })
    }

    else {
    for (var i = 0, l = genreType.length; i < l; i++) {
      type += genreType[i].value + ", ";
    }
    var sliced = type.substring(9);
  
    // console.log(sliced);
    this.setState({ genreType });

    this.setState({ genre: sliced }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    });
  }
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
            <div className="selectTab">
              <Select
                value={this.state.genreType}
                isMulti
                onChange={this.handleChangeGenre}
                options={genres}
                isSearchable={false}
                isClearable={false}
                placeholder="Genre(s)"
              />{" "}
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
            <p>Type of book(s) you typically work on:</p>
          </div>
          <div className="column2">
            <div className="selectTab">
              <Select
                value={this.state.bookType}
                isMulti
                onChange={this.handleChangeBookType}
                options={options}
                isClearable={false}
                isSearchable={false}
                placeholder="Type of book(s)"
              />{" "}
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



export default withStyles(styles)(AuthorInfo);
