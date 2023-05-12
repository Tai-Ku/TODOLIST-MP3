import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as apis from "../../api";
import moment, { months } from "moment";
import { Lists, AudioLoading, Loading } from "../../components";
import { Scrollbars } from "react-custom-scrollbars-2";

import * as action from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
const Album = () => {
  const dispatch = useDispatch();
  const { title, pid } = useParams();
  const [playList, setPlayList] = useState({});
  const [isLoaded, setIsLoaded] = useState(true);
  const location = useLocation();

  const { curSongId, isPlaying, atAlbum, songs } = useSelector(
    (state) => state.music
  );

  useEffect(() => {
    const fetchDetailPlaylist = async () => {
      const response = await apis.apiGetDetailPlaylist(pid);
      if (response.data.err === 0) {
        setPlayList(response.data?.data);
        dispatch(action.setPlaylist(response?.data?.data?.song?.items));
        setIsLoaded(false);
      }
    };
    fetchDetailPlaylist();
  }, [pid]);
  useEffect(() => {
    if (location?.state?.play) {
      const randomIndex =
        Math.round(Math.random() * playList?.song?.items?.length) - 1;
      console.log(playList?.song?.items[randomIndex]?.encodeId);
      dispatch(
        action.setCurSongId(playList?.song?.items[randomIndex]?.encodeId)
      );
      isPlaying
        ? dispatch(action.play(!isPlaying))
        : dispatch(action.play(!isPlaying));
    }
  }, [pid, playList]);
  return (
    <div className="flex gap-8 w-full h-full px-[59px] bg-[#1a0b23 ] ">
      {isLoaded ? (
        <Loading />
      ) : (
        <div className="w-1/4 flex-none  flex flex-col items-center gap-2 ">
          <div className="w-full relative overflow-hidden">
            <img
              src={playList?.thumbnailM}
              alt="thumbnail"
              className={`w-full object-contain ${
                isPlaying
                  ? "rounded-full animate-rotate-center"
                  : "rounded-md animate-rotate-center-pause"
              } shadow-md`}
            />
            <div
              className={`absolute hover:bg-overplay-30 cursor-pointer top-0 bottom-0 left-0 right-0  text-white flex items-center justify-center ${
                isPlaying && "rounded-full"
              }`}
            >
              {isPlaying ? (
                <AudioLoading />
              ) : (
                <i className="fa-solid fa-play text-center text-[30px] "></i>
              )}
            </div>
          </div>
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
      )}
      <Scrollbars style={{ width: "100%", height: "70%" }}>
        <div className="flex-auto  flex flex-col mb-[40px]">
          <span>
            <span className="text-[#ffffff80] text-[12px] ">Lời tựa </span>
            <span className="text-[#fff] text-[14px]">
              {playList?.sortDescription}
            </span>
          </span>
          <Lists
          // totalDuration={playList?.song.totalDuration}
          />
        </div>
      </Scrollbars>
    </div>
  );
};

export default Album;
