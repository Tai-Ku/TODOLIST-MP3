import React from "react";
import { Outlet } from "react-router-dom";

const Search = () => {
  return (
    <div>
      <div className="flex items-center mb-7 h-[50px] text-sm  pb-1  border-b border-gray-400">
        <span className="text-[24px] pl-[59px] pr-[20px] font-bold text-[#ffff]">
          Kết Quả Tìm Kiếm
        </span>
        <div className="flex items-center border-x text-[#ffff]">
          <span className="border-x text-[#c2c1c4] px-4  border-gray-400 cursor-pointer">
            Tất cả
          </span>
          <span className="border-x text-[#c2c1c4] px-4 hover:text-[#ffff]  cursor-pointer">
            Tất cả
          </span>
          <span className="border-x text-[#c2c1c4] px-4 hover:text-[#ffff]  cursor-pointer">
            Tất cả
          </span>
          <span className="border-x text-[#c2c1c4] px-4 hover:text-[#ffff]  cursor-pointer">
            Tất cả
          </span>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Search;
