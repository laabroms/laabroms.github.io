import React from 'react';
import './keywords.css';

function Keywords(props) {
    return (
      <div>
        <p className="titleText1">
          12. What keywords would you type in a search bar to find this book and
          other books like it?
        </p>

        <textarea className="textarea" required></textarea>
      </div>
    );
}

export default Keywords;