import React from "react";
import { SocialLinks } from "./SocialLinks";

export function Nav({ state, links, videoTitles }) {
  return (
    <>
      <div className={state === "" ? "left-col" : "left-col active-nav"}>
        <div className="nav-content">
          {state === "" && (
            <>
              <h1>Marquis Whaley</h1>
              <div className="nav-links">{links}</div>

              <SocialLinks />
            </>
          )}
          {state === "Photography" && (
            <>
              {[links[0]]}
              <div className="cta">
                <h3>Get High Quality Headshots</h3>
                <a
                  href="https://mrqsjpeg.setmore.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book Now
                </a>
              </div>
              <div className="nav-links">{[links[1], links[2]]}</div>
            </>
          )}

          {state === "Acting" && (
            <>
              {[links[1]]}
              <div className="video-list">
                <h6>Video Selection</h6>
                {videoTitles}
              </div>
              <div className="nav-links">{[links[0], links[2]]}</div>
            </>
          )}

          {state === "Casting" && (
            <>
              {[links[2]]}
              <p>Click on a project logo for more details</p>
              <div className="nav-links">{[links[0], links[1]]}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
