import React, { useEffect } from "react";
import VideoGridItem from "./VideoGridItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videosSlice";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
import { setTotalVideosLength } from "../../features/filter/filterSlice";

const VideoGrid = () => {
  const dispatch = useDispatch();
  const {
    tags,
    search,
    author,
    pagination: { limit, currentPage },
  } = useSelector((state) => state.filters);
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );
  console.log("curent Page " + currentPage);
  console.log("Author " + author);
  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <Error error={error} />;

  if (!isLoading && !isError && videos.length === 0)
    content = <div className="col-span-12">No Videos Found</div>;

  if (!isLoading && !isError && videos?.length > 0)
    content = videos.map((video) => (
      <VideoGridItem video={video} key={video.id} />
    ));

  useEffect(() => {
    dispatch(fetchVideos({ tags, search, author, limit, currentPage }))
      .unwrap()
      .then((originalPromiseResult) => {
        dispatch(setTotalVideosLength(originalPromiseResult?.totalvideos));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, tags, search, limit, author, currentPage]);

  return (
    <section className="pt-8">
      <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
        {content}
      </div>
    </section>
  );
};

export default VideoGrid;
