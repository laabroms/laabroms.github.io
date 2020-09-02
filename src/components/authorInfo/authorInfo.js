import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faPencilAlt
} from "@fortawesome/free-solid-svg-icons";
import "../personalInfo/personalInfo.css";

export default class AuthorInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: "",
      ageGroup: "",
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

    return (
      <>
        <p style={title}>Author/Illustrator Information</p>

        <div className="row">
          <div className="col" id="name">
            <p>
              <FontAwesomeIcon icon={faBook} />
            </p>
          </div>
          <div className="column1" id="name">
            <p>Genre(s) of your books:</p>
          </div>
          <div className="column2">
            <input
              name="genre"
              className="input"
              required
              // value={this.state.name}
              // onChange={(e) => this.setState({ name: e.target.value })}
              onChange={this.handleChange}
            ></input>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p>
              <FontAwesomeIcon icon={faPencilAlt} />
            </p>
          </div>
          <div className="column1">
            <p>Age group of books you work on:</p>
          </div>
          <div className="column2">
            <input
              name="ageGroup"
              className="input"
            //   type="number"
            //   min="0"
              required
              // value={this.state.age}
              // onChange={(e) => this.setState({ age: e.target.value })}
              onChange={this.handleChange}
            ></input>
          </div>
        </div>

        
      </>
    );
  }
}
