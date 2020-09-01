import React from 'react';

import './diversityRep.css';

export default class DiversityRep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diversityAndRepresentation: ''
    };
  }

  render() {
    return (
      <>
        <p style={{ paddingTop: 20 }} className="textTop">
          9. How do you feel about the{" "}
          <span className="colorChange7">DIVERSITY </span>
          and <span className="colorChange7">REPRESENTATION </span>
          in this book?
        </p>

        <textarea
          className="textarea"
          required
          value={this.state.diversityAndRepresentation}
          onChange={(e) => this.setState({ diversityAndRepresentation: e.target.value })}
        ></textarea>
      </>
    );
  }
}