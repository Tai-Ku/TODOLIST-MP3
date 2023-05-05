import moment from "moment";
import { memo } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import * as action from "../store/actions";

const List = ({ songData, totalDuration }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="flex items-center justify-between p-[10px] border-t border-[#26172e] hover:bg-[#2e2639] cursor-pointer"
      onClick={() => {
        dispatch(action.setCurSongId(songData.encodeId));
        dispatch(action.play(true));
        dispatch(action.playAlbum(true));
      }}
    >
      <div className="flex items-center gap-2 flex-1">
        <span>
          <i className="fa-solid fa-music text-[#ffffff80]"></i>
        </span>
        <img
          src={songData.thumbnail}
          alt="thumbnail"
          className="object-cover h-[40px] rounded-md"
        />
        <span className="flex flex-col w-full">
          <span className="text-sm font-semibold text-[#fff] ">
            {songData?.title?.length > 30
              ? `${songData?.title?.slice(0, 25)}...`
              : songData?.title}
          </span>
          <span className="text-xs  text-[#ffffff80]">
            {songData?.artistsNames}
          </span>
        </span>
      </div>
      <div className="flex-1 flex ml-[22%] text-xs  text-[#ffffff80]">
        {songData?.album?.title.length > 25
          ? `${songData?.album?.title.slice(0, 25)}...`
          : songData?.album?.title}
      </div>
      <div className="flex-1 flex items-center justify-end  text-xs  text-[#ffffff80]">
        {moment.utc(songData?.duration * 1000).format("mm:ss")}
      </div>
    </div>
  );
};

export default memo(List);
