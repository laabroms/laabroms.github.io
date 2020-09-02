import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ParentSurvey from './surveys/parentSurvey/parentSurvey.js';
import AuthorSurvey from './surveys/authorSurvey/authorSurvey';
import CriticSurvey from './surveys/criticSurvey/criticSurvey';
import TeacherSurvey from './surveys/teacherSurvey/teacherSurvey';
ReactDOM.render(
  <React.StrictMode>
    {/* < ParentSurvey /> */}
    {/* < AuthorSurvey /> */}
    {/* <CriticSurvey /> */}
    <TeacherSurvey />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
