import React from "react";
import Gallery from "react-grid-gallery";

// function generateImageArr(numImages) {
//   const imgArr = [];
//   for (let i = 0; i < numImages; i++) {
//     imgArr.push({
//       src: `./../assets/Headshots/${i + 1}.jpg`,
//       thumbnail: `./../assets/Headshots/${i + 1}.jpg`,
//       thumbnailWidth: "33%",
//       thumbnailHeight: "auto",
//     });
//   }
//   console.log(imgArr);
//   return imgArr;
// }

const IMAGES = [
  {
    src: "https://maxverost.s3.amazonaws.com/headshots/andre.jpg",
    thumbnail: "https://maxverost.s3.amazonaws.com/headshots/andre.jpg",
    thumbnailWidth: "33%",
    thumbnailHeight: "auto",
  },
  {
    src: "https://maxverost.s3.amazonaws.com/headshots/Cityheadshots-19.jpg",
    thumbnail:
      "https://maxverost.s3.amazonaws.com/headshots/Cityheadshots-19.jpg",
    thumbnailWidth: "33%",
    thumbnailHeight: "auto",
  },
  {
    src: "https://maxverost.s3.amazonaws.com/headshots/Cityheadshots-3.jpg",
    thumbnail:
      "https://maxverost.s3.amazonaws.com/headshots/Cityheadshots-3.jpg",
    thumbnailWidth: "33%",
    thumbnailHeight: "auto",
  },
  {
    src: "https://maxverost.s3.amazonaws.com/headshots/Cityheadshots-9.jpg",
    thumbnail:
      "https://maxverost.s3.amazonaws.com/headshots/Cityheadshots-9.jpg",
    thumbnailWidth: "33%",
    thumbnailHeight: "auto",
  },
  {
    src: "https://maxverost.s3.amazonaws.com/headshots/IMG_7185_pp-2.jpg",
    thumbnail: "https://maxverost.s3.amazonaws.com/headshots/IMG_7185_pp-2.jpg",
    thumbnailWidth: "33%",
    thumbnailHeight: "auto",
  },
  {
    src: "https://maxverost.s3.amazonaws.com/headshots/Wennieswchin%40gmail.com01.jpg",
    thumbnail:
      "https://maxverost.s3.amazonaws.com/headshots/Wennieswchin%40gmail.com01.jpg",
    thumbnailWidth: "33%",
    thumbnailHeight: "auto",
  },
  {
    src: "https://maxverost.s3.amazonaws.com/headshots/Wennieswchin%40gmail.com07.jpg",
    thumbnail:
      "https://maxverost.s3.amazonaws.com/headshots/Wennieswchin%40gmail.com07.jpg",
    thumbnailWidth: "33%",
    thumbnailHeight: "auto",
  },
  {
    src: "https://maxverost.s3.amazonaws.com/headshots/Wennieswchin%40gmail.com03.jpg",
    thumbnail:
      "https://maxverost.s3.amazonaws.com/headshots/Wennieswchin%40gmail.com03.jpg",
    thumbnailWidth: "33%",
    thumbnailHeight: "auto",
  },
];
export function Photography() {
  return (
    <>
      <h6>Headshots</h6>
      <div className="gallery-container">
        <Gallery enableImageSelection={false} images={IMAGES} />
      </div>
    </>
  );
}
