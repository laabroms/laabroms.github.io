import React from 'react';
import Table from '../components/table';
import axios from "axios";

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: null,
    };
  }

  
  


  componentDidMount = async () => {

        var url =
          "https://cors-anywhere.herokuapp.com/https://rotten-books.herokuapp.com/bookAdmin/api/get_all_books";
        const response = await axios.get(url)

        this.setState({books: response.data}) 
        console.log(this.state.books)
    }


  render() {

    
   

    return (
      <>
        
        {this.componentDidMount ? (

        <Table books={this.state.books} />

        ): null }
        
      </>
    );
  }

  }

export default Books;