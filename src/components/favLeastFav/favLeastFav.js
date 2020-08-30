import React from "react";
import "./favLeastFav.css";

export default class FavLeastFav extends React.Component {
  render() {
    const title = {
      paddingTop: 20,
    };

    return (
      <>
        <p>
          10. What was your{" "}
          <span className="colorChange8">FAVORITE </span>
          and <span className="colorChange9">LEAST FAVORITE </span>
          part of the book?
        </p>

        <div className="row">
          
          <div className="column11" id="name">
            <p>Favorite:</p>
          </div>
          <div className="column2">
            <input className="input" required></input>
          </div>
        </div>

        <div className="row">
          
          <div className="column12">
            <p>Least Favorite:</p>
          </div>
          <div className="column2">
            <input className="input" required></input>
          </div>
        </div>
        

        
      </>
    );
  }
}
