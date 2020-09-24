import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BookInfo from "./bookInfo";
import BookInfoNew from "./bookInfoNew";





class TableNew extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        books: null
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

    
      return (
          <>
          

          
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>ISBN</th>
              <th>Tags</th>
              <th>Publishing Year</th>
              <th>Age Range</th>
            </tr>
          </thead>
          <tbody>
            {this.props.books !== null && this.props.books.length > 0 ? (
              this.props.books.map((book, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>
                        <nav>
                          <Link to={"/books/" + book.fields.title} >
                            {book.fields.title}
                          </Link>
                          <Route path={"/books/" + book.fields.title} exact>
                            <BookInfoNew 
                                book={book}
                                index={index}
                             />
                          </Route>
                        </nav>
                      </td>
                      <td>{book.fields.author}</td>
                      <td>{book.fields.publisher}</td>
                      <td>{book.fields.isbn}</td>
                      <td>{book.fields.tags}</td>
                      <td>{book.fields.pub_year}</td>
                      <td>{book.fields.age_range}</td>
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

export default TableNew;
