import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as api from "../api";
import * as action from "../store/actions";
const Player = () => {
  const audioEl = useRef(new Audio());
  const dispatch = useDispatch();
  const { curSongId, isPlaying } = useSelector((state) => state.music);
  const [songInfo, setSongInfo] = useState(null);
  const [sources, setSources] = useState(null);
  // const [isPlaying, setIsPlaying] = useState(false);
  console.log(audioEl.current, isPlaying);

  useEffect(() => {
    const fetchDetailSong = async () => {
      const [res1, res2] = await Promise.all([
        api.getDetailSong(curSongId),
        api.apiGetSong(curSongId),
      ]);
      if (res1.data.err === 0) {
        setSongInfo(res1.data.data);
      }
      if (res2.data.err === 0) {
        setSources(res2.data.data["128"]);
      }
      console.log(res1, res2);
    };
    fetchDetailSong();
  }, [curSongId]);

  useEffect(() => {
    audioEl.current.pause();
    audioEl.current.src = sources;
    audioEl.current.load();
    if (isPlaying) audioEl.current.play();
  }, [curSongId, sources]);

  const handleClick = () => {
    if (isPlaying) {
      // console.log(audioEl)current.;
      audioEl.current.load();
      audioEl.current.pause();
      dispatch(action.play(false));
    } else {
      audioEl.current.load();
      audioEl.current.play();
      dispatch(action.play(true));
    }
  };
  console.log(audioEl);

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
            {isPlaying ? (
              <i className="fa-solid fa-pause text-[30px]  hover:text-[#883698] text-[#b3afb5] px-1 "></i>
            ) : (
              <i className="fa-solid fa-play text-[30px]  hover:text-[#883698] text-[#b3afb5] px-1 "></i>
            )}
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
