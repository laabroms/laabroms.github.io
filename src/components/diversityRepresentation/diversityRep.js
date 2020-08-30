import React from 'react';

import './diversityRep.css';

export default function DiversityRep() {
return(
    <>
      <p style={{paddingTop: 20}} className='textTop'>
        9. How do you feel about the <span className="colorChange7">DIVERSITY </span> 
         and {" "}
        <span className="colorChange7">REPRESENTATION </span>
        in this book?
      </p>

      <textarea className='textarea'></textarea>
    </>
)
}