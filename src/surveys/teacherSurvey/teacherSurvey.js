import React from "react";
import PersonalInfoAuthor from "../../components/personalInfo/personalInfoAuthor";
import ClearnessCalculator from "../../components/clearnessCalculator/clearnessCalculator";
import MasterpieceMeter from "../../components/masterpieceMeter/masterpieceMeter";
import EducationalElement from "../../components/educationalElement/educationalElement";
import HeartToHeart from "../../components/heartToHeart/heartToHeart";
import FeelingFactorTeacher from "../../components/feelingFactor/feelingFactorTeacher";
import AccessibilityScore from "../../components/accessibilityScore/accessibilityScore";
import DiversityRep from "../../components/diversityRepresentation/diversityRep";
import FavLeastFav from "../../components/favLeastFav/favLeastFav";
import { StarRating } from "../../components/starRating/starRating";
import Keywords from "../../components/keywords/keywords";
import ExtraInfo from "../../components/extraInfo/extraInfo";
import Feedback from "../../components/feedback/feedback";
import TeacherInfo from "../../components/teacherInfo/teacherInfo";
import ChatterBarTeacher from "../../components/chatterBar/chatterBarTeacher";
import DiscussionDialTeacher from "../../components/discussionDial/discussionDialTeacher";
import LivelyLibraries from '../../components/livelyLibraries/livelyLibraries';
import ClassroomCreativity from '../../components/classroomCreativity/classroomCreativity';

class TeacherSurvey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      country: "",
      gradeLevel: "",
      school: "",
      clearness: "Sometimes clear",
      masterpiece: "They were okay",
      educational: "Sort of",
      discussion: "Sort of",
      heart: "Sort of",
      feeling: "Sort of",
      accessibility: "Somewhat accessible",
      livelyLibraries: "Maybe",
      classroomCreativity: "",
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

  handleTeacherInfo = (data) => {
      this.setState({
          gradeLevel: data.gradeLevel,
          school: data.school
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

  handleLively = (data) => {
      this.setState({
          livelyLibraries: data.livelyLibraries,
      })
  }

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
  handleClassroomCreativity = (data) => {
      this.setState({
          classroomCreativity: data.classroomCreativity,
      })
  }

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
        " Grade Level: " +
        this.state.gradeLevel +
        ";" +
        " School: " +
        this.state.school +
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
        " Discussion Dial: " +
        this.state.discussion +
        ";" +
        ' Lively Libraries: ' + 
        this.state.livelyLibraries + ';' +
        " Accessibility Score: " +
        this.state.accessibility +
        ";" +
        ' Classroom Creativity: ' + 
        this.state.classroomCreativity + ';' +
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
          <h2>Picture Book Survey for Teachers</h2>
          <p style={bookInfo}>
            <i style={bookTitle}>BOOK TITLE</i> by AUTHOR
          </p>

          <PersonalInfoAuthor onChange={this.handlePersonalInfo} />
          <TeacherInfo onChange={this.handleTeacherInfo} />
          <ClearnessCalculator onChange={this.handleClearness} />
          <MasterpieceMeter onChange={this.handleMasterpiece} />
          <EducationalElement onChange={this.handleEducational} />
          <ChatterBarTeacher onChange={this.handleChatter} />
          <HeartToHeart onChange={this.handleHeart} />
          <FeelingFactorTeacher onChange={this.handleFeeling} />
          <DiscussionDialTeacher onChange={this.handleDiscussion} />
          <LivelyLibraries onChange={this.handleLively} />
          <AccessibilityScore onChange={this.handleAccessibilty} />
          <ClassroomCreativity onChange={this.handleClassroomCreativity} />
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

export default TeacherSurvey;
