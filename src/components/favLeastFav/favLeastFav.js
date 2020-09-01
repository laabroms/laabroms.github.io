import React from "react";
import "./favLeastFav.css";

export default class FavLeastFav extends React.Component {
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
          10. What was your <span className="colorChange8">FAVORITE </span>
          and <span className="colorChange9">LEAST FAVORITE </span>
          part of the book?
        </p>

        <div className="row">
          <div className="column11" id="name">
            <p>Favorite:</p>
          </div>
          <div className="column2">
            <input
              className="input"
              required
              name="favorite"
              //   value={this.state.favorite}
              //   onChange={(e) => this.setState({ favorite: e.target.value })}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="column12">
            <p>Least Favorite:</p>
          </div>
          <div className="column2">
            <input
              className="input"
              required
              name="leastFav"
              //   value={this.state.leastFav}
              //   onChange={(e) =>
              //     this.setState({ leastFav: e.target.value })
              //   }
              onChange={this.handleChange}
            />
          </div>
        </div>
      </>
    );
  }
}