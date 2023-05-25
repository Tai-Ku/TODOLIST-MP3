import React, { useEffect, useState } from "react";
import * as api from "../api";
import * as action from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { createSearchParams, useNavigate } from "react-router-dom";
import path from "../untils/path";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleSearch = async (e) => {
    if (e.keyCode === 13) {
      dispatch(action.search(input));
      navigate({
        pathname: `${path.SEARCH}/${path.ALL}`,
        search: createSearchParams({
          q: input,
        }).toString(),
      });
    }
  };
  return (
    <div className="w-full flex items-center ">
      <span className="bg-[#312439] h-10 flex items-center pl-4 rounded-l-[20px]">
        <i className="fa-solid fa-magnifying-glass text-[24px] text-[#eee]"></i>
      </span>
      <input
        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
        type="text"
        className="outline-none w-full bg-[#312439] text-[#eee] text-sm px-4 py-2 rounded-r-[20px] h-10"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={handleSearch}
      />
    </div>
  );
};

export default Search;
