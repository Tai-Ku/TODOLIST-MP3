import React from "react";
import { useSelector } from "react-redux";

const Player = () => {
  const { curSongId } = useSelector((state) => state.music);
  return (
    <div className="flex w-full px-5 justify-center items-center h-full">
      <div className="w-[30%] flex-auto h-full border ">span</div>
      <div className="w-[40%] flex-auto h-full border ">play</div>
      <div className="w-[30%] flex-auto h-full border ">mute</div>
    </div>
  );
};

export default Player;
