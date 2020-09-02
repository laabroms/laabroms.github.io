import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faChild } from "@fortawesome/free-solid-svg-icons";
import "../personalInfo/personalInfo.css";

export default class TeacherInfo extends React.Component {
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
            <input
              name="gradeLevel"
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
              <FontAwesomeIcon icon={faSchool} />
            </p>
          </div>
          <div className="column1">
            <p>School:</p>
          </div>
          <div className="column2">
            <input
              name="school"
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
