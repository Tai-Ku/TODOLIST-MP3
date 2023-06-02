import React from "react";
import { useSelector } from "react-redux";
import { Section } from "../../components";

const SearchPlaylist = () => {
  const { searchData } = useSelector((state) => state.music);
  const data = searchData?.playlists;
  console.log(data);
  return (
    <div className="px-[59px] flex flex-col">
      <h3 className="text-xl text-white mb-5">PlayList</h3>
      <Section data={data} />
    </div>
  );
};

export default SearchPlaylist;
