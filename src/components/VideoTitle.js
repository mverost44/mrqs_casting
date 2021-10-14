import React, { useState } from "react";

export function VideoTitle({ id, title, setVideo, selectedVideo }) {
  return (
    <>
      <h3
        className={selectedVideo.title === title ? "selected-video" : ""}
        onClick={() => setVideo({ title: title, id: id })}
      >
        {title}
      </h3>
    </>
  );
}
