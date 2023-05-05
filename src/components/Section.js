import React, { memo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Section = () => {
  const { friday } = useSelector((state) => state.app);
  const negative = useNavigate();
  const handleClick = (item) => {
    negative(item?.link?.split(".")[0]);
  };
  return (
    <div className="mt-12 px-[59px] flex flex-col gap-5 ">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium text-[#ffff]">{friday?.title}</h3>
        <h2 className="text-[12px] text-[#ffffff80]">TẤT CẢ</h2>
      </div>
      <div className="flex flex-row w-full gap-[28px] ">
        {friday?.items?.slice(0, 5).map((item) => (
          <div
            key={item.encodeId}
            onClick={() => handleClick(item)}
            className="w-1/5 flex flex-col gap-3 cursor-pointer"
          >
            <img
              src={item?.thumbnailM}
              className="rounded-lg h-auto object-cover w-full"
            />
            <span className="text-sm text-[#ffffff80]">
              {item?.sortDescription.length > 50
                ? `${item?.sortDescription.slice(0, 50)}...`
                : item?.sortDescription}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Section);
