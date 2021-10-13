import React from "react";
import { SocialLinks } from "./SocialLinks";

export function Nav({ videoState, setVideoState, state, links }) {
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
                <h3 onClick={() => setVideoState("1")}>Video 1</h3>
                <h3 onClick={() => setVideoState("2")}>Video 2</h3>
                <h3 onClick={() => setVideoState("3")}>Video 3</h3>
                <h3 onClick={() => setVideoState("4")}>Video 4</h3>
              </div>
              <div className="nav-links">{[links[0], links[2]]}</div>
            </>
          )}

          {state === "Casting" && (
            <>
              {[links[2]]}
              <div className="nav-links">{[links[0], links[1]]}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
