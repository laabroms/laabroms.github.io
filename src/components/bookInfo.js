import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ParentSurvey from '../surveys/parentSurvey/parentSurvey';

class BookInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: props.title
    }
  }

  

  render() {
    // if (!this.props.book) return null;

   

    console.log(this.props.index);

    return (
      <div>
        <nav>
          <p>
            <Link to={"/books/" + this.props.book + "/parent-survey"}>
              Parent Survey
            </Link>
            <Route path={"/books/" + this.props.book + "/parent-survey"} exact>
              <ParentSurvey books={this.state.title} />
            </Route>
          </p>
          <p>
            <Link to={"/books/" + this.state.books + "/critic-survey"}>
              Critic Survey
            </Link>
            <Route path={"/books/:books/critic-survey"} exact>
              <ParentSurvey books={this.state.books} />
            </Route>
          </p>
          <p>
            <Link to={"/books/" + this.state.books + "/author-survey"}>
              Author/Illustrator Survey
            </Link>
            <Route path={"/books/:books/author-survey"} exact>
              <ParentSurvey books={this.state.books} />
            </Route>
          </p>
          <p>
            <Link to={"/books/" + this.state.books + "/teacher-survey"}>
              Teacher Survey
            </Link>
            <Route path={"/books/:books/teacher-survey"} exact>
              <ParentSurvey books={this.state.books} />
            </Route>
          </p>
        </nav>
      </div>
    );
  }
}

export default BookInfo;