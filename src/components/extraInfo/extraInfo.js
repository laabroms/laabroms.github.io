import React from 'react';

class ExtraInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      extraInfo: "",
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
            Is there anything else you want to tell us? If you want to write
            a review or even just a sentence, we would love to hear your
            thoughts!
          </p>

          <textarea
            className="textarea"
            required
            name="extraInfo"
            // value={this.state.extraInfo}
            // onChange={(e) =>
            //   this.setState({ extraInfo: e.target.value })
            // }
            onChange={this.handleChange}
          ></textarea>
        </div>
      </div>
    );
  }
}

export default ExtraInfo;