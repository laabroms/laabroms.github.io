import React from "react";

import "./contentWarning.css";

export default class ContentWarning extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentWarning: "",
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
    return (
      <>
        <p style={{ paddingTop: 35 }} className="textTop">
          {" "}Any 
          <span className="colorContent"> CONTENT WARNINGS {" "}</span>
          readers should know about?
         
        </p>

        <textarea
          className="textarea"
          required
          name="classroomCreativity"
          onChange={this.handleChange}
        ></textarea>
      </>
    );
  }
}
