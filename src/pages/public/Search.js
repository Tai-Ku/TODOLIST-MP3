import React, { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import * as menu from "../../untils/menu";
import { useSelector } from "react-redux";

const active = "border-b px-4 h-[54px] border-[#9b4de0] flex items-center ";
const notActive =
  "text-[#c2c1c4] px-4 h-[54px] flex items-center opacity-[0.9] border-gray-400 cursor-pointer hover:text-white hover:opacity-[1]";
const Search = () => {
  const [searchParams] = useSearchParams();
  const { keyword } = useSelector((state) => state.music);
  console.log(keyword);
  useEffect(() => {
    const params = [];
    for (const entry of searchParams.entries()) {
      params.push(entry);
    }
  }, [searchParams]);
  console.log(searchParams);

  return (
    <Scrollbars style={{ width: "100%", height: "100%" }}>
      <div className="mb-[100px]">
        <div className="flex items-center mb-7  text-sm h-[50px]  pb-1  border-b border-gray-400">
          <span className="text-[24px] border-r flex items-center h-[50px] pl-[59px] pr-[20px] font-bold text-[#ffff]">
            Kết Quả Tìm Kiếm
          </span>
          <div className="flex items-center  text-[#ffff]">
            {menu.searchMenu.map((item, index) => (
              <NavLink
                key={item.path}
                to={`${item.path}?q=${keyword.replace(" ", "+")}`}
                className={({ isActive }) => (isActive ? active : notActive)}
              >
                <span className="">{item.text}</span>
              </NavLink>
            ))}
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
