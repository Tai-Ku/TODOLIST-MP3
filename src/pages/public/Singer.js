import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { List, Section, Artists } from "../../components";
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

  const Text = ({ text, maxLength }) => {
    const [showFullText, setShowFullText] = useState(false);
    if (text?.length <= maxLength) {
      return <p>{text}</p>;
    }
    return (
      <div className="text-sm text-[#ffffff80] font-mediun ">
        <span
          dangerouslySetInnerHTML={{
            __html: showFullText ? text : `${text?.substring(0, maxLength)}...`,
          }}
        />
        <button
          onClick={() => setShowFullText(!showFullText)}
          className="text-xs text-white font-bold"
        >
          {showFullText ? "Ẩn Bớt" : "XEM THÊM"}
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full ">
      <div>
        <img src={singerData?.cover} className="h-[410px] bg-search relative" />
        <div className="flex px-[59px] gap-8  flex-col absolute bottom-[50%]   right-0 left-0">
          <div className="flex gap-6">
            <h1 className="text-white text-6xl">{singerData?.name}</h1>
            <span className=" w-[51px] flex items-center border  p-2 rounded-full hover:bg-[#9b4de0] border-[#ffff] cursor-pointer">
              <i className="fa-solid fa-play text-[30px]  text-[#ffff] px-1 "></i>
            </span>
          </div>
          <div className="flex items-center gap-4 ">
            <span className="text-white  font-medium text-sm">{`${singerData?.totalFollow.toLocaleString(
              "en-US"
            )}  người quân tâm`}</span>
            <span className="flex gap-1 items-center cursor-pointer hover:bg-[#acadae] hover:text-[#acadae] rounded-[18px] border-[#d9dada] border-[1px]">
              <i className="fa-solid fa-user-plus p-1 text-white text-[14px]"></i>
              <span className="text-white p-1 font-medium text-sm">
                QUAN TÂM
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-6 px-[59px] flex flex-col w-full">
        <h3 className="text-lg text-white mb-5 font-bold">Bài Hát Nổi Bật</h3>
        <div className="flex flex-wrap items-center w-full">
          {singerData?.sections[0]?.items?.slice(0, 6)?.map((item, index) => (
            <div
              key={item.encodeId}
              className={`w-[45%] flex-auto ${
                index % 2 === 0 ? "pr-4" : "pl-4"
              }`}
            >
              <List
                songData={item}
                index={index.encodeId}
                key={item.encodeId}
                none={false}
              />
            </div>
          ))}
        </div>
      </div>
      <Section data={singerData?.sections[1]} />
      <Section data={singerData?.sections[0]} />
      <Section data={singerData?.sections[4]} />
      <Section data={singerData?.sections[5]} />
      <div className="flex mt-6 px-[59px] flex-col w-full">
        <h3 className="text-lg  text-[#ffff] mb-5 font-bold">
          {singerData?.sections[6]?.title}
        </h3>
        <div className="flex items-center gap-2 flex-wrap w-full">
          {singerData?.sections[6]?.items?.slice(0, 5).map((item, index) => (
            <Artists
              key={item?.encodeId || index}
              item={item}
              thumbnail={item?.thumbnail}
              name={item?.name}
              totalFollow={item?.totalFollow}
              link={item?.link}
            />
          ))}
        </div>
      </div>
      <div className="mt-6 px-[59px] flex flex-col w-full">
        <h3 className="text-lg text-white mb-5 font-bold">{`Về ${singerData?.name}`}</h3>
        <div className="flex gap-6 items-center w-full">
          <img
            src={singerData?.thumbnail}
            className="w-[417.797px] h-[278.531px] rounded-lg object-cover "
          />
          <div className=" w-[419px] h-[278.531px]">
            <Text text={singerData?.biography} maxLength={350} />
          </div>
        </div>
      </div>
      <div className="mb-[150px]"></div>
    </div>
  );
};

export default Singer;
