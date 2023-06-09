import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SongItem from "./SongItem";
import AudioLoading from "./AudioLoading";
import * as api from "../api";
import { Scrollbars } from "react-custom-scrollbars-2";
const SidebarRight = () => {
  const [isActive, setIsActive] = useState(0);
  const { curSongData } = useSelector((state) => state.music);
  const { pid, recentSongs, isPlaying, curSongId } = useSelector(
    (state) => state.music
  );
  const [playList, setPlayList] = useState(null);
  const [title, setTitle] = useState(null);
  useEffect(() => {
    isPlaying && setIsActive(0);
  }, [curSongId]);
  useEffect(() => {
    const fetchDetailPlaylist = async () => {
      const response = await api.apiGetDetailPlaylist(pid);
      if (response.data.err === 0) {
        setTitle(response?.data?.data.title);
        setPlayList(response?.data?.data.song.items);
      }
    };
    fetchDetailPlaylist();
  }, [pid]);
  return (
    <div className="flex flex-col h-full text-xs ">
      <div className="flex items-center h-[70px] py-[14px] px-2 flex-none ">
        <div className="flex cursor-pointer m-auto  p-1 rounded-r-full rounded-l-full bg-[#2d1e39]">
          <span
            onClick={() => setIsActive(0)}
            className={`${
              isActive === 0 ? "bg-[#696475] text-white" : "text-[#8f8c96]"
            } rounded-full font-light pr-2 pl-4 py-2 `}
          >
            Danh sách phát
          </span>

          <span
            onClick={() => setIsActive(1)}
            className={`${
              isActive === 1 ? "bg-[#696475] text-white" : "text-[#8f8c96]"
            } rounded-full font-light pl-3 pr-4 py-2 `}
          >
            Nghe gần đây
          </span>
        </div>
      </div>
      <div className="w-full h-full">
        <div
          key={curSongData?.encodeId}
          className="w-full py-[14px] h-full px-2 "
        >
          <Scrollbars
            autoHide
            style={{ width: "100%", height: "100%" }}
            renderView={({ style, ...props }) => (
              <div {...props} style={{ ...style, overflowX: "hidden" }} />
            )}
          >
            {isActive === 0 ? (
              <div className="w-full">
                <SongItem
                  style="bg-[#af0ce2] rounded-md"
                  audio={true}
                  key={curSongData?.encodeId}
                  sm={true}
                  artistsNames={curSongData?.artistsNames}
                  title={curSongData?.title}
                  thumbnail={curSongData?.thumbnail}
                  sid={curSongData?.encodeId}
                />
                <div className="flex flex-col pt-[15px] px-2 pb-[5px] text-sm">
                  <span className="text-white">Tiếp theo</span>
                  <span className="text-[#feffff99]">
                    Từ playlist:
                    <span className="text-[#c273ed]"> #{title}</span>
                  </span>
                  {playList?.map((item, i) => (
                    <SongItem
                      style="rounded-md"
                      key={item?.encodeId || i}
                      sm={true}
                      artistsNames={item?.artistsNames}
                      title={item?.title}
                      thumbnail={item?.thumbnail}
                      sid={item?.encodeId}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col pt-[15px] px-2 pb-[5px] text-sm">
                {recentSongs.map((item, i) => (
                  <SongItem
                    style="rounded-md"
                    key={item?.encodeId || i}
                    sm={true}
                    artistsNames={item?.artistsNames}
                    title={item?.title}
                    thumbnail={item?.thumbnail}
                    sid={item?.encodeId}
                  />
                ))}
              </div>
            )}
          </Scrollbars>
        </div>
      </div>
    </div>
  );
};

export default SidebarRight;
