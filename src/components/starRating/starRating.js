import React, {useState} from 'react';
import ReactStars from "react-rating-stars-component";
import './starRating.css';




export function StarRating() {
    const [data, setData] = useState({
        rating: '',
    });
    

    const numStars = (newRating) => {
        setData({
            ...data,
            rating: newRating,
        })

    }

    const stars = {
      size: 40,
      count: 10,
      isHalf: false,
      value: data.rating,
      color: "#c9c9c9",
      activeColor: "#FFD607",
      onChange: newValue => numStars(newValue),
      
    };
    
  
return (
  <>
    <p className="title1">
      11. How many<span className="starsTextColor"> STARS</span> would you give this book on a scale from 1 to 10?
    </p>
    <div className="stars">
      <ReactStars {...stars} />
    </div>

  </>
);

}


