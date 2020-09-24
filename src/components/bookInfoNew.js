import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ParentSurvey from "../surveys/parentSurvey/parentSurvey";


const bookInfoNew = ({book, index}) => {
    return (
    
        <div>

          <nav>
            <p>
              <Link to={"/books/" + {index} + "/parent-survey"}>
                Parent Survey
              </Link>
              <Route
                path={"/books/" + {book} + "/parent-survey"}
                exact
              >
                <ParentSurvey  />
              </Route>
            </p>
            {/* <p>
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
            </p> */}
          </nav>
        </div>
      
    );
};

export default bookInfoNew;