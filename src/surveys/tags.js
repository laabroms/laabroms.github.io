import React from "react";
import FadeIn from "react-fade-in";
import ActionAverage from "../tags/actionAverage";
import FestivityFactor from "../tags/festivityFactor";
import SillyScore from '../tags/sillyScore';
import SpookyScore from "../tags/spookyScore";
import FriendshipScore from '../tags/friendshipScore';
import AwesomeAnimals from "../tags/awesomeAnimals";
import MasterpieceMeterOlder from "../components/masterpieceMeter/masterpieceMeterOlder";
import MysteryMeter from '../tags/mysteryMeter';
import FantasyFactor from "../tags/fantasyFactor";
import RealnessRating from "../tags/realnessRating";
import HeartMeter from "../tags/heartMeter";
import ThrillFactor from "../tags/thrillFactor";
import SuspenseScale from '../tags/suspenseScale';

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }


  render() {
    const container = {
      margin: "3%",
    };
   

    return (
      <form method="POST" action="">
        <FadeIn>
          <div style={container}>
            <div style={{ fontSize: "30px", fontWeight: "bold" }}>
              YOUNGER BOOK TAGS:
            </div>
            <SillyScore />
            <SpookyScore />
            <FestivityFactor />
            <ActionAverage />
            <FriendshipScore />
            <AwesomeAnimals />
            <div
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                paddingTop: "50px",
              }}
            >
              MIDDLE GRADE TAGS:
            </div>
            <SpookyScore />
            <MasterpieceMeterOlder />
            <MysteryMeter />
            <FantasyFactor />
            <ActionAverage />
            <RealnessRating />
            <SillyScore />
            <FriendshipScore />
            <AwesomeAnimals />
            <div
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                paddingTop: "50px",
              }}
            >
              YOUNG ADULT TAGS:
            </div>
            <HeartMeter />
            <MasterpieceMeterOlder />
            <ThrillFactor />
            <MysteryMeter />
            <SuspenseScale />
            <FantasyFactor />
            <RealnessRating />
            

          </div>
        </FadeIn>
      </form>
    );
  }
}

export default Tags;
