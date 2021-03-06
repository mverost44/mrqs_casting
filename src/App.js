import React, { useState } from "react";
import "./App.css";
import { Link } from "./components/Link";
import { VideoTitle } from "./components/VideoTitle";
import { Nav } from "./components/Nav";
import { Photography } from "./components/Photography";
import { Acting } from "./components/Acting";
import { Casting } from "./components/Casting";
import closeIcon from "./assets/close_icon.svg";

function App() {
  const [state, setState] = useState("");
  const [selectedVideo, setVideo] = useState({
    title: "Monologue",
    id: "AWwpjbDFOzk",
  });

  const links = ["Photography", "Acting", "Casting"].map((text) => (
    <Link state={state} onClick={() => setState(text)} text={text} />
  ));

  const videoTitles = [
    { title: "Monologue", id: "AWwpjbDFOzk" },
    { title: "Comedic", id: "z1NE26GXZCo" },
    { title: "Cute", id: "2sq1ZXUfgSA" },
  ].map((video) => (
    <VideoTitle
      id={video.id}
      setVideo={setVideo}
      title={video.title}
      selectedVideo={selectedVideo}
    />
  ));

  return (
    <div className="App">
      <Nav
        videoTitles={videoTitles}
        selectedVideo={selectedVideo}
        setVideo={setVideo}
        state={state}
        links={links}
      />

      <div className="right-col">
        <div className="content-container">
          {state === "Photography" && <Photography />}
          {state === "Acting" && (
            <Acting videoTitles={videoTitles} selectedVideo={selectedVideo} />
          )}
          {state === "Casting" && <Casting />}
        </div>
      </div>
      { state != "" &&
        <div className="close-icon" onClick={() => setState("")}>
          <img src={closeIcon} alt="close icon" />
        </div>
      }
    </div>
  );
}

export default App;
