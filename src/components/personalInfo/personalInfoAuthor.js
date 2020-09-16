import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMapMarkerAlt, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";



import './personalInfo.css';




const optionsCountry = [
  { value: 'US', label: "United States" },
  { value: 'CA', label: "Canada" },
  { value: 'Other', label: "Other" },
  
];

const optionsLocation = [
  {value:"AL", label:'Alabama'},
  {value:"AZ", label:'Arizona'},
  {value:"AR", label:'Arkansas'},
  {value:"CA", label:'California'},
  {value:"CO", label:'Colorado'},
  {value:"CT", label:'Connecticut'},
  {value:"DC", label:'District of Columbia'},
  {value:"DE", label:'Delaware'},
  {value:"FL", label:'Florida'},
  {value:"GA", label:'Georgia'},
  {value:"HI", label:'Hawaii'},
  {value:"ID", label:'Idaho'},
  {value:"IL", label:'Illinois'},
  {value:"IN", label:'Indiana'},
  {value:"IA", label:'Iowa'},
  {value:"KS", label:'Kansas'},
  {value:"KY", label:'Kentucky'},
  {value:"LA", label:'Louisiana'},
  {value:"ME", label:'Maine'},
  {value:"MD", label:'Maryland'},
  {value:"MA", label:'Massachusetts'},
  {value:"MI", label:'Michigan'},
  {value:"MN", label:'Minnesota'},
  {value:"MS", label:'Mississippi'},
  {value:"MO", label:'Missouri'},
  {value:"MT", label:'Montana'},
  {value:"NE", label:'Nebraska'},
  {value:"NV", label:'Nevada'},
  {value:"NH", label:'New Hampshire'},
  {value:"NJ", label:'New Jersey'},
  {value:"NM", label:'New Mexico'},
  {value:"NY", label:'New York'},
  {value:"NC", label:'North Carolina'},
  {value:"ND", label:'North Dakota'},
  {value:"OH", label:'Ohio'},
  {value:"OK", label:'Oklahoma'},
  {value:"OR", label:'Oregon'},
  {value:"PA", label:'Pennsylvania'},
  {value:"RI", label:'Rhode Island'},
  {value:"SC", label:'South Carolina'},
  {value:"SD", label:'South Dakota'},
  {value:"TN", label:'Tennessee'},
  {value:"TX", label:'Texas'},
  {value:"UT", label:'Utah'},
  {value:"VT", label:'Vermont'},
  {value:"VA", label:'Virginia'},
  {value:"WA", label:'Washington'},
  {value:"WV", label:'West Virginia'},
  {value:"WI", label:'Wisconsin'},
  {value:"WY", label:'Wyoming'},
  {value:"AL", label:'Alberta'},
  {value:"BC", label:'British Columbia'},
  {value:"LB", label:'Labrador'},
  {value:"MB", label:'Manitoba'},
  {value:"NB", label:'New Brunswick'},
  {value:"NF", label:'Newfoundland'},
  {value:"NS", label:'Nova Scotia'},
  {value:"NU", label:'Nunavut'},
  {value:"NW", label:'North West Territory'},
  {value:"ON", label:'Ontario'},
  {value:"PE", label:'Prince Edward Island'},
  {value:"QC", label:'Quebec'},
  {value:"SK", label:'Saskatchewan'},
  {value:"YU", label:'Yukon'},
  {value:"N/A", label:'N/A'},
];

class PersonalInfoAuthor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      country: "",
      isState: null,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    });
  };

  handleChangeAge = (e) => {
    this.setState(
      {
        age: e.value,
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(this.state);
        }
      }
    );
  };
  handleChangeLocation = (e) => {
    this.setState(
      {
        location: e.value,
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(this.state);
        }
      }
    );
  };
  handleChangeCountry = (e) => {
    this.setState(
      {
        country: e.value,
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(this.state);
        }
      }
    );
  };

  render() {
    const title = {
      paddingTop: 20,
      color: "#797D7F",
    };


    return (
      <>
        <p style={title}>Personal Information</p>

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
            <div className="selectTabPlatform">
              <input
                className="inputField"
                name="name"
                placeholder="Name"
                required
                onChange={this.handleChange}
              />
            </div>
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
            <div className="selectTab">
              <Select
                name="location"
                onChange={this.handleChangeLocation}
                options={optionsLocation}
                placeholder="State/Province"
                isSearchable={false}
              />
            </div>
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
            <div className="selectTab">
              <Select
                name="country"
                onChange={this.handleChangeCountry}
                options={optionsCountry}
                placeholder="Country"
                isSearchable={false}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}




export default PersonalInfoAuthor;
