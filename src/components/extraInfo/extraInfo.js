import React from 'react';

class ExtraInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      extraInfo: "",
    };
  }

  render() {
    return (
      <div>
        <div>
          <p className="titleText1">
            13. Is there anything else you want to tell us? If you want to write
            a review or even just a sentence, we would love to hear your
            thoughts!
          </p>

          <textarea
            className="textarea"
            required
            value={this.state.extraInfo}
            onChange={(e) =>
              this.setState({ extraInfo: e.target.value })
            }
          ></textarea>
        </div>
      </div>
    );
  }
}

export default ExtraInfo;