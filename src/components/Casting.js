import React from "react";
import grease from './../assets/grease.svg';
import vogue from './../assets/Vogue Portugal/Cover.jpg';
import athena from './../assets/Athena.svg';
import buffzine from './../assets/Buffalo Zine/buff_zine.jpg';

export function Casting() {
  return (
    <>
      <h6>Casting Experience</h6>
      <div className="logos">
        <a href="https://www.imdb.com/title/tt11127388/?ref_=ttfc_fc_tt" target="_blank">
          <img src={grease} alt="grease logo" />
        </a>
        <a href="https://mrqswhly.dropmark.com/1086100" target="_blank">
          <img src={vogue} alt="vogue portugal cover" />
        </a>
        <a href="https://www.youtube.com/watch?v=4pK-A1SHMuE&list=PLu5lFK9e1eQZM5vYxrTlXCpmnQqJQ3erb" target="_blank">
          <img src={athena} alt="Athena logo" />
        </a>
      </div>
    </>
  );
}
