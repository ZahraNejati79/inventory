import { useState } from "react";

const Search = ({ search, searchHandler }) => {
  return (
    <div className="flex justify-between items-center w-full mb-2 ">
      <input
        onChange={searchHandler}
        className=" text-right w-full rounded-lg placeholder:text-gray-300  border-2 border-gray-400 focus:border-gray-600 focus:border-transparent focus:ring-0 hover:border-2 hover:border-gray-400"
        type="text"
        placeholder=". . . . .جستوجو"
        value={search}
      />
    </div>
  );
};

export default Search;
