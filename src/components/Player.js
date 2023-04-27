import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import * as api from "../api";

const Player = () => {
  const audioEl = new Audio(
  );
  const { curSongId, isPlaying } = useSelector((state) => state.music);
  const [songInfo, setSongInfo] = useState(null);
  // const [isPlaying, setIsPlaying] = useState(false);
  console.log(isPlaying);
  console.log(audioEl);
  audioEl.play();

  const handleClick = () => {
    // setIsPlaying(!isPlaying);
    // const player = document.querySelector(".player>i");
    // if (!isPlaying) {
    //   player.classList.remove("fa-play");
    //   player.classList.add("fa-pause");
    // } else {
    //   player.classList.add("fa-play");
    //   player.classList.remove("fa-pause");
    // }
  };
  useEffect(() => {
    const fetchDetailSong = async () => {
      const response = await api.apiGetSong("ZOACFBBU");
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
      <div className="w-[40%] flex flex-col  items-center h-full border p-2">
        <div className="flex gap-5 justify-center items-center">
          <span title="Bật phát ngẫu nhiên" className=" cursor-pointer">
            <i className="fa-solid fa-shuffle text-[18px] text-[#b3afb5]"></i>
          </span>
          <span className=" cursor-pointer">
            <i className="fa-solid fa-backward-step text-[18px] text-[#b3afb5]"></i>
          </span>
          <span
            onClick={handleClick}
            className="player border p-2 w-[51px] text-center border-[b3afb5] hover:border-[#883698] rounded-full cursor-pointer"
          >
            <i className="fa-solid fa-play text-[30px]  hover:text-[#883698] text-[#b3afb5] px-1 "></i>
          </span>
          <span className=" cursor-pointer">
            <i className="fa-solid fa-forward-step text-[18px] text-[#b3afb5]"></i>
          </span>
          <span title="Bật phát tất cả" className=" cursor-pointer">
            <i className="fa-solid fa-repeat text-[18px] text-[#b3afb5]"></i>
          </span>
        </div>
        <div>audio</div>
      </div>
      <div className="w-[30%] flex-auto h-full border ">mute</div>
    </div>
  );
};

export default Player;
