import React from "react";
import { useSelector } from "react-redux";

const ArtistsBg = () => {
  const { artistData } = useSelector((state) => state.music);
  console.log(artistData);
  return (
    // <div className="w-full h-[410px] ">
    <img className="w-ful  h-full object-cover" src={artistData?.cover} />
    // </div>
  );
};

export default ArtistsBg;
