import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagSelected, tagRemoved } from "../../features/filter/filterSlice";

const Tag = ({ tagName }) => {
  const dispatch = useDispatch();
  const { tags: selectedTags } = useSelector((state) => state.filters);
  const isSelected = selectedTags.includes(tagName) ? true : false;

  const style = isSelected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";

  const handleSelect = () => {
    isSelected ? dispatch(tagRemoved(tagName)) : dispatch(tagSelected(tagName));
  };

  return (
    <div className={style} onClick={handleSelect}>
      {tagName}
    </div>
  );
};

export default Tag;
