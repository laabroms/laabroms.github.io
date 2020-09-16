import React from 'react';
import './parentSurvey.css';
import PersonalInfo from '../../components/personalInfo/personalInfo';
import ClearnessCalculatorYounger from '../../components//clearnessCalculator/clearnessCalculatorYounger';
import ChatterBar from '../../components/chatterBar/chatterBar';
import FeelingFactor from '../../components/feelingFactor/feelingFactor';
import AccessibilityScore from '../../components/accessibilityScore/accessibilityScore';
import DiversityRep from '../../components/diversityRepresentation/diversityRep';
import FavLeastFav from '../../components/favLeastFav/favLeastFav';
import {StarRating} from '../../components/starRating/starRating';
import Keywords from '../../components/keywords/keywords';
import ExtraInfo from '../../components/extraInfo/extraInfo';
import FeedbackSlider from '../../components/feedback/feedbackSlider';
import FadeIn from "react-fade-in";
import InspirationElement from '../../components/inspirationElement/inspirationElement';
import GrippingGrade from '../../components/grippingGrade/grippingGrade';
import PacingScore from '../../components/pacingScore/pacingScore';


export default class ParentSurvey extends React.Component {
  constructor(props) {
    super(props);
    // this.eventHandler = this.eventHandler.bind(this);
    this.state = {
      name: "",
      age: "",
      location: "",
      country: "",
      clearness: "50",
      masterpiece: "50",
      educational: "50",
      chatter: "50",
      heart: "50",
      feeling: "50",
      accessibility: "50",
      diversity: "",
      favorite: "",
      leastFav: "",
      stars: "",
      keywords: "",
      extraInfo: '',
      feedback: '',
      gripping: '',
    };
  }

  handlePersonalInfo = data => {
    this.setState({
      name: data.name,
      age: data.age,
      location: data.location,
      country: data.country,
    });
  }


    handleDiversity = data => {
        this.setState({
        diversity: data.diversityAndRepresentation,
        });
    }
    handleFav = data => {
        this.setState({
            favorite: data.favorite,
            leastFav: data.leastFav,
        })
    }

    handleKeywords = data => {
        this.setState({
            keywords: data.keywords
        })
    }
    handleFeedback = data => {
        this.setState({
            feedback: data.feedback,
        })
    }

    handleExtraInfo = data => {
        this.setState({
            extraInfo: data.extraInfo,
        })
    }

    handleStars = data => {
        this.setState({
            stars: data.rating
        })
    }

    handleClearness = data => {
        this.setState({
            clearness: data.clearness
        })
    }

    handleMasterpiece = data => {
        this.setState({
            masterpiece: data.masterpiece
        })
    }

    handleEducational = data => {
        this.setState({
            educational: data.educational
        })
    }

    handleChatter = data => {
        this.setState({
            chatter: data.chatter
        })
    }
    handleHeart = data => {
        this.setState({
            heart: data.heart
        })
    }

    handleFeeling = data => {
        this.setState({
            feeling: data.feeling
        })
    }
    handleAccessibility = data => {
        this.setState({
            accessibility: data.accessibility
        })
    }
    handleGripping = data => {
      this.setState({
        gripping: data.grippingGrade
      })
    }

  submitHandler = (e) => {
    alert(
      this.state.gripping +
      "Name: " +
        this.state.name +
        ";" +
        " Age: " +
        this.state.age +
        ";" +
        " Location: " +
        this.state.location +
        ";" +
        " Country: " +
        this.state.country +
        ";" +
        " Clearness Calculator: " +
        this.state.clearness +
        ";" +
        " Masterpiece Meter: " +
        this.state.masterpiece +
        ";" +
        " Educational Element: " +
        this.state.educational +
        ";" +
        " Chatter Bar: " +
        this.state.chatter +
        ";" +
        " Heart to Heart: " +
        this.state.heart +
        ";" +
        " Feeling Factor: " +
        this.state.feeling +
        ";" +
        " Accessibility Score: " +
        this.state.accessibility +
        ";" +
        " Diversity and Representation Response: " +
        this.state.diversity +
        ";" +
        " Favorite Part: " +
        this.state.favorite +
        ";" +
        " Least Favorite Part: " +
        this.state.leastFav +
        ";" +
        " Stars: " +
        this.state.stars +
        ";" +
        " Keywords: " +
        this.state.keywords +
        ";" +
        " Extra Info: " +
        this.state.extraInfo +
        ";" +
        " Feedback: " +
        this.state.feedback + ';'
    );
  };

  render() {
    const container = {
      margin: "3%",
    };
    const bookTitle = {
      fontSize: 20,
      fontWeight: "bold",
    };
    const bookInfo = {
      fontSize: 20,
    };

    return (
      <form method="POST" action="">
        <FadeIn>
          <div style={container}>
            <h2>Picture Book Survey for Parents/Guardians</h2>
            <p style={bookInfo}>
              <i style={bookTitle}>BOOK TITLE</i> by AUTHOR
            </p>
            <PersonalInfo onChange={this.handlePersonalInfo} />

            {/* for younger */}
            <ClearnessCalculatorYounger onChange={this.handleClearness} />

            <ChatterBar onChange={this.handleChatter} />
            <InspirationElement />
            <FeelingFactor onChange={this.handleFeeling} />
            <AccessibilityScore onChange={this.handleAccessibility} />
            <GrippingGrade onChange={this.handleGripping} />

            {/* for older */}
            <PacingScore />

            <DiversityRep onChange={this.handleDiversity} />
            <FavLeastFav onChange={this.handleFav} />
            <StarRating onChange={this.handleStars} />
            <Keywords onChange={this.handleKeywords} />
            <ExtraInfo onChange={this.handleExtraInfo} />
            <FeedbackSlider onChange={this.handleFeedback} />
          </div>

          <button
            type="submit"
            className="submitButton"
            onClick={this.submitHandler}
          >
            SUBMIT
          </button>
        </FadeIn>
      </form>
    );
  }
}