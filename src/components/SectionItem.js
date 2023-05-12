import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SectionItem = ({
  link,
  thumbnailM,
  sortDescription,
  data,
  artistsNames,
  title,
}) => {
  const checkData = data?.sectionId === "h100" || data?.sectionId === "hAlbum";
  const negative = useNavigate();
  const { isplaying } = useSelector((state) => state.music);
  const [isHover, setIsHover] = useState(false);
  const [isHoverText, setIsHoverText] = useState(false);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.stopPropagation();
    negative(link?.split(".")[0], {
      state: {
        play: true,
      },
    });

    console.log(123);
  };

  return (
    <div
      onClick={() => negative(link?.split(".")[0])}
      className="w-1/5 flex flex-col gap-3 cursor-pointer "
    >
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="overflow-hidden w-full rounded-md relative"
      >
        <img
          src={thumbnailM}
          className={`${
            isHover ? "animate-scale-up-hover " : "animate-scale-out-hover"
          } rounded-lg h-auto object-cover w-full`}
        />
        {isHover ? (
          <div className="flex justify-around  items-center rounded-lg absolute top-0 bottom-0 left-0 right-0 bg-overplay-30 px-4">
            <span>
              <i className="fa-regular fa-heart text-[18px]  text-[#ffff]"></i>
            </span>
            <span
              onClick={handleClick}
              className=" w-[51px] text-center border  p-2 rounded-full border-[#ffff] cursor-pointer"
            >
              <i className="fa-solid fa-play text-[30px]  text-[#ffff] px-1 "></i>
            </span>
            <span>
              <i className="fa-solid  fa-ellipsis text-[18px]  text-[#ffff]"></i>
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
      <span className="flex flex-col text-sm text-[#ffffff80]">
        {checkData && <span className="text-[#ffffff]">{title}</span>}
        {checkData ? (
          <span
            onMouseEnter={() => setIsHoverText(true)}
            onMouseLeave={() => setIsHoverText(false)}
            className={`${isHoverText && "text-[#c273ed]"}`}
          >
            {artistsNames}
          </span>
        ) : sortDescription.length > 50 ? (
          `${sortDescription.slice(0, 50)}...`
        ) : (
          sortDescription
        )}
        {}
      </span>
    </div>
  );
};

export default memo(SectionItem);
