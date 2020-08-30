import React from 'react';

function InputThanks(props) {
    return (
      <div>
        <div>
          <p className="titleText1">
            14. Thank you for your input! What did you like or not like about our survey? We appreciate any and all feedback.
          </p>

          <textarea className="textarea" required></textarea>
        </div>
      </div>
    );
}

export default InputThanks;