import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import path from "../untils/path";
import logo from "../assets/logo.svg";
import { sidebarMenu } from "../untils/menu";

const notActive =
  "flex items-center justify-start text-[#dadada] hover:text-white hover:bg-overplay-30 text-[13px] gap-2 py-2 px-[25px] opacity-90 font-medium ";
const active =
  "flex items-center border-[3px] border-t-transparent border-b-transparent border-r-transparent border-l-[#af0ce2] justify-start text-[#fafafa] bg-[#3c2f44] text-[13px] gap-2 py-2 px-[25px] opacity-100 font-bold";
const SidebarLeft = () => {
  const navigate = useNavigate();
  return (
    <div className="flex  flex-col bg-[#26172e] h-full">
      <div
        onClick={() => navigate(path.HOME)}
        className="w-full py-[15px] h-[70px] px-[25px] flex justify-start  items-center  "
      >
        <img src={logo} alt="logo" className="h-10 w-[120px] object-contain" />
      </div>
      {sidebarMenu.map((item, index) => (
        <NavLink
          to={item.path}
          key={item.path}
          className={({ isActive }) => (isActive ? active : notActive)}
        >
          {item.icons}
          <span>{item.text}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default SidebarLeft;
