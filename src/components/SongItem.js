import React, { useState } from "react";
import moment from "moment";
import "moment/locale/vi";
import * as action from "../store/actions";
import * as api from "../api";
import { useDispatch, useSelector } from "react-redux";
import AudioLoading from "./AudioLoading";

const SongItem = ({
  artistsNames,
  title,
  thumbnail,
  releaseDate,
  sid,
  audio,

  sm,
  rank,
  style,
  score,
}) => {
  const dispatch = useDispatch();
  const { isPlaying } = useSelector((state) => state.music);
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onClick={() => {
        dispatch(action.setCurSongId(sid));
        dispatch(action.play(!isPlaying));
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`${
        style || ""
      } w-full flex gap-[10px] justify-between items-center  p-[10px]  cursor-pointer relative`}
    >
      {isHover && (
        <div
          className={`absolute top-0 bottom-0 left-0 right-0 w-full flex justify-between ${
            sm ? "px-[6px]" : "px-4"
          } items-center ${rank ? "bg-[#ffffff33] px-7" : " bg-overplay-30"} `}
        >
          <span className=" w-[51px] text-center cursor-pointer">
            <i className="fa-solid fa-play text-[18px]  text-[#ffff] px-1 "></i>
          </span>
          {!rank && (
            <span>
              <i className="fa-solid  fa-ellipsis text-[18px]  text-[#ffff]"></i>
            </span>
          )}
        </div>
      )}
      <div className="flex items-center gap-4 ">
        {rank && (
          <span
            className={`${
              rank === 1
                ? "text-shadow-1"
                : rank === 2
                ? "text-shadow-2"
                : "text-shadow-3"
            } text-[30px] text-[rgba(0,0,0,0.3)]`}
          >
            {rank}
          </span>
        )}
        <img
          src={thumbnail}
          alt="thumbnail"
          className={`${
            sm ? "w-[40px] h-[40px]" : "w-[60px] h-[60px]"
          } object-cover rounded-md`}
        />
        <div className="flex flex-col gap-1 ">
          <span className="text-sm font-semibold text-[#ffff]">{title}</span>
          {sm && (
            <div
              className={`absolute top-0 bottom-0 left-[7%] right-0 w-full `}
            >
              <span className=" w-[14px] text-center cursor-pointer absolute">
                {isPlaying && audio && <AudioLoading />}
              </span>
            </div>
          )}
          <span className="text-xs font-thin text-[#ffffff80]">
            {artistsNames}
          </span>
          {releaseDate && (
            <span className="text-xs font-thin text-[#ffffff80]">
              {moment(releaseDate * 1000).fromNow()}
            </span>
          )}
        </div>
      </div>
      <div className="flex-auto">
        {score && <span className="float-left font-bold flex ">{score}%</span>}
      </div>
      <div className="hover:absolute bg-black top-0 bottom-0 left-0 right-0 flex "></div>
    </div>
  );
};

export default SongItem;
