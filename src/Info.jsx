import React from "react";
import ProfilePic from "../images/Profile.jpg";
import linkedin from "../images/linkedin.png";
import email from "../images/email.png";

export default function Info() {
  return (
    <div>
      <div className="info-container">
        <img
          className="profile-pic"
          src={ProfilePic}
          alt="Profile picture of Keith"
        />
        <h2 className="full-name">Keith Petryshyn</h2>
        <p className="title">Frontend Developer</p>
        <p className="website">keithpetryshyn.website</p>
        <div className="btn-container">
          <button className="email-btn">
            <img className="email-image" src={email} alt="email" />
            Email
          </button>
          <button className="linkedin-btn">
            <img className="linkedin-image" src={linkedin} alt="LinkedIn" />
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
}
