import React from "react";

const Player = ({ videoLink, videoTitle }) => {
  // console.log(videoLink);
  return (
    <div className="">
      <iframe
        width="100%"
        className="aspect-video"
        src={videoLink}
        title={videoTitle}
        frameBorder=""
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Player;
