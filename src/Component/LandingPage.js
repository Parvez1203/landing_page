import React, { useState } from "react";
import "../stylesheets/LandingPage.css";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";
import linkedin from "../images/linkedin.png";
import character1 from "../images/charachter1.jpg";
import character2 from "../images/character2.jpg";
import clock from "../images/clock.svg";
import image1 from "../images/image 1.png";
import image2 from "../images/image 2.png";

function LandingPage() {
  const [state, setState] = useState(false);
  const [loginActive, setLoginActive] = useState(true);
  const [signupActive, setSignupActive] = useState(false);
  const [forgotPassActive, setForgotPassActive] = useState(false);
  const [errorMsg, setErrorMsg] = useState();

  // nav links 
  const [homeActive, setHomeActive] = useState(true);
  const [featuresActive, setfeaturesActive] = useState(false);
  const [faqActive, setfaqActive] = useState(false);
  const [priceActive, setpriceActive] = useState(false);


  const checkMentorKey = (e) => {
    setErrorMsg("invalid Key!");
    console.log(e.target.value);

    if (e.target.value == "iammentor") {
      setErrorMsg("");
    }
  };

  const content = state ? (
    <div className="Mentor" style={{ textAlign: "left" }}>
      <p className="txt-968">Experties</p>
      <textarea
        rows="3"
        cols="50"
        className="inputs"
        placeholder="Expertise
        example: AI, ML, etc.
        (separate by new lines)"
        style={{ resize: "none" }}
      ></textarea>

      <p className="txt-968">Experience</p>
      <input
        name="experience_year"
        type="number"
        className="inputs"
        placeholder="year of experience"
      />

      <p className="txt-968">Interest</p>
      <textarea
        name="interests"
        rows="3"
        cols="50"
        className="inputs"
        placeholder="Interest
        example: Travelling, etc.
        (separate by new lines) "
        style={{ resize: "none" }}
      ></textarea>

      <div style={{ textAlign: "center" }}>
        {errorMsg != "" ? <p style={{ color: "red" }}>{errorMsg}</p> : null}
        <input
          name="mentor_key"
          type="password"
          className="inputs"
          onChange={(e) => checkMentorKey(e)}
          placeholder="Enter your Unique Mentor Key"
        />{" "}
        <br />
        <span
          className="txt-968"
          style={{ marginTop: "0.2em", fontSize: "0.7em" }}
        >
          To get the mentor key kindly{" "}
          <a href="mailto:Solvokit@Gmail.Com">mail us</a> your credentials.
        </span>
      </div>
    </div>
  ) : null;

  return (
    <div className="landing_page_container">
      <div className="hyperLinks">
        <span className="link" style={homeActive ? { color: "black",fontWeight:"bold",paddingRight:"0.4em",borderBottom:"3px solid #5454D4" } : null} onClick={()=>{setHomeActive(true);setfaqActive(false);setfeaturesActive(false);setpriceActive(false)}}>
          Home

          
        </span>
        
        <span className="link" style={featuresActive ? { color: "black",fontWeight:"bold",paddingRight:"0.4em",borderBottom:"3px solid #5454D4" } : null} onClick={()=>{setHomeActive(false);setfaqActive(false);setfeaturesActive(true);setpriceActive(false)}}> Features</span>
        <span className="link" style={faqActive ? { color: "black",fontWeight:"bold",paddingRight:"0.4em",borderBottom:"3px solid #5454D4" } : null} onClick={()=>{setHomeActive(false);setfaqActive(true);setfeaturesActive(false);setpriceActive(false)}}>FAQs</span>
        <span className="link" style={priceActive ? { color: "black",fontWeight:"bold",paddingRight:"0.4em",borderBottom:"3px solid #5454D4" } : null} onClick={()=>{setHomeActive(false);setfaqActive(false);setfeaturesActive(false);setpriceActive(true)}}>Pricing</span>
        {loginActive ? (
          <div
            className="signup_now_btn"
            style={{ backgroundColor: "rgba(86, 77, 74, 1)" }}
            onClick={() => {
              setLoginActive(false);
              setSignupActive(true);
              setForgotPassActive(false);
            }}
          >
            Sign up now
          </div>
        ) : null}
        {signupActive ? (
          <div
            className="signup_now_btn"
            style={{ backgroundColor: "rgba(4, 195, 92, 1)" }}
            onClick={() => {
              setLoginActive(true);
              setSignupActive(false);
              setForgotPassActive(false);
            }}
          >
            Login now
          </div>
        ) : null}

{forgotPassActive ? (
          <div
          className="signup_now_btn"
          style={{ backgroundColor: "rgba(4, 195, 92, 1)" }}
          onClick={() => {
            setLoginActive(true);
            setSignupActive(false);
            setForgotPassActive(false);
          }}
        >
          Login now
        </div>
        ) : null}


      </div>

      <div className="socio_links_div">
        <div className="socio_link">
          <img
            src={instagram}
            alt="image not found"
            className="socio_link_img"
          />
        </div>

        <div className="socio_link">
          <img src={youtube} alt="image not found" className="socio_link_img" />
        </div>

        <div className="socio_link">
          <img
            src={linkedin}
            alt="image not found"
            className="socio_link_img"
          />
        </div>
      </div>

      <div className="hero_section">
        <div className="text_section">
          <div className="main_title">
            <p className="grow-your-subscripti">
              Lessen your burden with <br />
              <span style={{ color: "#04C35C" }}>Solvo</span>
              <span style={{ color: "green", position: "relative" }}>
                kit{" "}
                <span
                  style={{ position: "absolute", transform: "translateY(-7%)" }}
                >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tCLLPHld5sI54432X7O2Zh-3%3A51?alt=media&token=90c639d8-b8e7-4632-8fdf-3bfb82e25182"
                    style={{ width: 40, height: 70 }}
                    alt="image not found"
                    className="tapback-reply-heart"
                  />
                </span>
              </span>{" "}
            </p>
          </div>

          <div className="secondary_sentence">
            <p className="outcome-centered-pro">
              Solvokit is a community driven online learning platform, here we
              learn and grow together.{" "}
            </p>
          </div>

          <div
            className="btn_section"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="get_started_btn">Get Started</div>

            <div className="arrow_icon">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tCLLPHld5sI54432X7O2Zh-3%3A46?alt=media&token=657d9095-81d2-485d-a0a0-05cb4d13abf0"
                alt="image not found"
                className="down-arrow"
                style={{ width: 50, height: 50 }}
              />
            </div>
          </div>
        </div>

        <div className="character1">
          <img
            src={character1}
            alt="image not found"
            className="down-arrow"
            style={{ width: 200, height: 200 }}
          />
        </div>

        {loginActive ? (
          <div className="login_section">
            <p className="txt-684">Welcome back</p>
            <p className="txt-502">Login to your account</p>
            <div className="login-form">
              <p className="txt-782">Email</p>
              <input
                type="email"
                name="email"
                id="email"
                className="inputs"
                placeholder="example@gmail.com"
              />
              <p className="txt-968">Password</p>
              <input
                type="password"
                name="password"
                id="password"
                className="inputs"
                placeholder="Enter your password"
              />
              <div
                className="flex-row"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setLoginActive(false);
                  setSignupActive(false);
                  setForgotPassActive(true);
                }}
              >
                <p className="txt-552">Forgot password?</p>
              </div>
            </div>
            <div className="login-button">
              <p className="txt-255">Login now</p>
            </div>
            <div className="google-button flex-row-hsb">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tCLLPHld5sI54432X7O2Zh-I3%3A55%3B3%3A22?alt=media&token=34e63e25-0813-4415-a7d3-20e5a6bfbb69"
                alt="image not found"
                className="iconfinder-_google-_-12987451"
              />
              <p className="txt-007">Or sign-in with google</p>
            </div>
          </div>
        ) : null}

        {forgotPassActive ? (
          <div className="login_section">
            <p className="txt-684">Don't remember your password?</p>
            <p className="txt-502">Please fill the details</p>
            <div className="login-form">
              <p className="txt-782">Email</p>
              <input
                type="email"
                name="email"
                id="email"
                className="inputs"
                placeholder="example@gmail.com"
              />
              
              
            </div>
            <div className="google-button" style={{marginTop:"0.5em"}}>
              <p className="txt-255">Send me password</p>
            </div>
            
          </div>
        ) : null}

        {signupActive ? (
          <div className="signup_section">
            <p className="txt-684">Welcome!</p>
            <p className="txt-502">Create an account</p>
            <form>
              <div className="login-form">
                <p className="txt-782">Name</p>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="inputs"
                  placeholder="Enter your name here"
                />

                <p className="txt-782">Email</p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="inputs"
                  placeholder="example@gmail.com"
                />

                <p className="txt-782">Qualifications</p>
                <textarea
                  name="qualification"
                  type="text"
                  rows="3"
                  cols="50"
                  className="inputs"
                  placeholder="Current Qualifications (separate by new lines) "
                  style={{ resize: "none" }}
                ></textarea>

                <p className="txt-782">Skills</p>
                <textarea
                  name="skills"
                  type="text"
                  rows="3"
                  cols="50"
                  className="inputs"
                  placeholder="Learning Skills
            example: AI, ML, etc.
            (separate by new lines) "
                  style={{ resize: "none" }}
                ></textarea>

                <p className="txt-782">Your country</p>
                <select
                  id="Country"
                  name="Country"
                  type="text"
                  className="inputs"
                >
                  <option selected disabled>
                    Choose one
                  </option>
                  <option value="Afganistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bermuda">Bermuda</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bonaire">Bonaire</option>
                  <option value="Bosnia & Herzegovina">
                    Bosnia & Herzegovina
                  </option>
                  <option value="Botswana">Botswana</option>
                  <option value="Brazil">Brazil</option>
                  <option value="British Indian Ocean Ter">
                    British Indian Ocean Ter
                  </option>
                  <option value="Brunei">Brunei</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Canary Islands">Canary Islands</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Cayman Islands">Cayman Islands</option>
                  <option value="Central African Republic">
                    Central African Republic
                  </option>
                  <option value="Chad">Chad</option>
                  <option value="Channel Islands">Channel Islands</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Christmas Island">Christmas Island</option>
                  <option value="Cocos Island">Cocos Island</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Cook Islands">Cook Islands</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Cote DIvoire">Cote DIvoire</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Curaco">Curacao</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="East Timor">East Timor</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Falkland Islands">Falkland Islands</option>
                  <option value="Faroe Islands">Faroe Islands</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="French Guiana">French Guiana</option>
                  <option value="French Polynesia">French Polynesia</option>
                  <option value="French Southern Ter">
                    French Southern Ter
                  </option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Gibraltar">Gibraltar</option>
                  <option value="Great Britain">Great Britain</option>
                  <option value="Greece">Greece</option>
                  <option value="Greenland">Greenland</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guadeloupe">Guadeloupe</option>
                  <option value="Guam">Guam</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="India">India</option>
                  <option value="Iran">Iran</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Isle of Man">Isle of Man</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Korea North">Korea North</option>
                  <option value="Korea Sout">Korea South</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Laos">Laos</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libya">Libya</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Macau">Macau</option>
                  <option value="Macedonia">Macedonia</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Martinique">Martinique</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mayotte">Mayotte</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Midway Islands">Midway Islands</option>
                  <option value="Moldova">Moldova</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Nambia">Nambia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherland Antilles">
                    Netherland Antilles
                  </option>
                  <option value="Netherlands">
                    Netherlands (Holland, Europe)
                  </option>
                  <option value="Nevis">Nevis</option>
                  <option value="New Caledonia">New Caledonia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Niue">Niue</option>
                  <option value="Norfolk Island">Norfolk Island</option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau Island">Palau Island</option>
                  <option value="Palestine">Palestine</option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Phillipines">Philippines</option>
                  <option value="Pitcairn Island">Pitcairn Island</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Republic of Montenegro">
                    Republic of Montenegro
                  </option>
                  <option value="Republic of Serbia">Republic of Serbia</option>
                  <option value="Reunion">Reunion</option>
                  <option value="Romania">Romania</option>
                  <option value="Russia">Russia</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="St Barthelemy">St Barthelemy</option>
                  <option value="St Eustatius">St Eustatius</option>
                  <option value="St Helena">St Helena</option>
                  <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                  <option value="St Lucia">St Lucia</option>
                  <option value="St Maarten">St Maarten</option>
                  <option value="St Pierre & Miquelon">
                    St Pierre & Miquelon
                  </option>
                  <option value="St Vincent & Grenadines">
                    St Vincent & Grenadines
                  </option>
                  <option value="Saipan">Saipan</option>
                  <option value="Samoa">Samoa</option>
                  <option value="Samoa American">Samoa American</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome & Principe">
                    Sao Tome & Principe
                  </option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Swaziland">Swaziland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syria">Syria</option>
                  <option value="Tahiti">Tahiti</option>
                  <option value="Taiwan">Taiwan</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Togo">Togo</option>
                  <option value="Tokelau">Tokelau</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Erimates">
                    United Arab Emirates
                  </option>
                  <option value="United States of America">
                    United States of America
                  </option>
                  <option value="Uraguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Vatican City State">Vatican City State</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Virgin Islands (Brit)">
                    Virgin Islands (Brit)
                  </option>
                  <option value="Virgin Islands (USA)">
                    Virgin Islands (USA)
                  </option>
                  <option value="Wake Island">Wake Island</option>
                  <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Zaire">Zaire</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>

                <p className="txt-968">Password</p>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="inputs"
                  placeholder="Enter your password"
                />

                <p className="txt-968">Confirm password</p>
                <input
                  type="password"
                  name="confirm password"
                  id="confirm_password"
                  className="inputs"
                  placeholder="Enter your password again"
                />

                <div
                  className="check"
                  style={{ textAlign: "center", margin: "0.6em 0" }}
                >
                  <input
                    type="checkbox"
                    className="checks"
                    name="is_mentor"
                    // checked={ state.checked }
                    onChange={() => setState(!state)}
                  />
                  <label className="txt-968">As a mentor</label>
                  {content}
                </div>

                <div
                  className="check"
                  style={{ textAlign: "center", margin: "0.6em 0" }}
                >
                  <input type="checkbox" className="checks" />
                  <label className="txt-968">
                    I, agree with the terms and conditions of Solvokit
                  </label>
                </div>
              </div>
              <div
                className="login-button"
                style={{ backgroundColor: "rgba(86, 77, 74, 1)" }}
              >
                <p className="txt-255">Sign up now</p>
              </div>
              <div className="google-button flex-row-hsb">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/tCLLPHld5sI54432X7O2Zh-I3%3A55%3B3%3A22?alt=media&token=34e63e25-0813-4415-a7d3-20e5a6bfbb69"
                  alt="image not found"
                  className="iconfinder-_google-_-12987451"
                />
                <p className="txt-007">Or Create with google</p>
              </div>
            </form>
          </div>
        ) : null}
      </div>

      <div className="offering_title_text" id="2nd">
        Here’s few thing about our Offerings !
      </div>

      <div className="offerings">
        <div className="description">
          <div className="offering1">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M166.667 33.3334H150V25.0001H170.833C173.167 25.0001 175 26.8334 175 29.1667V45.8334C175 48.1667 173.167 50.0001 170.833 50.0001H166.667V58.3334H158.333V41.6667H166.667V33.3334ZM158.333 75.0001H166.667V66.6668H158.333V75.0001ZM141.667 25.0001H133.333V58.3334H141.667V25.0001ZM191.667 125V150C191.667 154.583 187.917 158.333 183.333 158.333H175V166.667C175 175.917 167.583 183.333 158.333 183.333H41.6667C37.2464 183.333 33.0072 181.577 29.8816 178.452C26.756 175.326 25 171.087 25 166.667V158.333H16.6667C12.0834 158.333 8.33337 154.583 8.33337 150V125C8.33337 120.417 12.0834 116.667 16.6667 116.667H25C25 84.4168 51.0834 58.3334 83.3334 58.3334H91.6667V47.7501C86.6667 44.9168 83.3334 39.5001 83.3334 33.3334C83.3334 24.1667 90.8334 16.6667 100 16.6667C109.167 16.6667 116.667 24.1667 116.667 33.3334C116.667 39.5001 113.333 44.9168 108.333 47.7501V58.3334H116.667C119.5 58.3334 122.25 58.5834 125 59.0001V83.3334H164.5C171.354 93.0959 175.021 104.739 175 116.667H183.333C187.917 116.667 191.667 120.417 191.667 125ZM83.3334 129.167C83.3334 123.641 81.1384 118.342 77.2314 114.435C73.3244 110.528 68.0254 108.333 62.5 108.333C56.9747 108.333 51.6757 110.528 47.7686 114.435C43.8616 118.342 41.6667 123.641 41.6667 129.167C41.6667 134.692 43.8616 139.991 47.7686 143.898C51.6757 147.805 56.9747 150 62.5 150C68.0254 150 73.3244 147.805 77.2314 143.898C81.1384 139.991 83.3334 134.692 83.3334 129.167ZM158.333 129.167C158.333 123.641 156.138 118.342 152.231 114.435C148.324 110.528 143.025 108.333 137.5 108.333C131.975 108.333 126.676 110.528 122.769 114.435C118.862 118.342 116.667 123.641 116.667 129.167C116.667 134.692 118.862 139.991 122.769 143.898C126.676 147.805 131.975 150 137.5 150C143.025 150 148.324 147.805 152.231 143.898C156.138 139.991 158.333 134.692 158.333 129.167ZM141.667 66.6668H133.333V75.0001H141.667V66.6668Z"
                fill="#3F3534"
              />
            </svg>

            <p>Need help with homework?</p>
            <span>
              We are here to help you with homework, assignments and exam
              preperations.
            </span>
          </div>

          <div className="offering2">
            <img
              src={character2}
              style={{ width: 200, height: 200 }}
              alt="image not found"
              className="socio_link_img"
            />

            <p>Subject experts</p>
            <span>
              So you dont need to worry about the quality of content, we have
              best experts to help you.
            </span>
          </div>

          <div className="offering3">
            <img
              src={clock}
              style={{ width: 200, height: 200 }}
              alt="image not found"
              className="socio_link_img"
            />

            <p> Custom Slots Booking </p>
            <span>
              Book a slot or post any question, we are available for you.
            </span>
          </div>
        </div>
      </div>

      <div className="FAQs_text">FAQs</div>

      <div className="FAQ_images">
        <div className="FAQ_img_box">
          <img src={image1} alt="image not found" />
        </div>

        <div className="FAQ_img_box">
          <img
            src={image2}
            alt="image not found"
            style={{ transform: "translateY(-4em)" }}
          />
        </div>
      </div>

      <div className="plans_text">Get the right plan for future Goals </div>

      <div className="cards_container">
        <div className="free_plan_container">
              <span className="txt_100">Starter</span>

              <span className="txt_200">Free</span>

              <span className="txt_101">Community Asks</span>

              <span className="txt_101">24/7 Help</span>

              <span className="txt_101">Community Support</span>

              <div className="btn_free">
                   Get started
              </div>
        </div>

        <div className="premium_plan_container" style={{background:"#4D403C"}}>
              <span className="txt_100" style={{color:"#FFFFFFB2"}}>Premium</span>

              <span className="txt_200" style={{fontSize:"45px",color:"#FFFFFF"}}> <span style={{fontSize:"65px"}}>$3</span>/question</span>

              <span className="txt_101" style={{color:"#FFFFFF"}}>Ask Expert</span>

              <span className="txt_101" style={{color:"#FFFFFF"}}>Custom support</span>

              <span className="txt_101" style={{color:"#FFFFFF"}}>Premium Support</span>

              <div className="btn_free" style={{background:"#1B1514",color:"white"}}>
                   Get started
              </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
