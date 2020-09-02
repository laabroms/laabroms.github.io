import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faUserCircle, faImage } from "@fortawesome/free-solid-svg-icons";
import "../personalInfo/personalInfo.css";

export default class PlatformInfo extends React.Component {
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
            <input
              name="platform"
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
              <FontAwesomeIcon icon={faUserCircle} />
            </p>
          </div>
          <div className="column1">
            <p>Account Name:</p>
          </div>
          <div className="column2">
            <input
              name="accountName"
              className="input"
              type="text"
              required
              // value={this.state.age}
              // onChange={(e) => this.setState({ age: e.target.value })}
              onChange={this.handleChange}
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              <FontAwesomeIcon icon={faBook} />
            </p>
          </div>
          <div className="column1">
            <p>Typical age range of books you review:</p>
          </div>
          <div className="column2">
            <input
              name="ageRange"
              className="input"
              type="number"
              min='0'
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
