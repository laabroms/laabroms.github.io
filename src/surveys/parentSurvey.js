import React from 'react';
import './parentSurvey.css';
import PersonalInfo from '../components/personalInfo/personalInfo';
import ClearnessCalculator from '../components//clearnessCalculator/clearnessCalculator';
import MasterpieceMeter from '../components/masterpieceMeter/masterpieceMeter';
import EducationalElement from '../components/educationalElement/educationalElement';
import ChatterBar from '../components/chatterBar/chatterBar';
import HeartToHeart from '../components/heartToHeart/heartToHeart';
import FeelingFactor from '../components/feelingFactor/feelingFactor';
import AccessibilityScore from '../components/accessibilityScore/accessibilityScore';
import DiversityRep from '../components/diversityRepresentation/diversityRep';
import FavLeastFav from '../components/favLeastFav/favLeastFav';
import {StarRating} from '../components/starRating/starRating';
import Keywords from '../components/keywords/keywords';
import ExtraInfo from '../components/extraInfo/extraInfo';
import InputThanks from '../components/inputThanks/inputThanks';



export default class ParentSurvey extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            location: '',
            country: '',
            clearness: '',
            masterpiece:'',
            
        }

    }

    render() {


        const container = {
            margin: '3%',
        }
        const bookTitle = {
            fontSize: 20,
            fontWeight: 'bold',
        }
        const bookInfo = {
            fontSize: 20
        }


        return (
          <form method='POST' action=''>
            <div style={container}>
              <h2>Picture Book Survey for Parents/Guardians</h2>
              <p style={bookInfo}>
                <i style={bookTitle}>BOOK TITLE</i> by AUTHOR
              </p>
              <PersonalInfo />
              <ClearnessCalculator />
              <MasterpieceMeter />
              <EducationalElement />
              <ChatterBar />
              <HeartToHeart />
              <FeelingFactor />
              <AccessibilityScore />
              <DiversityRep />
              <FavLeastFav />
              <StarRating />
              <Keywords />
              <ExtraInfo />
              <InputThanks />

            </div>

            <button type='submit' className='submitButton'>SUBMIT</button>
          </form>
        );
    }
}