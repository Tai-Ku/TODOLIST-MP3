import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SectionItem } from "../../components";
import * as api from "../../api";
import { useParams } from "react-router-dom";
const SearchPlaylist = () => {
  const { searchData } = useSelector((state) => state.music);
  const [playlist, setPlaylist] = useState();
  useEffect(() => {
    const fetch = async () => {
      const res = await api.apiArtist(searchData?.top?.alias);
      console.log(res);
      if (res.data.err === 0) {
        setPlaylist(res.data.data.sections[0].items);
      }
    };
    fetch();
  }, []);
  return (
    <div className=" flex flex-col">
      <h3 className="text-xl text-white px-[59px] mb-5">PlayList</h3>
      <div className="flex flex-wrap px-[43px]  ">
        {playlist?.map((item) => (
          <SectionItem
            key={item.encodeId}
            link={item?.link}
            thumbnailM={item?.thumbnailM}
            sortDescription={item?.sortDescription}
            artistsNames={item?.artistsNames}
            title={item?.title}
            data={playlist}
            px="px-4 py-2"
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPlaylist;
