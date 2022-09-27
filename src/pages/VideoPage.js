import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VideoDescription from "../components/description/VideoDescription";
import RelatedVideoList from "../components/list/RelatedVideoList";
import Player from "./../components/description/Player";
import { fetchVideo } from "../features/video/videoSlice";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";

const VideoPage = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );
  const { id, link, title, tags } = video || {};

  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <Error error={error} />;
  if (!isLoading && !isError && !video?.id)
    content = <div className="col-span-12">No related videos found!</div>;
  if (!isLoading && !isError && video?.id) {
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          <Player videoLink={link} videoTitle={title} />
          <VideoDescription video={video} />
        </div>
        <RelatedVideoList currentVideoId={id} tags={tags} />
      </div>
    );
  }

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        {content}
      </div>
    </section>
  );
};

export default VideoPage;
