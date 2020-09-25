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
import PlatformInfo from "../../components/platformInfo/platformInfo";
import FadeIn from "react-fade-in";
import ChatterBar from "../../components/chatterBar/chatterBar";
import InspirationElement from "../../components/inspirationElement/inspirationElement";
import GrippingGrade from "../../components/grippingGrade/grippingGrade";
import PacingScore from "../../components/pacingScore/pacingScore";
import ContentWarning from "../../components/contentWarning/contentWarning";
import axios from "axios";



class CriticSurvey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: Object.values(this.props.match.params).toString(),
      author: "",
      tags: "",
      age_range: "",

      name: "",
      location: "",
      country: "",
      platform: "",
      accountName: "",
      bookType: "",
      clearness: "50",
      masterpiece: "50",
      educational: "50",
      discussion: "50",
      heart: "50",
      feeling: "50",
      feelingElements: "",
      accessibility: "50",
      diversity: "",
      favorite: "",
      leastFav: "",
      stars: "",
      keywords: "",
      extraInfo: "",
      feedback: "",
      chatter: "50",
      chatterElements: "",
      inspiration: "50",
      inspirationElements: "",
      pacing: "",
      gripping: "",
      contentWarning: "",
    };
  }

  componentDidMount = async () => {
    const { title } = this.props.match.params;

    // console.log(Object.values(this.state.title));

    console.log(this.state.title);

    var url =
      "https://cors-anywhere.herokuapp.com/https://rotten-books.herokuapp.com/bookAdmin/api/get_all_books";
    const response = await axios.get(url);

    this.setState({ books: response.data });
    console.log(this.state.books);

    var index = findWithAttr(
      this.state.books,
      "title",
      this.state.title.toString()
    );

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
    console.log(tags);

    var eachTag = this.state.tags.split(",");
    var numTags = eachTag.length;
    console.log(numTags);
  };

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
      bookType: data.book,
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

  handleWarning = (data) => {
    this.setState({
      contentWarning: data.contentWarning,
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
        this.state.platform +
        ";" +
        " Account Name: " +
        this.state.accountName +
        ";" +
        "Book Type: " +
        this.state.bookType +
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

 if (this.state.author !== "") {
    return (
      <form method="POST" action="">
        <FadeIn>
          <div style={container}>
            <h2>Book Level and Target Review</h2>
            <p style={bookInfo}>
              <i style={bookTitle}>{this.state.title}</i> by {this.state.author}
            </p>

            <PersonalInfoAuthor onChange={this.handlePersonalInfo} />
            <PlatformInfo onChange={this.handlePlatformInfo} />

            {/* for younger */}
            <ClearnessCalculator onChange={this.handleClearness} />
            <MasterpieceMeter onChange={this.handleMasterpiece} />

            <ChatterBar onChange={this.handleChatter} />
            <InspirationElement onChange={this.handleInspiration} />
            <FeelingFactor onChange={this.handleFeeling} />
            <AccessibilityScore onChange={this.handleAccessibility} />
            <GrippingGrade onChange={this.handleGripping} />
            <PacingScore onChange={this.handlePacing} />
            <DiversityRep onChange={this.handleDiversity} />
            <FavLeastFav onChange={this.handleFav} />
            <ContentWarning onChange={this.handleWarning} />
            <StarRating onChange={this.handleStars} />
            <Keywords onChange={this.handleKeywords} />
            <ExtraInfo onChange={this.handleExtraInfo} />
            <Feedback onChange={this.handleFeedback} />

            <button
              type="submit"
              className="submitButton"
              onClick={this.submitHandler}
            >
              SUBMIT
            </button>
          </div>
        </FadeIn>
      </form>
    );
    } else {
       return <div style={{ paddingLeft: 30 }}>Loading...</div>;
    }
  }
}



function findWithAttr(array, attr, value) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i].fields[attr] === value) {
      return i;
    }
  }
  return -1;
}


export default CriticSurvey;
