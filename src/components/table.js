import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";





class Table extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        books: this.props.books
      }
  }

  
//   handleClick = (book) => {
//       this.setState({
//           books: book
          
//       })
//     //   console.log(this.state.books)
//    }




 
  render() {
      if (!this.props.books) return (<div>Loading...</div>);



      

    //   console.log(books)

    //   console.log(books.length)

        // const originalQuestions = JSON.stringify(books[0].fields.title);

        

        // const questionObjects = Object.values(
        //   JSON.stringify(books)
        // );

      return (
          <>
          <div>
              {/* {questionObjects} */}
          </div>
          

          
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>ISBN</th>
              <th>Tags</th>
              <th>Publishing Year</th>
            </tr>
          </thead>
          <tbody>
            {this.props.books !== null && this.props.books.length > 0 ? (
              this.props.books.map((book, index) => {
                  const title = book.fields.title;
                return (
                  <>
                    <tr key={index}>
                      <td>
                        <nav>
                          <Link to={`/books/${title}`}>
                            {title}
                          </Link>
                         
                         
                        </nav>
                      </td>
                      <td>{book.fields.author}</td>
                      <td>{book.fields.publisher}</td>
                      <td>{book.fields.isbn}</td>
                      <td>{book.fields.tags}</td>
                      <td>{book.fields.pub_year}</td>
                    </tr>
                  </>
                );
              })
            ) : (
              <tr>
                <td colSpan="5">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
        </>
      );
  }
};



export default Table;
