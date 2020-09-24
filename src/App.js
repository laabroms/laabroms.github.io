import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ParentSurvey from "./surveys/parentSurvey/parentSurvey.js";
import AuthorSurvey from "./surveys/authorSurvey/authorSurvey";
import CriticSurvey from "./surveys/criticSurvey/criticSurvey";
import TeacherSurvey from "./surveys/teacherSurvey/teacherSurvey";
import Tags from './surveys/tags';
import "bootstrap/dist/css/bootstrap.min.css";
import Books from './surveys/books';
import BookInfo from './components/bookInfo';
import BookInfoNew from './components/bookInfoNew';


function App({books}) {

  

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/parent-survey">Parent Survey</Link>
            </li>
            <li>
              <Link to="/author-survey">Author Survey</Link>
            </li>
            <li>
              <Link to="/critic-survey">Critic Survey</Link>
            </li>
            <li>
              <Link to="/teacher-survey">Teacher Survey</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <Tags />
          </Route>
          <Route path={"/books/:books/parent-survey"}>
            <ParentSurvey books={books} />
          </Route>
          <Route path={"/books/:books/author-survey"}>
            <AuthorSurvey books={books} />
          </Route>
          <Route path={"/books/:books/critic-survey"}>
            <CriticSurvey books={books} />
          </Route>
          <Route path={"/books/:books/teacher-survey"}>
            <TeacherSurvey books={books} />
          </Route>
          <Route path="/books" exact>
            <Books />
          </Route>
          <Route path={"/books/:books"} exact>
            <BookInfo books={books} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
