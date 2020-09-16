import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faChild } from "@fortawesome/free-solid-svg-icons";
import "./teacherInfo.css";
import Select from "react-select";



const options = [
  { value: "Preschool", label: "Preschool" },
  { value: "Kindergarten", label: "Kindergarten" },
  { value: "Elementary", label: "Elementary" },
  { value: "Middle School", label: "Middle School" },
  { value: "High School", label: "High School" },
  
];

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
  handleChangeGrade = (e) => {
    this.setState(
      {
        gradeLevel: e.value,
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(this.state);
        }
      }
    );
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
            <div className="selectTab">
              <Select
                name="gradeLevel"
                onChange={this.handleChangeGrade}
                options={options}
                placeholder="Grade Level"
              />
            </div>
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
            <div className="selectTabPlatform">
              <input
                className="inputField"
                name="school"
                placeholder="School"
                required
                onChange={this.handleChange}
                autoCapitalize
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default TeacherInfo;
