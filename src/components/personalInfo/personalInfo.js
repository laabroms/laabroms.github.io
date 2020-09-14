import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBirthdayCake, faMapMarkerAlt, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import './personalInfo.css';


class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
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

      
  })}

 

  render() {
    const title = {
      paddingTop: 20,
      color: "#797D7F",
    };

    const { classes } = this.props;



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
            {/* <input
              name="name"
              className="input"
              required
              // value={this.state.name}
              // onChange={(e) => this.setState({ name: e.target.value })}
              onChange={this.handleChange}
            ></input> */}
            <div className={classes.root}>
              <TextField
                id="standard-basic"
                name="name"
                label="Name"
                required
                className="inputNew"
                onChange={this.handleChange}
              />
            </div>
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
            {/* <input
              name="age"
              className="input"
              type="number"
              min="0"
              required
              // value={this.state.age}
              // onChange={(e) => this.setState({ age: e.target.value })}
              onChange={this.handleChange}
            ></input> */}
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                className="inputNew"
                name="age"
                required
                id="demo-simple-select"
                // value={this.state.age}
                onChange={this.handleChange}
              >
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={11}>11</MenuItem>
                <MenuItem value={12}>12</MenuItem>
                <MenuItem value={13}>13</MenuItem>
                <MenuItem value={14}>14</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={16}>16</MenuItem>
                <MenuItem value={17}>17</MenuItem>
              </Select>
            </FormControl>
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
            {/* <input
              name="location"
              className="input"
              required
              // value={this.state.location}
              // onChange={(e) => this.setState({ location: e.target.value })}
              onChange={this.handleChange}
            ></input> */}

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                State/Province
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                className="inputNew"
                name="location"
                required
                id="demo-simple-select"
                onChange={this.handleChange}
              >
                <MenuItem value={"AL"}>Alabama</MenuItem>
                <MenuItem value={"AK"}>Alaska</MenuItem>
                <MenuItem value={"AZ"}>Arizona</MenuItem>
                <MenuItem value={"AR"}>Arkansas</MenuItem>
                <MenuItem value={"CA"}>California</MenuItem>
                <MenuItem value={"CO"}>Colorado</MenuItem>
                <MenuItem value={"CT"}>Connecticut</MenuItem>
                <MenuItem value={"DC"}>District of Columbia</MenuItem>
                <MenuItem value={"DE"}>Delaware</MenuItem>
                <MenuItem value={"FL"}>Florida</MenuItem>
                <MenuItem value={"GA"}>Georgia</MenuItem>
                <MenuItem value={"HI"}>Hawaii</MenuItem>
                <MenuItem value={"ID"}>Idaho</MenuItem>
                <MenuItem value={"IL"}>Illinois</MenuItem>
                <MenuItem value={"IN"}>Indiana</MenuItem>
                <MenuItem value={"IA"}>Iowa</MenuItem>
                <MenuItem value={"KS"}>Kansas</MenuItem>
                <MenuItem value={"KY"}>Kentucky</MenuItem>
                <MenuItem value={"LA"}>Louisiana</MenuItem>
                <MenuItem value={"ME"}>Maine</MenuItem>
                <MenuItem value={"MD"}>Maryland</MenuItem>
                <MenuItem value={"MA"}>Massachusetts</MenuItem>
                <MenuItem value={"MI"}>Michigan</MenuItem>
                <MenuItem value={"MN"}>Minnesota</MenuItem>
                <MenuItem value={"MS"}>Mississippi</MenuItem>
                <MenuItem value={"MO"}>Missouri</MenuItem>
                <MenuItem value={"MT"}>Montana</MenuItem>
                <MenuItem value={"NE"}>Nebraska</MenuItem>
                <MenuItem value={"NV"}>Nevada</MenuItem>
                <MenuItem value={"NH"}>New Hampshire</MenuItem>
                <MenuItem value={"NJ"}>New Jersey</MenuItem>
                <MenuItem value={"NM"}>New Mexico</MenuItem>
                <MenuItem value={"NY"}>New York</MenuItem>
                <MenuItem value={"NC"}>North Carolina</MenuItem>
                <MenuItem value={"ND"}>North Dakota</MenuItem>
                <MenuItem value={"OH"}>Ohio</MenuItem>
                <MenuItem value={"OK"}>Oklahoma</MenuItem>
                <MenuItem value={"OR"}>Oregon</MenuItem>
                <MenuItem value={"PA"}>Pennsylvania</MenuItem>
                <MenuItem value={"RI"}>Rhode Island</MenuItem>
                <MenuItem value={"SC"}>South Carolina</MenuItem>
                <MenuItem value={"SD"}>South Dakota</MenuItem>
                <MenuItem value={"TN"}>Tennessee</MenuItem>
                <MenuItem value={"TX"}>Texas</MenuItem>
                <MenuItem value={"UT"}>Utah</MenuItem>
                <MenuItem value={"VT"}>Vermont</MenuItem>
                <MenuItem value={"VA"}>Virginia</MenuItem>
                <MenuItem value={"WA"}>Washington</MenuItem>
                <MenuItem value={"WV"}>West Virginia</MenuItem>
                <MenuItem value={"WI"}>Wisconsin</MenuItem>
                <MenuItem value={"WY"}>Wyoming</MenuItem>
                <MenuItem value={"AL"}>Alberta</MenuItem>
                <MenuItem value={"BC"}>British Columbia</MenuItem>
                <MenuItem value={"LB"}>Labrador</MenuItem>
                <MenuItem value={"MB"}>Manitoba</MenuItem>
                <MenuItem value={"NB"}>New Brunswick</MenuItem>
                <MenuItem value={"NF"}>Newfoundland</MenuItem>
                <MenuItem value={"NS"}>Nova Scotia</MenuItem>
                <MenuItem value={"NU"}>Nunavut</MenuItem>
                <MenuItem value={"NW"}>North West Territory</MenuItem>
                <MenuItem value={"ON"}>Ontario</MenuItem>
                <MenuItem value={"PE"}>Prince Edward Island</MenuItem>
                <MenuItem value={"QC"}>Quebec</MenuItem>
                <MenuItem value={"SK"}>Saskatchewen</MenuItem>
                <MenuItem value={"YU"}>Yukon</MenuItem>
                <MenuItem value={"N/A"}>N/A</MenuItem>
              </Select>
            </FormControl>
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
            {/* <input
              name="country"
              className="input"
              required
              // value={this.state.country}
              // onChange={(e) => this.setState({ country: e.target.value })}
              onChange={this.handleChange}
            ></input> */}
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Country
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                className="inputNew"
                name="country"
                required
                // value={this.state.country}
                id="demo-simple-select"
                onChange={this.handleChange}
              >
                <MenuItem value="US">United States</MenuItem>
                <MenuItem value="CA">Canada</MenuItem>
                <MenuItem value="AF">Afghanistan</MenuItem>
                <MenuItem value="AX">Åland Islands</MenuItem>
                <MenuItem value="AL">Albania</MenuItem>
                <MenuItem value="DZ">Algeria</MenuItem>
                <MenuItem value="AS">American Samoa</MenuItem>
                <MenuItem value="AD">Andorra</MenuItem>
                <MenuItem value="AO">Angola</MenuItem>
                <MenuItem value="AI">Anguilla</MenuItem>
                <MenuItem value="AQ">Antarctica</MenuItem>
                <MenuItem value="AG">Antigua and Barbuda</MenuItem>
                <MenuItem value="AR">Argentina</MenuItem>
                <MenuItem value="AM">Armenia</MenuItem>
                <MenuItem value="AW">Aruba</MenuItem>
                <MenuItem value="AU">Australia</MenuItem>
                <MenuItem value="AT">Austria</MenuItem>
                <MenuItem value="AZ">Azerbaijan</MenuItem>
                <MenuItem value="BS">Bahamas</MenuItem>
                <MenuItem value="BH">Bahrain</MenuItem>
                <MenuItem value="BD">Bangladesh</MenuItem>
                <MenuItem value="BB">Barbados</MenuItem>
                <MenuItem value="BY">Belarus</MenuItem>
                <MenuItem value="BE">Belgium</MenuItem>
                <MenuItem value="BZ">Belize</MenuItem>
                <MenuItem value="BJ">Benin</MenuItem>
                <MenuItem value="BM">Bermuda</MenuItem>
                <MenuItem value="BT">Bhutan</MenuItem>
                <MenuItem value="BO">Bolivia, Plurinational State of</MenuItem>
                <MenuItem value="BQ">Bonaire, Sint Eustatius and Saba</MenuItem>
                <MenuItem value="BA">Bosnia and Herzegovina</MenuItem>
                <MenuItem value="BW">Botswana</MenuItem>
                <MenuItem value="BV">Bouvet Island</MenuItem>
                <MenuItem value="BR">Brazil</MenuItem>
                <MenuItem value="IO">British Indian Ocean Territory</MenuItem>
                <MenuItem value="BN">Brunei Darussalam</MenuItem>
                <MenuItem value="BG">Bulgaria</MenuItem>
                <MenuItem value="BF">Burkina Faso</MenuItem>
                <MenuItem value="BI">Burundi</MenuItem>
                <MenuItem value="KH">Cambodia</MenuItem>
                <MenuItem value="CM">Cameroon</MenuItem>
                <MenuItem value="CV">Cape Verde</MenuItem>
                <MenuItem value="KY">Cayman Islands</MenuItem>
                <MenuItem value="CF">Central African Republic</MenuItem>
                <MenuItem value="TD">Chad</MenuItem>
                <MenuItem value="CL">Chile</MenuItem>
                <MenuItem value="CN">China</MenuItem>
                <MenuItem value="CX">Christmas Island</MenuItem>
                <MenuItem value="CC">Cocos (Keeling) Islands</MenuItem>
                <MenuItem value="CO">Colombia</MenuItem>
                <MenuItem value="KM">Comoros</MenuItem>
                <MenuItem value="CG">Congo</MenuItem>
                <MenuItem value="CD">
                  Congo, the Democratic Republic of the
                </MenuItem>
                <MenuItem value="CK">Cook Islands</MenuItem>
                <MenuItem value="CR">Costa Rica</MenuItem>
                <MenuItem value="CI">Côte d'Ivoire</MenuItem>
                <MenuItem value="HR">Croatia</MenuItem>
                <MenuItem value="CU">Cuba</MenuItem>
                <MenuItem value="CW">Curaçao</MenuItem>
                <MenuItem value="CY">Cyprus</MenuItem>
                <MenuItem value="CZ">Czech Republic</MenuItem>
                <MenuItem value="DK">Denmark</MenuItem>
                <MenuItem value="DJ">Djibouti</MenuItem>
                <MenuItem value="DM">Dominica</MenuItem>
                <MenuItem value="DO">Dominican Republic</MenuItem>
                <MenuItem value="EC">Ecuador</MenuItem>
                <MenuItem value="EG">Egypt</MenuItem>
                <MenuItem value="SV">El Salvador</MenuItem>
                <MenuItem value="GQ">Equatorial Guinea</MenuItem>
                <MenuItem value="ER">Eritrea</MenuItem>
                <MenuItem value="EE">Estonia</MenuItem>
                <MenuItem value="ET">Ethiopia</MenuItem>
                <MenuItem value="FK">Falkland Islands (Malvinas)</MenuItem>
                <MenuItem value="FO">Faroe Islands</MenuItem>
                <MenuItem value="FJ">Fiji</MenuItem>
                <MenuItem value="FI">Finland</MenuItem>
                <MenuItem value="FR">France</MenuItem>
                <MenuItem value="GF">French Guiana</MenuItem>
                <MenuItem value="PF">French Polynesia</MenuItem>
                <MenuItem value="TF">French Southern Territories</MenuItem>
                <MenuItem value="GA">Gabon</MenuItem>
                <MenuItem value="GM">Gambia</MenuItem>
                <MenuItem value="GE">Georgia</MenuItem>
                <MenuItem value="DE">Germany</MenuItem>
                <MenuItem value="GH">Ghana</MenuItem>
                <MenuItem value="GI">Gibraltar</MenuItem>
                <MenuItem value="GR">Greece</MenuItem>
                <MenuItem value="GL">Greenland</MenuItem>
                <MenuItem value="GD">Grenada</MenuItem>
                <MenuItem value="GP">Guadeloupe</MenuItem>
                <MenuItem value="GU">Guam</MenuItem>
                <MenuItem value="GT">Guatemala</MenuItem>
                <MenuItem value="GG">Guernsey</MenuItem>
                <MenuItem value="GN">Guinea</MenuItem>
                <MenuItem value="GW">Guinea-Bissau</MenuItem>
                <MenuItem value="GY">Guyana</MenuItem>
                <MenuItem value="HT">Haiti</MenuItem>
                <MenuItem value="HM">
                  Heard Island and McDonald Islands
                </MenuItem>
                <MenuItem value="VA">Holy See (Vatican City State)</MenuItem>
                <MenuItem value="HN">Honduras</MenuItem>
                <MenuItem value="HK">Hong Kong</MenuItem>
                <MenuItem value="HU">Hungary</MenuItem>
                <MenuItem value="IS">Iceland</MenuItem>
                <MenuItem value="IN">India</MenuItem>
                <MenuItem value="ID">Indonesia</MenuItem>
                <MenuItem value="IR">Iran, Islamic Republic of</MenuItem>
                <MenuItem value="IQ">Iraq</MenuItem>
                <MenuItem value="IE">Ireland</MenuItem>
                <MenuItem value="IM">Isle of Man</MenuItem>
                <MenuItem value="IL">Israel</MenuItem>
                <MenuItem value="IT">Italy</MenuItem>
                <MenuItem value="JM">Jamaica</MenuItem>
                <MenuItem value="JP">Japan</MenuItem>
                <MenuItem value="JE">Jersey</MenuItem>
                <MenuItem value="JO">Jordan</MenuItem>
                <MenuItem value="KZ">Kazakhstan</MenuItem>
                <MenuItem value="KE">Kenya</MenuItem>
                <MenuItem value="KI">Kiribati</MenuItem>
                <MenuItem value="KP">
                  Korea, Democratic People's Republic of
                </MenuItem>
                <MenuItem value="KR">Korea, Republic of</MenuItem>
                <MenuItem value="KW">Kuwait</MenuItem>
                <MenuItem value="KG">Kyrgyzstan</MenuItem>
                <MenuItem value="LA">Lao People's Democratic Republic</MenuItem>
                <MenuItem value="LV">Latvia</MenuItem>
                <MenuItem value="LB">Lebanon</MenuItem>
                <MenuItem value="LS">Lesotho</MenuItem>
                <MenuItem value="LR">Liberia</MenuItem>
                <MenuItem value="LY">Libya</MenuItem>
                <MenuItem value="LI">Liechtenstein</MenuItem>
                <MenuItem value="LT">Lithuania</MenuItem>
                <MenuItem value="LU">Luxembourg</MenuItem>
                <MenuItem value="MO">Macao</MenuItem>
                <MenuItem value="MK">
                  Macedonia, the former Yugoslav Republic of
                </MenuItem>
                <MenuItem value="MG">Madagascar</MenuItem>
                <MenuItem value="MW">Malawi</MenuItem>
                <MenuItem value="MY">Malaysia</MenuItem>
                <MenuItem value="MV">Maldives</MenuItem>
                <MenuItem value="ML">Mali</MenuItem>
                <MenuItem value="MT">Malta</MenuItem>
                <MenuItem value="MH">Marshall Islands</MenuItem>
                <MenuItem value="MQ">Martinique</MenuItem>
                <MenuItem value="MR">Mauritania</MenuItem>
                <MenuItem value="MU">Mauritius</MenuItem>
                <MenuItem value="YT">Mayotte</MenuItem>
                <MenuItem value="MX">Mexico</MenuItem>
                <MenuItem value="FM">Micronesia, Federated States of</MenuItem>
                <MenuItem value="MD">Moldova, Republic of</MenuItem>
                <MenuItem value="MC">Monaco</MenuItem>
                <MenuItem value="MN">Mongolia</MenuItem>
                <MenuItem value="ME">Montenegro</MenuItem>
                <MenuItem value="MS">Montserrat</MenuItem>
                <MenuItem value="MA">Morocco</MenuItem>
                <MenuItem value="MZ">Mozambique</MenuItem>
                <MenuItem value="MM">Myanmar</MenuItem>
                <MenuItem value="NA">Namibia</MenuItem>
                <MenuItem value="NR">Nauru</MenuItem>
                <MenuItem value="NP">Nepal</MenuItem>
                <MenuItem value="NL">Netherlands</MenuItem>
                <MenuItem value="NC">New Caledonia</MenuItem>
                <MenuItem value="NZ">New Zealand</MenuItem>
                <MenuItem value="NI">Nicaragua</MenuItem>
                <MenuItem value="NE">Niger</MenuItem>
                <MenuItem value="NG">Nigeria</MenuItem>
                <MenuItem value="NU">Niue</MenuItem>
                <MenuItem value="NF">Norfolk Island</MenuItem>
                <MenuItem value="MP">Northern Mariana Islands</MenuItem>
                <MenuItem value="NO">Norway</MenuItem>
                <MenuItem value="OM">Oman</MenuItem>
                <MenuItem value="PK">Pakistan</MenuItem>
                <MenuItem value="PW">Palau</MenuItem>
                <MenuItem value="PS">Palestinian Territory, Occupied</MenuItem>
                <MenuItem value="PA">Panama</MenuItem>
                <MenuItem value="PG">Papua New Guinea</MenuItem>
                <MenuItem value="PY">Paraguay</MenuItem>
                <MenuItem value="PE">Peru</MenuItem>
                <MenuItem value="PH">Philippines</MenuItem>
                <MenuItem value="PN">Pitcairn</MenuItem>
                <MenuItem value="PL">Poland</MenuItem>
                <MenuItem value="PT">Portugal</MenuItem>
                <MenuItem value="PR">Puerto Rico</MenuItem>
                <MenuItem value="QA">Qatar</MenuItem>
                <MenuItem value="RE">Réunion</MenuItem>
                <MenuItem value="RO">Romania</MenuItem>
                <MenuItem value="RU">Russian Federation</MenuItem>
                <MenuItem value="RW">Rwanda</MenuItem>
                <MenuItem value="BL">Saint Barthélemy</MenuItem>
                <MenuItem value="SH">
                  Saint Helena, Ascension and Tristan da Cunha
                </MenuItem>
                <MenuItem value="KN">Saint Kitts and Nevis</MenuItem>
                <MenuItem value="LC">Saint Lucia</MenuItem>
                <MenuItem value="MF">Saint Martin (French part)</MenuItem>
                <MenuItem value="PM">Saint Pierre and Miquelon</MenuItem>
                <MenuItem value="VC">Saint Vincent and the Grenadines</MenuItem>
                <MenuItem value="WS">Samoa</MenuItem>
                <MenuItem value="SM">San Marino</MenuItem>
                <MenuItem value="ST">Sao Tome and Principe</MenuItem>
                <MenuItem value="SA">Saudi Arabia</MenuItem>
                <MenuItem value="SN">Senegal</MenuItem>
                <MenuItem value="RS">Serbia</MenuItem>
                <MenuItem value="SC">Seychelles</MenuItem>
                <MenuItem value="SL">Sierra Leone</MenuItem>
                <MenuItem value="SG">Singapore</MenuItem>
                <MenuItem value="SX">Sint Maarten (Dutch part)</MenuItem>
                <MenuItem value="SK">Slovakia</MenuItem>
                <MenuItem value="SI">Slovenia</MenuItem>
                <MenuItem value="SB">Solomon Islands</MenuItem>
                <MenuItem value="SO">Somalia</MenuItem>
                <MenuItem value="ZA">South Africa</MenuItem>
                <MenuItem value="GS">
                  South Georgia and the South Sandwich Islands
                </MenuItem>
                <MenuItem value="SS">South Sudan</MenuItem>
                <MenuItem value="ES">Spain</MenuItem>
                <MenuItem value="LK">Sri Lanka</MenuItem>
                <MenuItem value="SD">Sudan</MenuItem>
                <MenuItem value="SR">Suriname</MenuItem>
                <MenuItem value="SJ">Svalbard and Jan Mayen</MenuItem>
                <MenuItem value="SZ">Swaziland</MenuItem>
                <MenuItem value="SE">Sweden</MenuItem>
                <MenuItem value="CH">Switzerland</MenuItem>
                <MenuItem value="SY">Syrian Arab Republic</MenuItem>
                <MenuItem value="TW">Taiwan, Province of China</MenuItem>
                <MenuItem value="TJ">Tajikistan</MenuItem>
                <MenuItem value="TZ">Tanzania, United Republic of</MenuItem>
                <MenuItem value="TH">Thailand</MenuItem>
                <MenuItem value="TL">Timor-Leste</MenuItem>
                <MenuItem value="TG">Togo</MenuItem>
                <MenuItem value="TK">Tokelau</MenuItem>
                <MenuItem value="TO">Tonga</MenuItem>
                <MenuItem value="TT">Trinidad and Tobago</MenuItem>
                <MenuItem value="TN">Tunisia</MenuItem>
                <MenuItem value="TR">Turkey</MenuItem>
                <MenuItem value="TM">Turkmenistan</MenuItem>
                <MenuItem value="TC">Turks and Caicos Islands</MenuItem>
                <MenuItem value="TV">Tuvalu</MenuItem>
                <MenuItem value="UG">Uganda</MenuItem>
                <MenuItem value="UA">Ukraine</MenuItem>
                <MenuItem value="AE">United Arab Emirates</MenuItem>
                <MenuItem value="GB">United Kingdom</MenuItem>
                <MenuItem value="UM">
                  United States Minor Outlying Islands
                </MenuItem>
                <MenuItem value="UY">Uruguay</MenuItem>
                <MenuItem value="UZ">Uzbekistan</MenuItem>
                <MenuItem value="VU">Vanuatu</MenuItem>
                <MenuItem value="VE">
                  Venezuela, Bolivarian Republic of
                </MenuItem>
                <MenuItem value="VN">Viet Nam</MenuItem>
                <MenuItem value="VG">Virgin Islands, British</MenuItem>
                <MenuItem value="VI">Virgin Islands, U.S.</MenuItem>
                <MenuItem value="WF">Wallis and Futuna</MenuItem>
                <MenuItem value="EH">Western Sahara</MenuItem>
                <MenuItem value="YE">Yemen</MenuItem>
                <MenuItem value="ZM">Zambia</MenuItem>
                <MenuItem value="ZW">Zimbabwe</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </>
    );
  }
}


const styles = (theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  
});


export default withStyles(styles)(PersonalInfo);
