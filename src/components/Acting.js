import React from "react";

export function Acting({ selectedVideo }) {
  return (
    <>
      <h6>{selectedVideo.title}</h6>
      <div className="acting-video">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube-nocookie.com/embed/${selectedVideo.id}?autoplay=1&modestbranding=1&controls=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
