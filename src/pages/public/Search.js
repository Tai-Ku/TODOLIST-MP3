import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

import { Outlet } from "react-router-dom";

const Search = () => {
  return (
    <Scrollbars style={{ width: "100%", height: "100%" }}>
      <div className="mb-[100px]">
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
    </Scrollbars>
  );
};

export default Search;
