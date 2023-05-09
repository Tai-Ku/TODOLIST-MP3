import { Outlet } from "react-router-dom";

import { SidebarLeft, SidebarRight, Player, Header } from "../../components";
import { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
function Public() {
  const [isShowSideBar, setIsShowSideBar] = useState(false);
  return (
    <div className="w-full relative h-screen flex flex-col bg-[#1a0b23] ">
      <div className="w-full h-full flex flex-auto">
        <div className="w-[240px] h-full flex-none ">
          <SidebarLeft />
        </div>
        <div className="flex-auto flex flex-col ">
          <div className="h-[70px] flex flex-none items-center px-[59px]">
            <Header />
          </div>
          <div className="flex-auto w-full ">
            <Scrollbars style={{ width: "100%", height: "100%" }}>
              <Outlet />
            </Scrollbars>
          </div>
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
