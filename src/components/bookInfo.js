import React from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import ParentSurvey from '../surveys/parentSurvey/parentSurvey';
import axios from 'axios';

class BookInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: null,
      title: Object.values(this.props.match.params).toString(),
      author: '',
    };
  }
  
  
  
  
  componentDidMount = async() => {
    const { title } = this.props.match.params;


    // console.log(Object.values(this.state.title));


    console.log(this.state.title)

     var url =
          "https://cors-anywhere.herokuapp.com/https://rotten-books.herokuapp.com/bookAdmin/api/get_all_books";
        const response = await axios.get(url)

        this.setState({books: response.data}) 
        console.log(this.state.books)

        var index = findWithAttr(this.state.books, 'title', this.state.title.toString());

        var author = this.state.books[0].fields['author'];
        this.setState({
          author: author
        })


    
  }

  

  render() {
        const { title } = this.props.match.params;

    

    return (
      <div style={{ paddingLeft: 30 }}>
        <span style={{ fontSize: 20, fontWeight:'bold', marginBottom: 40 }}>{title} by {this.state.author}</span>

        <nav>
          <p>
            <Link to={`/books/${title}/parent-survey`}>Parent Survey</Link>
          </p>
          <p>
            <Link to={"/books/" + title + "/critic-survey"}>Critic Survey</Link>
          </p>
          <p>
            <Link to={"/books/" + title + "/author-survey"}>
              Author/Illustrator Survey
            </Link>
          </p>
          <p>
            <Link to={"/books/" + title + "/teacher-survey"}>
              Teacher Survey
            </Link>
          </p>
        </nav>
      </div>
    );
  }
}


function findWithAttr(array, attr, value) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i].fields[attr] === value) {
      return i;
    }
  }
  return -1;
}


export default BookInfo;