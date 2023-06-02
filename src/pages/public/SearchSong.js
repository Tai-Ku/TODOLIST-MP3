import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../api";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import { Lists } from "../../components";
const SearchSong = () => {
  const dispatch = useDispatch();
  const { searchData } = useSelector((state) => state.music);
  const pid = searchData?.top?.playlistId;
  useEffect(() => {
    const fetchDetailPlaylist = async () => {
      const response = await api.apiGetDetailPlaylist(pid);
      if (response.data.err === 0) {
        dispatch(actions.setPlaylist(response?.data?.data?.song?.items));
      }
    };
    fetchDetailPlaylist();
  }, []);
  return (
    <div className="px-[59px] flex flex-col">
      <h3 className="text-xl text-white mb-5">Bài Hát</h3>
      <Lists />
    </div>
  );
};

export default SearchSong;
