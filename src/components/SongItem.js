import React from "react";
import moment from "moment";
import "moment/locale/vi";
import * as action from "../store/actions";
import * as api from "../api";
import { useDispatch, useSelector } from "react-redux";

const SongItem = ({ artistsNames, title, thumbnail, releaseDate, sid }) => {
  const dispatch = useDispatch();
  const { isPlaying } = useSelector((state) => state.music);
  return (
    <div
      onClick={() => {
        dispatch(action.setCurSongId(sid));
        dispatch(action.play(!isPlaying));
      }}
      className="w-[45%] min-[1024px]:w-[30%] flex gap-[10px] items-center flex-auto p-[10px] hover:bg-[#2e2639] cursor-pointer relative"
    >
      <img
        src={thumbnail}
        alt="thumbnail"
        className="w-[60px] h-[60px] object-cover rounded-md"
      />
      <div className="flex flex-col gap-1 ">
        <span className="text-sm font-semibold text-[#ffff]">{title}</span>
        <span className="text-xs font-thin text-[#ffffff80]">
          {artistsNames}
        </span>
        <span className="text-xs font-thin text-[#ffffff80]">
          {moment(releaseDate * 1000).fromNow()}
        </span>
      </div>
      <div className="hover:absolute bg-black top-0 bottom-0 left-0 right-0 flex "></div>
    </div>
  );
};

export default SongItem;
