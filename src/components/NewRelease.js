import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SongItem from "./SongItem";

const NewRelease = () => {
  const { newRelease } = useSelector((state) => state.app);
  const [isActive, setIsActive] = useState(0);
  const [newSong, setNewSong] = useState(newRelease?.items?.all);
  useEffect(() => {
    if (isActive === 0) {
      setNewSong(newRelease?.items?.all);
    } else if (isActive === 1) {
      setNewSong(newRelease?.items?.vPop);
    } else {
      setNewSong(newRelease?.items?.others);
    }
  }, [isActive, newRelease]);
  return (
    <div className="mt-12 px-[59px] flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium text-[#ffff]">
          {newRelease?.title}
        </h3>
        <h2 className="text-[12px] text-[#ffffff80]">TẤT CẢ</h2>
      </div>
      <div className="flex items-center gap-5 text-xs text-[#ffff]">
        <button
          onClick={() => setIsActive(0)}
          type="button"
          className={`py-1 px-4  rounded-l-full rounded-r-full  border ${
            isActive === 0
              ? "bg-[#9b4de0] border-[#9b4de0]"
              : "bg-transparent border-[#ffffff70]"
          }`}
        >
          TẤT CẢ
        </button>
        <button
          onClick={() => setIsActive(1)}
          type="button"
          className={`py-1 px-4  rounded-l-full rounded-r-full  border ${
            isActive === 1
              ? "bg-[#9b4de0] border-[#9b4de0]"
              : "bg-transparent border-[#ffffff70]"
          }`}
        >
          VIỆT NAM
        </button>
        <button
          onClick={() => setIsActive(2)}
          type="button"
          className={`py-1 px-4  rounded-l-full rounded-r-full  border ${
            isActive === 2
              ? "bg-[#9b4de0] border-[#9b4de0]"
              : "bg-transparent border-[#ffffff70]"
          }`}
        >
          QUỐC TẾ
        </button>
      </div>
      <div className="flex flex-wrap w-full gap-4">
        {newSong?.slice(0, 12).map((item) => (
          <SongItem
            key={item.encodeId}
            artistsNames={item?.artistsNames}
            title={item?.title}
            thumbnail={item?.thumbnail}
            releaseDate={item?.releaseDate}
          />
        ))}
      </div>
    </div>
  );
};

export default NewRelease;
