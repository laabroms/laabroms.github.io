import React from "react";
import "./favLeastFav.css";


class FavLeastFav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: "",
      leastFav: "",
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
        <p className="favTopInfo">
          What was your <span className="colorChange8">FAVORITE </span>
          part of the book?
        </p>

        <textarea
          className="textarea"
          name="favorite"
          onChange={this.handleChange}
        />
        <p className="favTopInfo2">
          What would you <span className="colorChange9">CRITIQUE </span>
          about this book?
        </p>
        <textarea
          className="textarea"
          name="leastFav"
          onChange={this.handleChange}
        />
      </>
    );
  }
}



export default FavLeastFav;
