import React from 'react';

class InputThanks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            surveyAdvice: '',
        }
    }
    render() {

        return (
          <div>
            <div>
              <p className="titleText1">
                14. Thank you for your input! What did you like or not like
                about our survey? We appreciate any and all feedback.
              </p>

              <textarea
                className="textarea"
                required
                value={this.state.surveyAdvice}
                onChange={(e) =>
                  this.setState({ surveyAdvice: e.target.value })
                }
              ></textarea>
            </div>
          </div>
        );
    }
}

export default InputThanks;