import React, { memo, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as fn from "../untils/fn";
import * as api from "../api";
import * as actions from "../store/actions";

const Artists = ({ item, link, thumbnail, name, totalFollow }) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();
  const handleClick = (item) => {
    if (item?.isOA === true) {
      navigate(link);
      dispatch(actions.artistData(link.split("/")[1]));
    } else {
      console.log(link.split("/")[2]);
      dispatch(actions.artistData(link.split("/")[2]));
      navigate(link);
    }
  };
  return (
    <div
      onClick={() => handleClick(item)}
      className="flex items-center flex-col gap-3"
    >
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="cursor-pointer hover:bg-[#170f23] overflow-hidden rounded-full h-[210px] w-[210px]"
      >
        <img
          className={`${
            isHover ? "animate-scale-up-hover " : "animate-scale-out-hover"
          } h-full w-full object-cover `}
          src={thumbnail}
        />
      </div>
      <div className="flex gap-1 items-center hover:underline  flex-col">
        <Link to={link} className="text-sm text-[#ffff]">
          {name}
        </Link>
        <span className="text-xs text-[#ffffff80]">
          {`${fn.handleNumbers(totalFollow)} quan tâm`}
        </span>
      </div>
      <span className="px-[19px] hover:bg-[#3c2461] cursor-pointer text-white text-sm font-semibold rounded-r-full rounded-l-full border-r-full py-[6px] bg-[#9b4de0]">
        + Quan tâm
      </span>
    </div>
  );
};

export default memo(Artists);
