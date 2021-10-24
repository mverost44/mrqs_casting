import React from "react";
import linkedIn from "./../assets/linkedin.png";
import twitter from "./../assets/twitter.svg";
import instagram from "./../assets/instagram.svg";

export function SocialLinks() {
  return (
    <>
      <div className="social">
        <h6>Find Me On</h6>
        <div className="social-links">
          <a href="https://linkedin.com/in/marquiswhaley" target="_blank">
            <img src={linkedIn} alt="linkedin link" />
          </a>
          <a href="https://twitter.com/mrqswhly" target="_blank">
            <img src={twitter} alt="twitter link" />
          </a>
          <a href="https://www.instagram.com/mrqs.design" target="_blank">
            <img src={instagram} alt="instagram link" />
          </a>
        </div>
      </div>
    </>
  );
}
