import React from 'react';

function ExtraInfo(props) {
    return (
      <div>
        <div>
          <p className="titleText1">
            13. Is there anything else you want to tell us? If you want to write a review or even just a sentence, we would love to hear your thoughts!
          </p>

          <textarea className="textarea" required></textarea>
        </div>
      </div>
    );
}

export default ExtraInfo;