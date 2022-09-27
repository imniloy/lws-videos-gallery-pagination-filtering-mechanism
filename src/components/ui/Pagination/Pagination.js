import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLimit, setCurrentPage } from "../../../features/filter/filterSlice";
import {
  ArrowSmallRightIcon,
  ArrowSmallLeftIcon,
} from "@heroicons/react/24/outline";

const Pagination = () => {
  const {
    pagination: { limit, totalvideos, currentPage },
  } = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const [itemsPerPage, setItemsPerPage] = useState(limit);
  const videosLimitOptions = [2, 4, 8];
  const totalPages = Math.ceil(totalvideos / itemsPerPage);
  // console.log(pagination);
  const itemsPerPageHandler = (e) => {
    setItemsPerPage(e.target.value);
  };

  const handlePagination = (e) => {
    console.log(e.target.value);
    dispatch(setCurrentPage(e.target.value));
  };

  const goPreviousPage = () => {
    let prevPage = currentPage - 1;
    dispatch(setCurrentPage(prevPage));
  };

  const goNextPage = () => {
    let nextPage = currentPage + 1;
    dispatch(setCurrentPage(nextPage));
  };

  const pages = [...Array(totalPages)].map((_, index) => (
    <li
      key={index + 1}
      value={index + 1}
      onClick={handlePagination}
      className={
        currentPage === index + 1
          ? "text-blue-100 bg-blue-600 px-4 py-1 rounded-sm cursor-pointer"
          : "bg-blue-100 text-blue-600 px-4 py-1 rounded-sm cursor-pointer"
      }
    >
      {index + 1}
    </li>
  ));

  useEffect(() => {
    dispatch(setLimit(itemsPerPage));
  }, [dispatch, itemsPerPage, currentPage]);

  return (
    <section className="pt-12 flex justify-center">
      <div className="flex items-center space-x-5">
        <select
          className="outline-none border-2 px-2 py-1"
          value={itemsPerPage}
          onChange={itemsPerPageHandler}
        >
          {videosLimitOptions.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>

        <ul className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
          <li>
            <button
              className={`bg-blue-600 text-white px-4 py-1 rounded-sm disabled:opacity-50`}
              disabled={currentPage === 1}
              onClick={goPreviousPage}
            >
              <ArrowSmallLeftIcon className="h-6 w-6" />
            </button>
          </li>

          {pages}

          <li>
            <button
              className={`bg-blue-600 text-white px-4 py-1 rounded-sm disabled:opacity-50`}
              disabled={currentPage === totalPages}
              onClick={goNextPage}
            >
              <ArrowSmallRightIcon className="h-6 w-6" />
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Pagination;
