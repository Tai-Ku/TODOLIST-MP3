import React from "react";
import { useSelector } from "react-redux";

const Singer = () => {
  const { artistData } = useSelector((state) => state.music);
  return <div className="w-full h-[410px] relative"></div>;
};

export default Singer;
