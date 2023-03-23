import React from 'react';
import twitter from "../images/twitter-icon.png"
import facebook from "../images/facebook-icon.png"
import instagram from "../images/instagram-icon.png"
import github from "../images/github-icon.png"

export default function Footer() {
    return (
        <div className="footer-container">
            <img className="icon" src={twitter} alt="twitter icon"/>
            <img className="icon" src={facebook} alt="facebook icon"/>
            <img className="icon" src={instagram} alt="instagram icon"/>
            <img className="icon" src={github} alt="github icon"/>
        </div>
    )
}