import { Outlet, useParams } from "react-router-dom";

import {
  SidebarLeft,
  SidebarRight,
  Player,
  Header,
  ArtistsBg,
} from "../../components";
import { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";
function Public() {
  const [isShowSideBar, setIsShowSideBar] = useState(false);
  const { curSongId } = useSelector((state) => state.music);
  const { name } = useParams();

  return (
    <div className="w-full relative h-screen flex flex-col bg-[#1a0b23] ">
      <div className="w-full h-full flex flex-auto">
        <div className="w-[240px] h-full flex-none ">
          <SidebarLeft />
        </div>
        <div className="flex-auto flex flex-col ">
          <div
            className={`h-[70px]  px-[59px] flex flex-none items-center ${
              name && "fixed  top-0 right-[329px] left-[240px] z-50"
            }`}
          >
            <Header />
          </div>
          <div className="flex-auto w-full ">
            <Scrollbars autoHide style={{ width: "100%", height: "100%" }}>
              <Outlet />
            </Scrollbars>
          </div>
        </div>
        {isShowSideBar && (
          <div className="w-[329px] hidden fixed top-0  right-0 bottom-0 bg-[#120822] 1280:block z-40 animate-slide-left mb-[70px]">
            <SidebarRight />
          </div>
        )}
      </div>
      {curSongId && (
        <div className="h-[90px] z-50 fixed bottom-0 left-0 right-0 flex-none w-full bg-[#15091c]">
          <Player setIsShowSideBar={setIsShowSideBar} />
        </div>
      )}
    </div>
  );
}

export default Public;
