import React from 'react';
import './keywords.css';

class Keywords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: "",
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
        <p className="titleText1">
          What keywords would you type in a search bar to find this book and
          other books like it?
        </p>

        <textarea
          className="textarea"
          required
          name="keywords"
          // value={this.state.keywords}
          // onChange={(e) => this.setState({ keywords: e.target.value })}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Keywords;