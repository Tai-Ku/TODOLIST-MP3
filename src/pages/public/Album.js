import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as apis from "../../api";
import moment, { months } from "moment";
import { Lists } from "../../components";
import { Scrollbars } from "react-custom-scrollbars-2";
import { counter } from "@fortawesome/fontawesome-svg-core";
const Album = () => {
  const { title, pid } = useParams();
  const [playList, setPlayList] = useState({});
  useEffect(() => {
    const fetchDetailPlaylist = async () => {
      const response = await apis.apiGetDetailPlaylist(pid);
      if (response.data.err === 0) {
        setPlayList(response.data?.data);
      }
    };
    fetchDetailPlaylist();
  }, [pid]);

  return (
    <div className="flex gap-8 w-full h-full px-[59px] bg-[#1a0b23 ] ">
      <div className="w-1/4 flex-none  flex flex-col items-center gap-2 ">
        <img
          src={playList?.thumbnailM}
          alt="thumbnail"
          className="w-full object-contain rounded-md shadow-md"
        />
        <div className="flex-col flex items-center gap-1">
          <h3 className="text-[20px] font-bold text-[#fff]">
            {playList.title}
          </h3>
          <span className="text-[#ffffff80] text-[12px] ">
            <span className="">Cập nhật:</span>
            <span>
              {moment.unix(playList?.contentLastUpdate).format("DD/MM/YYYY")}
            </span>
          </span>
          <span className="text-[#ffffff80] text-[12px] text-center">
            {playList?.artistsNames}
          </span>
          <span className="text-[#ffffff80] text-[12px] ">
            {Math.floor(playList?.like / 1000)}K người yêu thích
          </span>
        </div>
      </div>
      <Scrollbars style={{ width: "100%", height: "70%" }}>
        <div className="flex-auto border flex flex-col mb-[40px]">
          <span>
            <span className="text-[#ffffff80] text-[12px] ">Lời tựa </span>
            <span className="text-[#fff] text-[14px]">
              {playList?.sortDescription}
            </span>
          </span>
          <Lists
            songs={playList?.song?.items}
            // totalDuration={playList?.song.totalDuration}
          />
        </div>
      </Scrollbars>
    </div>
  );
};

export default Album;
