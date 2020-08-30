import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBirthdayCake, faMapMarkerAlt, faGlobe } from "@fortawesome/free-solid-svg-icons";
import './personalInfo.css';


export default class PersonalInfo extends React.Component {
    render() {

        const title = {
            paddingTop: 20,
        }

   
        
        

        return (
          <>
            <p style={title}>1. Personal Information</p>

            
            <div className="row">
              <div className="col" id="name">
                <p>
                  <FontAwesomeIcon icon={faUser} />
                </p>
              </div>
              <div className="column1" id="name">
                <p>Your Name:</p>
              </div>
              <div className="column2">
                <input className="input"></input>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p>
                  <FontAwesomeIcon icon={faBirthdayCake} />
                </p>
              </div>
              <div className="column1">
                <p>How old is the child with whom you read this book?:</p>
              </div>
              <div className="column2">
                <input className="input"></input>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </p>
              </div>
              <div className="column1">
                <p>State/Province:</p>
              </div>
              <div className="column2">
                <input className="input"></input>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p>
                  <FontAwesomeIcon icon={faGlobe} />
                </p>
              </div>
              <div className="column1">
                <p>Country:</p>
              </div>
              <div className="column2">
                <input className="input"></input>
              </div>
            </div>
          </>
        );



    }

    
}

