import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import * as api from "../api";

const Player = () => {
  const { curSongId } = useSelector((state) => state.music);
  const [songInfo, setSongInfo] = useState(null);
  useEffect(() => {
    const fetchDetailSong = async () => {
      const response = await api.getDetailSong("ZOACFBBU");
      if (response) {
        setSongInfo(response.data.data);
      }
    };
    fetchDetailSong();
  }, [curSongId]);
  return (
    <div className="flex w-full px-5 justify-center items-center h-full">
      <div className="w-[30%] flex-auto h-full border flex items-center gap-2">
        <img
          src={songInfo?.thumbnail}
          alt="thumbnail"
          className="w-16 h-16 object-cover rounded-md"
        />
        <div className="flex flex-col gap-[4px] ">
          <span className="font-semibold text-[#c5c2c7] text-[14px]">
            {songInfo?.title}
          </span>
          <span className="text-[#665e6b] text-[12px]">
            {songInfo?.artistsNames}
          </span>
        </div>
        <div className="flex gap-4 pl-2">
          <span>
            <i className="fa-regular fa-heart text-[16px]"></i>
          </span>
          {/* <span><i className="fa-solid fa-heart"></i></span> */}
          <span>
            <i className="fa-solid fa-ellipsis text-[16px]"></i>
          </span>
        </div>
      </div>
      <div className="w-[40%] flex-auto h-full border ">play</div>
      <div className="w-[30%] flex-auto h-full border ">mute</div>
    </div>
  );
};

export default Player;
