import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as api from "../../api";
const Singer = () => {
  const { name } = useParams();
  const [singerData, setSingerData] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      const res = await api.apiArtist(name);
      if (res.data.err === 0) {
        setSingerData(res.data.data);
      }
    };
    name && fetch();
  }, [name]);
  return (
    <div className="flex flex-col w-full ">
      <img src={singerData?.cover} className="mt-[-70px]" />
    </div>
  );
};

export default Singer;
