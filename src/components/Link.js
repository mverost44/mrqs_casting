import React from "react";

export function Link({ text, onClick, state }) {
  return (
    <>
      <div onClick={onClick} className={state === text ? "selected" : "link"}>
        <h2>{text}</h2>
        <div className="line-sm"></div>
      </div>
    </>
  );
}
