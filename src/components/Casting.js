import React from "react";
import grease from './../assets/grease.svg';
import vogue from './../assets/Vogue Portugal/Cover.jpg';
import athena from './../assets/Athena.svg';
import buffzine from './../assets/Buffalo Zine/buff_zine.jpg';

export function Casting() {
  return (
    <>
      <h6>Casting BINCH</h6>
      <div className="logos">
        <img src={grease} alt="grease logo" />
        <a href="#" ><img src={vogue} alt="vogue cover" /></a>
        <img src={buffzine} alt="Buffalo Zine Logo" />
        <img src={athena} alt="Athena logo" />
      </div>
    </>
  );
}
