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
          <img src={linkedIn} alt="linkedin link" />
          <img src={twitter} alt="twitter link" />
          <img src={instagram} alt="instagram link" />
        </div>
      </div>
    </>
  );
}
