import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useMatch } from "react-router-dom";
import { searched } from "../../features/filter/filterSlice";
import SearchImage from "../../assets/search.svg";

const Search = () => {
  const { search } = useSelector((state) => state.filters);
  const [searchInput, setInputSearch] = useState(search);
  const match = useMatch("/");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInputSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(searchInput));
    !match && navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={searchInput}
          onChange={inputHandler}
          className="outline-none border-none mr-2"
          type="search"
          name="search"
          placeholder="Search"
        />
        <img
          onClick={handleSubmit}
          className="inline h-4 cursor-pointer"
          src={SearchImage}
          alt="Search"
        />
      </form>
    </div>
  );
};

export default Search;
