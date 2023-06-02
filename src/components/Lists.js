import React, { memo } from "react";
import List from "./List";
import moment from "moment";
import { useSelector } from "react-redux";

const Lists = ({ totalDuration }) => {
  const { songs } = useSelector((state) => state.music);
  return (
    <div className="flex flex-col w-full text-xs ">
      <div className="flex justify-between p-[10px] text-[#ffffff80]">
        <span className="flex gap-3">
          <i className="fa-solid fa-arrow-up-wide-short text-[16px]"></i>
          BÀI HÁT
        </span>
        <span>ALBUM</span>
        <span>THỜI GIAN</span>
      </div>
      <div className="flex flex-col">
        {songs?.map((item, index) => (
          <List
            index={index.encodeId}
            key={item.encodeId}
            totalDuration={totalDuration}
            songData={item}
          />
        ))}
      </div>
      {totalDuration && (
        <span className="flex text-xs text-[#ffffff80] gap-3">
          <span>{`${songs?.length} bài hát`}</span>
          <span>{moment.utc(totalDuration * 100).format("HH:mm:ss")}</span>
        </span>
      )}
    </div>
  );
};

export default memo(Lists);
