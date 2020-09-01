import React from 'react';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: "",
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
      <div>
        <div>
          <p className="titleText1">
            14. Thank you for your input! What did you like or not like about
            our survey? We appreciate any and all feedback.
          </p>

          <textarea
            className="textarea"
            required
            name="feedback"
            // value={this.state.surveyAdvice}
            // onChange={(e) =>
            //   this.setState({ surveyAdvice: e.target.value })
            // }
            onChange={this.handleChange}
          ></textarea>
        </div>
      </div>
    );
  }
}

export default Feedback;