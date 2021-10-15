import React, { useEffect, useState } from "react";

export function VideoTitle({ id, title, setVideo, selectedVideo }) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (selectedVideo.title === title) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [selectedVideo, title]);

  return (
    <>
      <h3 onClick={() => setVideo({ title: title, id: id })}>{title}</h3>
      {selected && <div className="link-underline"></div>}
    </>
  );
}
