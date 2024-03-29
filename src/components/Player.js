import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSongs from "./LoadingSongs";
import * as api from "../api";
import * as action from "../store/actions";
import moment from "moment";
import { toast } from "react-toastify";
var intervalId;
const Player = ({ setIsShowSideBar }) => {
  const dispatch = useDispatch();
  const [second, setSecond] = useState(0);
  const { curSongId, isPlaying, playListWatched, songs } = useSelector(
    (state) => state.music
  );
  
  const [isLoaded, setIsLoaded] = useState(true);
  const [songInfo, setSongInfo] = useState(null);
  const [audio, setAudio] = useState(new Audio());
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [volume, setVolume] = useState(100);
  const thumbRef = useRef();
  const trackRef = useRef();
  useEffect(() => {
    const fetchDetailSong = async () => {
      setIsLoaded(false);
      const [res1, res2] = await Promise.all([
        api.getDetailSong(curSongId),
        api.apiGetSong(curSongId),
      ]);
      setIsLoaded(true);
      if (res1.data.err === 0) {
        setSongInfo(res1.data.data);
        dispatch(action.setCurSongData(res1.data.data));
      }
      if (res2.data.err === 0) {
        audio.pause();
        setAudio(new Audio(res2.data.data["128"]));
      } else {
        dispatch(action.play(false));
        audio.pause();
        setAudio(new Audio());
        toast.warn(res2.data.msg);
        setSecond(0);
        thumbRef.current.style.cssText = `right: ${100}%`;
      }
    };
    fetchDetailSong();
  }, [curSongId]);

  const play = async () => {
    await audio.play();
  };
  // bug code phan isPlaying
  useEffect(() => {
    audio.load();
    dispatch(action.play(!isPlaying));

    if (isPlaying) play();
  }, [audio]);
  useEffect(() => {
    const handleEnded = () => {
      if (isShuffle) {
        handleIsShuffle();
      } else if (isRepeat) {
        handleNext();
      } else {
        audio.pause();
        dispatch(action.play(false));
      }
    };
    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [audio]);
  useEffect(() => {
    if (isPlaying) {
      audio.play();
      intervalId = setInterval(() => {
        let percent =
          Math.round((audio.currentTime * 10000) / songInfo?.duration) / 100;

        if (thumbRef.current !== null) {
          // Thực hiện các thao tác trên thumbRef.current ở đây
          thumbRef.current.style.cssText = `right: ${100 - percent}%`;
        } else {
          // Xử lý trường hợp thumbRef.current là null ở đây
          console.log("thumbRef.current is null");
        }
        setSecond(Math.round(audio.currentTime));
      }, 300);
    } else {
      intervalId && clearInterval(intervalId);
    }
  }, [isPlaying]);

  const handleClick = async () => {
    if (isPlaying) {
      audio.pause();
      dispatch(action.play(false));
    } else {
      play();
      dispatch(action.play(true));
    }
  };
  const handleProgressbar = (e) => {
    const track = trackRef.current.getBoundingClientRect();
    const percent = ((e.clientX - track.left) / track.width) * 100;
    thumbRef.current.style.cssText = `right: ${100 - percent}%`;
    audio.currentTime = (percent * songInfo?.duration) / 100;
  };
  const handleNext = () => {
    if (songs) {
      let currentSongIndex;
      songs.map((item, index) => {
        if (item.encodeId === curSongId) {
          currentSongIndex = index;
        }
      });
      dispatch(action.setCurSongId(songs[currentSongIndex + 1]?.encodeId));
      dispatch(action.play(false));
    }
  };
  const handlePrev = () => {
    if (songs) {
      let currentSongIndex;
      songs.map((item, index) => {
        if (item.encodeId === curSongId) {
          currentSongIndex = index;
        }
      });
      dispatch(action.setCurSongId(songs[currentSongIndex - 1]?.encodeId));
      dispatch(action.play(false));
    }
  };
  const handleIsShuffle = () => {
    setIsShuffle((prev) => !prev);
    const randomIndex = Math.round(Math.random() * songs?.length) - 1;
    dispatch(action.setCurSongId(songs[randomIndex]?.encodeId));
    dispatch(action.play(isPlaying));
  };
  useEffect(() => {
    audio.volume = volume / 100;
  }, [volume]);
  return (
    <div className="flex w-full px-5 justify-center items-center h-full">
      <div className="w-[30%] flex-auto h-full  flex items-center gap-2">
        <img
          src={songInfo?.thumbnail}
          alt="thumbnail"
          className="w-16 h-16 object-cover rounded-md"
        />
        <div className="flex flex-col gap-[4px] ">
          <span className="font-semibold text-[#c5c2c7] text-[14px]">
            {songInfo?.title}
          </span>
          <span className="text-[#665e6b] text-[12px]">
            {songInfo?.artistsNames}
          </span>
        </div>
        <div className="flex gap-4 pl-2">
          <span>
            <i className="fa-regular fa-heart text-[16px]"></i>
          </span>
          {/* <span><i className="fa-solid fa-heart"></i></span> */}
          <span>
            <i className="fa-solid fa-ellipsis text-[16px]"></i>
          </span>
        </div>
      </div>
      <div className="w-[40%] flex flex-col  gap-1 items-center h-full  p-1">
        <div className="flex gap-5 justify-center items-center">
          <span
            title="Bật phát ngẫu nhiên"
            onClick={() => setIsShuffle((prev) => !prev)}
            className="cursor-pointer "
          >
            <i
              className={`fa-solid fa-shuffle text-[18px] ${
                isShuffle && "text-purple-600"
              }  text-[#fff]`}
            ></i>
          </span>
          <span onClick={handlePrev} className="cursor-pointer">
            <i className="fa-solid fa-backward-step text-[18px] text-[#fff]"></i>
          </span>
          <span
            onClick={handleClick}
            className="player border p-2 w-[51px] text-center border-[b3afb5] hover:border-[#883698] rounded-full cursor-pointer"
          >
            {!isLoaded ? (
              <div className="px-1 py-1 w-full h-full">
                <LoadingSongs />
              </div>
            ) : isPlaying ? (
              <i className="fa-solid fa-pause text-[30px]  hover:text-[#883698] text-[#b3afb5] px-1 "></i>
            ) : (
              <i className="fa-solid fa-play text-[30px]  hover:text-[#883698] text-[#b3afb5] px-1 "></i>
            )}
          </span>
          <span
            onClick={handleNext}
            className={`${
              !songs ? `text-gray-500` : ` text-[#ffff] cursor-pointer`
            }`}
          >
            <i className="fa-solid fa-forward-step text-[18px]"></i>
          </span>
          <span title="Bật phát tất cả" className=" cursor-pointer">
            <i
              className={`fa-solid fa-repeat text-[18px] ${
                isRepeat && "text-purple-600"
              }  text-[#fff]`}
              onClick={() => setIsRepeat((prev) => !prev)}
            ></i>
          </span>
        </div>
        <div className="w-full flex items-center">
          <span className="ml-[3%]">
            {moment.utc(second * 1000).format("mm:ss")}
          </span>
          <div
            ref={trackRef}
            onClick={handleProgressbar}
            className="w-3/4 m-auto relative rounded-l-full rounded-r-full bg-[#595360] cursor-pointer hover:h-[8px] h-[3px]"
          >
            <div
              ref={thumbRef}
              className="absolute top-0 left-0 bottom-0 rounded-l-full rounded-r-full   cursor-pointer  bg-[#ffff]"
            ></div>
          </div>
          <span className="mr-[3%]">
            {moment.utc(songInfo?.duration * 1000).format("mm:ss")}
          </span>
        </div>
      </div>
      <div className="w-[30%] flex-auto h-full  flex items-center justify-end gap-4">
        <span onClick={() => setVolume((prev) => (+prev === 0 ? 70 : 0))}>
          {volume > 0 ? (
            <i className="fa-solid fa-volume-high"></i>
          ) : (
            <i className="fa-solid fa-volume-xmark"></i>
          )}
        </span>
        <input
          type="range"
          step={1}
          min={0}
          max={100}
          onChange={(e) => setVolume(e.target.value)}
          value={volume}
        />
        <span
          onClick={() => setIsShowSideBar((prev) => !prev)}
          className="bg-[#9b4de0] rounded-sm opacity-90 cursor-pointer hover:opacity-100"
        >
          <i className="fa-solid fa-icons text-[20px] text-[#ffff] p-[5px] "></i>
        </span>
      </div>
    </div>
  );
};
export default Player;
