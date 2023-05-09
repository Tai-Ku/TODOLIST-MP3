import { Outlet } from "react-router-dom";

import { SidebarLeft, SidebarRight, Player, Header } from "../../components";
import { useState } from "react";
function Public() {
  const [isShowSideBar, setIsShowSideBar] = useState(false);
  return (
    <div className="w-full relative h-screen flex flex-col bg-[#1a0b23] ">
      <div className="flex flex-auto">
        <div className="w-[240px] flex-none ">
          <SidebarLeft />
        </div>
        <div className="flex-auto ">
          <div className="h-[70px]  flex items-center px-[59px] mb-5">
            <Header />
          </div>
          <Outlet />
        </div>
        {isShowSideBar && (
          <div className="w-[329px] hidden 1280:flex flex-none animate-slide-left border">
            <SidebarRight />
          </div>
        )}
      </div>
      <div className="h-[90px] fixed bottom-0 left-0 right-0 flex-none w-full bg-[#15091c]">
        <Player setIsShowSideBar={setIsShowSideBar} />
      </div>
    </div>
  );
}

export default Public;
