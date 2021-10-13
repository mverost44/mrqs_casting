import React, { useState } from "react";
import "./App.css";
import { Link } from "./components/Link";
import { Nav } from "./components/Nav";
import { Photography } from "./components/Photography";
import { Acting } from "./components/Acting";
import { Casting } from "./components/Casting";

function App() {
  const [state, setState] = useState("");
  const [videoState, setVideoState] = useState("");

  const links = ["Photography", "Acting", "Casting"].map((text) => (
    <Link state={state} onClick={() => setState(text)} text={text} />
  ));

  return (
    <div className="App">
      <Nav
        videoState={videoState}
        setVideoState={setVideoState}
        state={state}
        links={links}
      />

      <div className="right-col">
        <div className="content-container">
          {state === "Photography" && <Photography />}
          {state === "Acting" && <Acting />}
          {state === "Casting" && <Casting />}
        </div>
      </div>
    </div>
  );
}

export default App;
