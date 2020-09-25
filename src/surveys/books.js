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

//   componentDidMount() {
//     //   proxy url to bypass CORS rejection
//     var proxyUrl = "https://cors-anywhere.herokuapp.com/";

//     var targetUrl =
//       "https://rotten-books.herokuapp.com/bookAdmin/api/get_all_books";

//     fetch(proxyUrl + targetUrl)
//       .then((blob) => blob.json())
//       .then((data) => {
//         console.table(data);

//         document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);

//         // return data;
//       }).then((data) => this.setState({
//           data: data
//       }),
//         console.log(this.state.data)
//       )

//       .catch((e) => {
//         console.log(e);
//         return e;
//       });
//   }


  render() {

    
   

    return (
      <>
        {/* <pre></pre> */}
        <div>
          {/* <button className="fetch-button" onClick={this.fetchData}>
            Fetch Data
          </button> */}
        </div>
        {this.componentDidMount ? (

        <Table books={this.state.books} />

        ): null }
        
      </>
    );
  }

  }

export default Books;