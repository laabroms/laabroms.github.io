import React from 'react';
import ReactStars from "react-rating-stars-component";
import './starRating.css';

export class StarRating extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            rating: ''
        }
    }

    // const [data, setData] = useState({
    //     rating: '',
    // });
    

    handleChange = (newRating) => {
        this.setState({rating: newRating}, () => {
        if (this.props.onChange) {
        this.props.onChange(this.state);
        }
    })
    
    }

    render() {

    const stars = {
      size: 40,
      count: 10,
      isHalf: false,
    //   value: data.rating,
      color: "#c9c9c9",
      activeColor: "#FFD607",
      onChange: newValue => {this.handleChange(newValue)},
      
    };
    
  
return (
  <>
    <p className="title1">
      11. How many<span className="starsTextColor"> STARS</span> would you give this book on a scale from 1 to 10?
    </p>
    <div className="stars">
      <ReactStars {...stars}/>
    </div>

  </>
);

}
}


