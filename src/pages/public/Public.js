import { Outlet } from "react-router-dom";

import { SidebarLeft, SidebarRight, Player } from "../../components";
function Public() {
  return (
    <div className="w-full h-screen flex flex-col bg-[#1a0b23] ">
      <div className="flex flex-auto">
        <div className="w-[240px] flex-none ">
          <SidebarLeft />
        </div>
        <div className="flex-auto">
          <Outlet />
        </div>
        <div className="w-[329px] flex-none">
          <SidebarRight />
        </div>
      </div>
      <div className="h-[90px] flex-none w-full bg-[#15091c]">
        <Player />
      </div>
    </div>
  );
}

export default Public;
