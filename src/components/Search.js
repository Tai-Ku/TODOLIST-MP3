import React from "react";

const Search = () => {
  return (
    <div className="w-full flex items-center ">
      <span className="bg-[#312439] h-10 flex items-center pl-4 rounded-l-[20px]">
        <i className="fa-solid fa-magnifying-glass text-[24px] text-[#eee]"></i>
      </span>
      <input
        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
        type="text"
        className="outline-none w-full bg-[#312439] text-[#eee] text-sm px-4 py-2 rounded-r-[20px] h-10"
      />
    </div>
  );
};

export default Search;
