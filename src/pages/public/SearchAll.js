import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../store/actions";
import * as fn from "../../untils/fn";

const SearchAll = () => {
  const { searchData } = useSelector((state) => state.music);
  const searchDataTop = searchData?.top;
  return (
    <div className="w-full flex px-[59px] flex-col">
      <div className="flex flex-col">
        <h3 className="text-lg text-[#ffff] mb-5 font-bold">Nổi Bật</h3>
        <div className="flex gap-8 cursor-pointer">
          {searchDataTop && (
            <div className="flex flex-1 rounded-lg items-center gap-4 p-[10px] bg-[#231a2e]">
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
          <div className="flex-1">song1</div>
          <div className="flex-1">song1</div>
        </div>
      </div>
    </div>
  );
};

export default SearchAll;
