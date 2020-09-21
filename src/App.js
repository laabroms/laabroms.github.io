import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ParentSurvey from "./surveys/parentSurvey/parentSurvey.js";
import AuthorSurvey from "./surveys/authorSurvey/authorSurvey";
import CriticSurvey from "./surveys/criticSurvey/criticSurvey";
import TeacherSurvey from "./surveys/teacherSurvey/teacherSurvey";
import Tags from './surveys/tags';
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
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
          <Route path='/' exact>
            <Tags />
          </Route>
          <Route path="/parent-survey">
            <ParentSurvey />
          </Route>
          <Route path="/author-survey">
            <AuthorSurvey />
          </Route>
          <Route path="/critic-survey">
            <CriticSurvey />
          </Route>
          <Route path="/teacher-survey">
            <TeacherSurvey />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
