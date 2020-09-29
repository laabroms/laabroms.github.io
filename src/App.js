import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ParentSurvey from "./surveys/parentSurvey/parentSurvey.js";
import AuthorSurvey from "./surveys/authorSurvey/authorSurvey";
import CriticSurvey from "./surveys/criticSurvey/criticSurvey";
import TeacherSurvey from "./surveys/teacherSurvey/teacherSurvey";
// import Tags from './surveys/tags';
import "bootstrap/dist/css/bootstrap.min.css";
import Books from './surveys/books';
import BookInfo from './components/bookInfo';
import Home from './components/home';
import Submitted from './components/submitted';
import NotFoundPage from './surveys/404';

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
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route
            path={"/books/:title/parent-survey"}
            component={ParentSurvey}
          ></Route>
          <Route
            path={"/books/:title/author-survey"}
            component={AuthorSurvey}
          ></Route>
          <Route
            path={"/books/:title/critic-survey"}
            component={CriticSurvey}
          ></Route>
          <Route
            path={"/books/:title/teacher-survey"}
            component={TeacherSurvey}
          ></Route>
          <Route path="/books" exact>
            <Books />
          </Route>
          <Route path={"/books/:title"} component={BookInfo} exact></Route>
          <Route path={"/submitted"} component={Submitted} exact></Route>
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
