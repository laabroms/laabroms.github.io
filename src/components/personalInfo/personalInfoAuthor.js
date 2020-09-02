import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMapMarkerAlt,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import "./personalInfo.css";

export default class PersonalInfoAuthor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      country: "",
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
        <p style={title}>Personal Information</p>

        <div className="row">
          <div className="col" id="name">
            <p>
              <FontAwesomeIcon icon={faUser} />
            </p>
          </div>
          <div className="column1" id="name">
            <p>Your Name:</p>
          </div>
          <div className="column2">
            <input
              name="name"
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
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </p>
          </div>
          <div className="column1">
            <p>State/Province:</p>
          </div>
          <div className="column2">
            <input
              name="location"
              className="input"
              required
              // value={this.state.location}
              // onChange={(e) => this.setState({ location: e.target.value })}
              onChange={this.handleChange}
            ></input>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p>
              <FontAwesomeIcon icon={faGlobe} />
            </p>
          </div>
          <div className="column1">
            <p>Country:</p>
          </div>
          <div className="column2">
            <input
              name="country"
              className="input"
              required
              // value={this.state.country}
              // onChange={(e) => this.setState({ country: e.target.value })}
              onChange={this.handleChange}
            ></input>
          </div>
        </div>
      </>
    );
  }
}
