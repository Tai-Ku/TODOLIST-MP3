import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import SectionItem from "./SectionItem";
const Section = ({ data }) => {
  return (
    <div className="mt-12 px-[59px] flex flex-col gap-5 ">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium text-[#ffff]">{data?.title}</h3>
        <h2 className="text-[12px] text-[#ffffff80]">TẤT CẢ</h2>
      </div>
      <div className="flex flex-row w-full gap-[28px] ">
        {data?.items?.slice(0, 5).map((item) => (
          <SectionItem
            key={item.encodeId}
            link={item?.link}
            thumbnailM={item?.thumbnailM}
            sortDescription={item?.sortDescription}
            artistsNames={item?.artistsNames}
            title={item?.title}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(Section);
