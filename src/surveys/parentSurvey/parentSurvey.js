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
import axios from 'axios';
import {Spinner} from 'react-bootstrap';
import MasterpieceMeter from '../../components/masterpieceMeter/masterpieceMeter';
import MasterpieceMeterOlder from '../../components/masterpieceMeter/masterpieceMeterOlder';
import SillyScore from '../../tags/sillyScore';
import SpookyScore from '../../tags/spookyScore';
import FestivityFactor from '../../tags/festivityFactor';
import ActionAverage from '../../tags/actionAverage';
import FriendshipScore from '../../tags/friendshipScore';
import AwesomeAnimals from '../../tags/awesomeAnimals';
import MysteryMeter from '../../tags/mysteryMeter';
import FantasyFactor from '../../tags/fantasyFactor';
import RealnessRating from '../../tags/realnessRating';
import HeartMeter from '../../tags/heartMeter';
import ThrillFactor from '../../tags/thrillFactor';
import SuspenseScale from '../../tags/suspenseScale';

export default class ParentSurvey extends React.Component {
  constructor(props) {
    super(props);
    // this.eventHandler = this.eventHandler.bind(this);
    this.state = {
      title: Object.values(this.props.match.params).toString(),
      author: "",
      tags: "",
      age_range: "",

      name: "",
      age: "",
      location: "",
      country: "",
      clearness: "50",
      masterpiece: "50",
      educational: "50",
      chatter: "50",
      chatterElements: "",
      inspiration: "50",
      inspirationElements: "",
      heart: "50",
      feeling: "50",
      feelingElements: "",
      accessibility: "50",
      diversity: "",
      favorite: "",
      critique: "",
      stars: "",
      keywords: "",
      extraInfo: "",
      feedback: "",
      gripping: "",
      pacing: "",
    };
  }

  componentDidMount = async () => {

    var url =
      "https://cors-anywhere.herokuapp.com/https://rotten-books.herokuapp.com/bookAdmin/api/get_all_books";
    const response = await axios.get(url);

    this.setState({ books: response.data });

   var length = this.state.title.length;

   var index = findWithAttr(
     this.state.books,
     "title",
     this.state.title.toString(),
     length
   );

   var title = this.state.books[index].fields["title"];
   this.setState({
     title: title,
   });

    var author = this.state.books[index].fields["author"];
    this.setState({
      author: author,
    });
    var tags = this.state.books[index].fields["tags"];
    this.setState({
      tags: tags,
    });
    var age_range = this.state.books[index].fields["age_range"];
    this.setState({
      age_range: age_range,
    });
    console.log(tags)

    

  };



  handlePersonalInfo = (data) => {
    this.setState({
      name: data.name,
      age: data.age,
      location: data.location,
      country: data.country,
    });
  };

