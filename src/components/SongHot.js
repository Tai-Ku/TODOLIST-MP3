import React from "react";
import moment from "moment";

function SongHot({ title, rank, thumbnailM, artistsNames, releaseDate }) {
  return (
    <div className=" p-[10px] bg-[#2f2739] cursor-pointer flex gap-3  rounded-md">
      <img src={thumbnailM} className="w-[120px] flex-1 h-[120px]" />
      <div className="flex flex-col flex-auto justify-between">
        <div className="flex flex-col w-full">
          <h3 className="text-sm text-[#ffff] font-medium">{title}</h3>
          <span className="text-[#ffffff80] text-xs font-normal">
            {artistsNames}
          </span>
        </div>
        <div className="flex justify-between items-end">
          <span className="text-4xl text-[#ffffff80] font-normal">{`#${rank}`}</span>
          <span className="text-[#ffffff80] text-xs ">
            {moment.unix(releaseDate).format("DD/MM/YYYY")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SongHot;
