import React from "react";
import PersonalInfoAuthor from "../../components/personalInfo/personalInfoAuthor";
import ClearnessCalculator from "../../components/clearnessCalculator/clearnessCalculator";
import MasterpieceMeter from "../../components/masterpieceMeter/masterpieceMeter";
import EducationalElement from "../../components/educationalElement/educationalElement";
import DiscussionDial from "../../components/discussionDial/discussionDial";
import HeartToHeart from "../../components/heartToHeart/heartToHeart";
import FeelingFactor from "../../components/feelingFactor/feelingFactor";
import AccessibilityScore from "../../components/accessibilityScore/accessibilityScore";
import DiversityRep from "../../components/diversityRepresentation/diversityRep";
import FavLeastFav from "../../components/favLeastFav/favLeastFav";
import { StarRating } from "../../components/starRating/starRating";
import Keywords from "../../components/keywords/keywords";
import ExtraInfo from "../../components/extraInfo/extraInfo";
import Feedback from "../../components/feedback/feedback";
import PlatformInfo from "../../components/platformInfo/platformInfo";

class CriticSurvey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      country: "",
      platform: '',
      accountName: '',
      ageRange: '',
      clearness: '50',
      masterpiece: "50",
      educational: "50",
      discussion: "50",
      heart: "50",
      feeling: "50",
      accessibility: "50",
      diversity: "",
      favorite: "",
      leastFav: "",
      stars: "",
      keywords: "",
      extraInfo: "",
      feedback: "",
    };
  }

  handlePersonalInfo = (data) => {
    this.setState({
      name: data.name,
      location: data.location,
      country: data.country,
    });
  };

  handlePlatformInfo = (data) => {
      this.setState({
          platform: data.platform,
          accountName: data.accountName,
          ageRange: data.ageRange,
      })
  }
  handleDiversity = (data) => {
    this.setState({
      diversity: data.diversityAndRepresentation,
    });
  };
  handleFav = (data) => {
    this.setState({
      favorite: data.favorite,
      leastFav: data.leastFav,
    });
  };

  handleDiscussion = (data) => {
    this.setState({
      discussion: data.discussion,
    });
  };

  handleKeywords = (data) => {
    this.setState({
      keywords: data.keywords,
    });
  };
  handleFeedback = (data) => {
    this.setState({
      feedback: data.feedback,
    });
  };

  handleExtraInfo = (data) => {
    this.setState({
      extraInfo: data.extraInfo,
    });
  };

  handleStars = (data) => {
    this.setState({
      stars: data.rating,
    });
  };

  handleClearness = (data) => {
    this.setState({
      clearness: data.clearness,
    });
  };

  handleMasterpiece = (data) => {
    this.setState({
      masterpiece: data.masterpiece,
    });
  };

  handleEducational = (data) => {
    this.setState({
      educational: data.educational,
    });
  };

  handleChatter = (data) => {
    this.setState({
      chatter: data.chatter,
    });
  };
  handleHeart = (data) => {
    this.setState({
      heart: data.heart,
    });
  };

  handleFeeling = (data) => {
    this.setState({
      feeling: data.feeling,
    });
  };
  handleAccessibilty = (data) => {
    this.setState({
      accessibility: data.accessibility,
    });
  };

  submitHandler = (e) => {
    alert(
      "Name: " +
        this.state.name +
        ";" +
        " Location: " +
        this.state.location +
        ";" +
        " Country: " +
        this.state.country +
        ";" +
        " Platform Type: " + 
        this.state.platform + ';'+
        " Account Name: " + 
        this.state.accountName + ';' + 
        "Typical age r50 books: " + 
        this.state.ageRange + ';' +
        " Clearness Calculator: " +
        this.state.clearness +
        ";" +
        " Masterpiece Meter: " +
        this.state.masterpiece +
        ";" +
        " Educational Element: " +
        this.state.educational +
        ";" +
        " Discussion Dial: " +
        this.state.discussion +
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
        this.state.feedback +
        ";"
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
        <div style={container}>
          <h2>Picture Book Survey for Critics</h2>
          <p style={bookInfo}>
            <i style={bookTitle}>BOOK TITLE</i> by AUTHOR
          </p>

          <PersonalInfoAuthor onChange={this.handlePersonalInfo} />
          <PlatformInfo onChange={this.handlePlatformInfo} />
          <ClearnessCalculator onChange={this.handleClearness} />
          <MasterpieceMeter onChange={this.handleMasterpiece} />
          <EducationalElement onChange={this.handleEducational} />
          <DiscussionDial onChange={this.handleDiscussion} />
          <HeartToHeart onChange={this.handleHeart} />
          <FeelingFactor onChange={this.handleFeeling} />
          <AccessibilityScore onChange={this.handleAccessibilty} />
          <DiversityRep onChange={this.handleDiversity} />
          <FavLeastFav onChange={this.handleFav} />
          <StarRating onChange={this.handleStars} />
          <Keywords onChange={this.handleKeywords} />
          <ExtraInfo onChange={this.handleExtraInfo} />
          <Feedback onChange={this.handleFeedback} />
        </div>

        <button
          type="submit"
          className="submitButton"
          onClick={this.submitHandler}
        >
          SUBMIT
        </button>
      </form>
    );
  }
}

export default CriticSurvey;
