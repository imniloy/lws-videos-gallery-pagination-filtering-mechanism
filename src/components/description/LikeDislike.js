import React from "react";
import Like from "../../assets/like.svg";
import UnLike from "../../assets/unlike.svg";
import { useDispatch, useSelector } from "react-redux";
// import { disLiked, liked } from "../../features/video/videoSlice";
import { updateDisLikes, updateLikes } from './../../features/video/videoSlice';

const LikeDislike = ({ videoId }) => {
  let { video: { likes, unlikes } } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  const handleLikes = () => {
    dispatch(updateLikes({
      videoId,
      data: {
        likes: likes++,
      }
    }));
  };
  const handleDisLikes = () => {
    dispatch(updateDisLikes({
      videoId,
      data: {
        unlikes: unlikes++,
      }
    }));
  };

  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1 cursor-pointer" onClick={handleLikes}>
        <div className="shrink-0">
          <img className="w-5 block" src={Like} alt="Like" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {likes}
        </div>
      </div>
      <div className="flex gap-1 cursor-pointer" onClick={handleDisLikes}>
        <div className="shrink-0">
          <img className="w-5 block" src={UnLike} alt="Unlike" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {unlikes}
        </div>
      </div>
    </div>
  );
};

export default LikeDislike;
