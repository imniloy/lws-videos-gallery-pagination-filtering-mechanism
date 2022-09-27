import React from "react";
import VideoGrid from "../components/grid/VideoGrid";
import Pagination from "../components/ui/Pagination/Pagination";
import { clearAllFilter } from "../features/filter/filterSlice";
import Tags from "./../components/tags/Tags";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { author } = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const filterHandler = () => {
    dispatch(clearAllFilter());
  };

  return (
    <>
      <Tags />
      <div className="w-full h-5 max-w-7xl flex items-center mx-auto  mt-6">
        {author && (
          <div className="">
            <p>
              Filtering result for <span className="font-bold">{author}</span>
            </p>
          </div>
        )}
        <button
          className="ml-auto flex bg-blue-500 text-white space-x-1 px-4 py-2"
          onClick={filterHandler}
        >
          <span className="text-lg font-samibold leading-5">Clear Filters</span>
          <FunnelIcon className="h-5 w-5 font-samibold" />
        </button>
      </div>
      <VideoGrid />
      <Pagination />
    </>
  );
};

export default Home;