  handleDiversity = (data) => {
    this.setState({
      diversity: data.diversityAndRepresentation,
    });
  };
  handleFav = (data) => {
    this.setState({
      favorite: data.favorite,
      critique: data.leastFav,
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
    var chatterElements = "";
    if (data.character === true) {
      chatterElements += "the characters, ";
    }
    if (data.plot === true) {
      chatterElements += "the plot, ";
    }
    if (data.setting === true) {
      chatterElements += "the setting, ";
    }
    if (data.educational === true) {
      chatterElements += "the educational elements, ";
    }
    if (data.emotional === true) {
      chatterElements += "the emotional aspects, ";
    }
    if (data.other === true) {
      chatterElements += data.otherInfo;
    }

    this.setState({
      chatter: data.chatter,
      chatterElements: chatterElements,
    });
  };

  handleInspiration = (data) => {
    var inspoElements = "";
    if (data.resilience === true) {
      inspoElements += "resilience, ";
    }
    if (data.perseverance === true) {
      inspoElements += "perseverance, ";
    }
    if (data.kindness === true) {
      inspoElements += "kindness, ";
    }
    if (data.bravery === true) {
      inspoElements += "bravery, ";
    }
    if (data.hope === true) {
      inspoElements += "hope, ";
    }
    if (data.generosity === true) {
      inspoElements += "generosity, ";
    }
    if (data.empathy === true) {
      inspoElements += "empathy, ";
    }
    if (data.other === true) {
      inspoElements += data.otherInfo;
    }

    this.setState({
      inspiration: data.inspiration,
      inspirationElements: inspoElements,
    });
  };

  handleHeart = (data) => {
    this.setState({
      heart: data.heart,
    });
  };

  handleFeeling = (data) => {
    var feelingElements = "";
    if (data.happiness === true) {
      feelingElements += "happiness, ";
    }
    if (data.sadness === true) {
      feelingElements += "sadness, ";
    }
    if (data.fear === true) {
      feelingElements += "fear, ";
    }
    if (data.anger === true) {
      feelingElements += "anger, ";
    }
    if (data.other === true) {
      feelingElements += data.otherInfo;
    }

    this.setState({
      feeling: data.feeling,
      feelingElements: feelingElements,
    });
  };
  handleAccessibility = (data) => {
    this.setState({
      accessibility: data.accessibility,
    });
  };
  handleGripping = (data) => {
    this.setState({
      gripping: data.grippingGrade,
    });
  };
  handlePacing = (data) => {
    this.setState({
      pacing: data.pacing,
    });
  };

  submitHandler = (e) => {
   
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

    if (this.state.author !== "") {
      return (
        <form method="POST" action="">
          <>
            <FadeIn>
              <div style={container}>
                <h2>Book Level and Target Review</h2>
                <p style={bookInfo}>
                  <i style={bookTitle}>{this.state.title}</i> by{" "}
                  {this.state.author}
                </p>
                <PersonalInfo onChange={this.handlePersonalInfo} />

                {/* for younger */}
                {this.state.age_range === "y" ? (
                  <>
                    <ClearnessCalculatorYounger
                      onChange={this.handleClearness}
                    />
                    <MasterpieceMeter onChange={this.handleMasterpiece} />
                  </>
                ) : null}

                <ChatterBar onChange={this.handleChatter} />
                <InspirationElement onChange={this.handleInspiration} />
                <FeelingFactor onChange={this.handleFeeling} />

                {this.state.tags.includes("Humor") ? <SillyScore /> : null}

                {this.state.tags.includes("Halloween") ? <SpookyScore /> : null}

                {this.state.tags.includes("Holidays") ? (
                  <FestivityFactor />
                ) : null}

                {this.state.tags.includes("Adventure") ? (
                  <ActionAverage />
                ) : null}

                {this.state.tags.includes("Friendship") ? (
                  <FriendshipScore />
                ) : null}

                {this.state.tags.includes("Animals") ? (
                  <AwesomeAnimals />
                ) : null}

                {this.state.tags.includes("Graphic Novel") ? (
                  <MasterpieceMeterOlder />
                ) : null}

                {this.state.tags.includes("Mystery") ? <MysteryMeter /> : null}

                {this.state.tags.includes("Fantasy") ||
                this.state.tags.includes("Fairy Tales") ? (
                  <FantasyFactor />
                ) : null}

                {this.state.tags.includes("Realistic Fiction") ? <RealnessRating /> : null}

                {this.state.tags.includes("Romance") ? <HeartMeter /> : null}

                {this.state.tags.includes("Horror") ? <ThrillFactor /> : null}

                {this.state.tags.includes("Suspense") ? <SuspenseScale /> : null}

                <AccessibilityScore onChange={this.handleAccessibility} />
                <GrippingGrade onChange={this.handleGripping} />

                {/* for older */}
                {this.state.age_range === "o" ? (
                  <>
                    <PacingScore onChange={this.handlePacing} />
                  </>
                ) : null}

                <DiversityRep onChange={this.handleDiversity} />
                <FavLeastFav onChange={this.handleFav} />
                <StarRating onChange={this.handleStars} />
                <Keywords onChange={this.handleKeywords} />
                <ExtraInfo onChange={this.handleExtraInfo} />
                <FeedbackSlider onChange={this.handleFeedback} />

                <button
                  type="submit"
                  className="submitButton"
                  onClick={this.submitHandler}
                >
                  SUBMIT
                </button>
              </div>
            </FadeIn>
          </>
        </form>
      );
    
    } else {
       return (
         <div
           style={{
             position: "fixed",
             left: "50%",
             top: "50%",
           }}
         >
           <Spinner animation="border" role="status">
             <span className="sr-only">Loading...</span>
           </Spinner>
         </div>
       );
    }
  }
}



function findWithAttr(array, attr, value, length) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i].fields[attr].substring(0, length) === value) {
      return i;
    }
  }
  return -1;
}
