import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Spinner, Table as BootstrapTable} from "react-bootstrap";




class Table extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        books: this.props.books
      }
  }

  



 
  render() {
      if (!this.props.books) return (
        <div style={{ position: "fixed", left: "50%", top: "50%" }}>
          <Spinner animation="border" role="status" variant="secondary">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      );



      

      return (
        <>
          <BootstrapTable responsive striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Publisher</th>
                <th>ISBN</th>
                {/* <th>Tags</th> */}
                <th>Publishing Year</th>
                {/* <th>Age Range</th> */}
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
                            <Link to={`/books/${title}`}>{title}</Link>
                          </nav>
                        </td>
                        <td>{book.fields.author}</td>
                        <td>{book.fields.publisher}</td>
                        <td>{book.fields.isbn}</td>
                        {/* <td>{book.fields.tags}</td> */}
                        <td>{book.fields.pub_year}</td>
                        {/* <td>{book.fields.age_range}</td> */}
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
          </BootstrapTable>
        </>
      );
  }
};



export default Table;
