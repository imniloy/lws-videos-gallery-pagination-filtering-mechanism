import React from "react";
import LikeDislike from "./LikeDislike";

const VideoDescription = ({ video }) => {
  // console.log(video);

  console.log(video);
  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight cursor-pointer text-slate-800">
        {video?.title}
      </h1>
      <div className="pb-4 flex items-center space-between border-b">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on {video?.date}
        </h2>

        <LikeDislike videoId={video?.id}/>
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        {video?.description}
      </div>
    </div>
  );
};

export default VideoDescription;
