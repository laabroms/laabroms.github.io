import React from "react";
import PersonalInfoAuthor from "../../components/personalInfo/personalInfoAuthor";
import ClearnessCalculator from "../../components/clearnessCalculator/clearnessCalculator";
import MasterpieceMeter from "../../components/masterpieceMeter/masterpieceMeter";
import FeelingFactor from "../../components/feelingFactor/feelingFactor";
import AccessibilityScore from "../../components/accessibilityScore/accessibilityScore";
import DiversityRep from "../../components/diversityRepresentation/diversityRep";
import FavLeastFav from "../../components/favLeastFav/favLeastFav";
import { StarRating } from "../../components/starRating/starRating";
import Keywords from "../../components/keywords/keywords";
import ExtraInfo from "../../components/extraInfo/extraInfo";
import Feedback from "../../components/feedback/feedback";
import TeacherInfo from "../../components/teacherInfo/teacherInfo";
import ChatterBarTeacher from "../../components/chatterBar/chatterBarTeacher";
import LivelyLibraries from '../../components/livelyLibraries/livelyLibraries';
import ClassroomCreativity from '../../components/classroomCreativity/classroomCreativity';
import MasterpieceMeterOlder from '../../components/masterpieceMeter/masterpieceMeterOlder';
import InspirationElement from "../../components/inspirationElement/inspirationElement";
import GrippingGrade from "../../components/grippingGrade/grippingGrade";
import PacingScore from "../../components/pacingScore/pacingScore";
import ContentWarning from "../../components/contentWarning/contentWarning";
import FadeIn from "react-fade-in";


class TeacherSurvey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      country: "",
      gradeLevel: "",
      school: "",
      clearness: "50",
      masterpiece: "50",
      educational: "50",
      discussion: "50",
      heart: "50",
      feeling: "50",
      accessibility: "50",
      livelyLibraries: "50",
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
  handleAccessibility = (data) => {
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
      <FadeIn>
        <div style={container}>
          <h2>Picture Book Survey for Teachers</h2>
          <p style={bookInfo}>
            <i style={bookTitle}>BOOK TITLE</i> by AUTHOR
          </p>

          <PersonalInfoAuthor onChange={this.handlePersonalInfo} />
          <TeacherInfo onChange={this.handleTeacherInfo} />
          <ClearnessCalculator onChange={this.handleClearness} />

          {/* for younger */}
          <MasterpieceMeter onChange={this.handleMasterpiece} />
          {/* for older */}
          <MasterpieceMeterOlder />

          <InspirationElement />
          <FeelingFactor onChange={this.handleFeeling} />
          <ChatterBarTeacher onChange={this.handleChatter} />
          <LivelyLibraries onChange={this.handleLively} />
          <AccessibilityScore onChange={this.handleAccessibility} />
          <ClassroomCreativity onChange={this.handleClassroomCreativity} />
          <GrippingGrade />

          {/* for older */}
          <PacingScore />

          <DiversityRep onChange={this.handleDiversity} />
          <FavLeastFav onChange={this.handleFav} />

          {/* for older */}
          <ContentWarning />

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
        </FadeIn>
      </form>
    );
  }
}

export default TeacherSurvey;
