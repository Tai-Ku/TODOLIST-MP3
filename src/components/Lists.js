import React, { memo } from "react";
import List from "./List";
const Lists = ({ songs, totalDuration }) => {
  console.log(songs);
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
        {songs?.map((item) => (
          <List key={item.encodeID} songData={item} />
        ))}
      </div>
    </div>
  );
};

export default memo(Lists);
