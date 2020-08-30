import React from 'react';

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

export default class ParentSurvey extends React.Component{
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
          <form>
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
            </div>

            <button type='submit'>SUBMIT</button>
          </form>
        );
    }
}