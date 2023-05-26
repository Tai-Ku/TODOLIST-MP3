import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../store/actions";
import * as fn from "../../untils/fn";
import { SongItem, List, Section } from "../../components/index";
import { useNavigate } from "react-router-dom";

const SearchAll = () => {
  const { searchData } = useSelector((state) => state.music);
  const navigate = useNavigate();
  const searchDataTop = searchData?.top;
  const handleClick = (item) => {
    if (item.isOA === true) {
      navigate(item?.link);
    } else {
      navigate(item?.link);
    }
  };
  return (
    <div className="w-full flex px-[59px] flex-col gap-[60px]">
      {/* Nổi Bật */}
      <div className="flex flex-col">
        <h3 className="text-lg text-[#ffff] mb-5 font-bold">Nổi Bật</h3>
        <div className="flex gap-8 ">
          {searchDataTop && (
            <div className="flex flex-1 cursor-pointer rounded-lg items-center gap-4 p-[10px] bg-[#231a2e]">
              <img
                className={`w-[84px] h-[84px] object-cover ${
                  searchDataTop?.objectType === "artist" ? "rounded-full" : ""
                }`}
                src={searchDataTop?.thumbnail}
              />
              <div className="flex flex-col gap-2 text-xs text-[#ffffff80]">
                <span>{`${
                  searchDataTop?.objectType === "artist" ? "Nghệ sĩ" : "Bài hát"
                }`}</span>
                <span className="text-sm text-[#ffff]">
                  {searchDataTop?.title || searchDataTop?.name}
                </span>
                {searchDataTop?.objectType === "artist" && (
                  <span>
                    {`${fn.handleNumbers(
                      searchData?.artists[0]?.totalFollow
                    )} quan tâm`}
                  </span>
                )}
              </div>
            </div>
          )}

          {searchData?.songs?.slice(0, 2).map((item, i) => (
            <div key={item?.encodeId || i} className="flex-1">
              <SongItem
                style="rounded-md"
                key={item?.encodeId || i}
                lg="w-[80px] h-[80px]"
                bg="bg-[#231a2e]"
                artistsNames={item?.artistsNames}
                title={item?.title}
                thumbnail={item?.thumbnail}
                sid={item?.encodeId}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Bài Hát*/}
      <div className="flex flex-col w-full">
        <h3 className="text-lg text-[#ffff] mb-5 font-bold">Bài Hát</h3>
        <div className="flex items-center justify-between flex-wrap w-full ">
          {searchData?.songs?.slice(0, 6).map((item, index) => (
            <div
              key={item.encodeId}
              className={`w-[45%]  flex-auto ${
                index % 2 !== 0 ? "pl-4" : "pr-4"
              }`}
            >
              <List
                index={index.encodeId}
                key={item.encodeId}
                songData={item}
                none={false}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Playlist/Album
       */}
      <div className="flex flex-col w-full">
        <h3 className="text-lg text-[#ffff] mb-5 font-bold">Playlist/Album</h3>
        <div className="flex items-center justify-between flex-wrap w-full ">
          <Section searchTop={searchData?.playlists} />
        </div>
      </div>

      {/* Nghệ Sĩ/OA
       */}
      <div className="flex flex-col w-full">
        <h3 className="text-lg text-[#ffff] mb-5 font-bold">Nghệ Sĩ/OA</h3>
        <div className="flex items-center gap-6 flex-wrap w-full ">
          {searchData?.artists?.map((item, index) => (
            <div
              onClick={() => handleClick(item)}
              className="flex items-center flex-col gap-3"
            >
              <img
                className="w-[210px] h-[210px] object-cover rounded-full"
                src={item?.thumbnail}
              />
              <div className="flex gap-1 items-center flex-col">
                <span className="text-sm text-[#ffff]">{item?.name}</span>
                <span className="text-xs text-[#ffffff80]">
                  {}
                  {`${fn.handleNumbers(item?.totalFollow)} quan tâm`}
                </span>
              </div>
              <span className="px-[19px] hover:bg-[#3c2461] cursor-pointer text-white text-sm font-semibold rounded-r-full rounded-l-full border-r-full py-[6px] bg-[#9b4de0]">
                + Quan tâm
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchAll;
