import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BookInfo from './bookInfo';

const Table = ({books}) => {


  

   


  return (
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
        {books !== null && books.length > 0   ? (
          books.map((books, index) => {
            return (
              <>
                <tr key={index}>
                  <td>
                    <nav>
                      <Link to={"/books/" + books.fields.title }>
                        {books.fields.title}
                      </Link>
                      <Route path={"/books/" + books.fields.title} exact>
                        <BookInfo books={books} />
                      </Route>
                    </nav>
                  </td>
                  <td>{books.fields.author}</td>
                  <td>{books.fields.publisher}</td>
                  <td>{books.fields.isbn}</td>
                  <td>{books.fields.tags}</td>
                  <td>{books.fields.pub_year}</td>
                  <td>{books.fields.age_range}</td>
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
    
  );
};

export default Table;
