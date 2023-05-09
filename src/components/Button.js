import React, { memo } from "react";

const Button = ({ text, style }) => {
  return (
    <button
      type="button"
      className={
        style ? style : "py-1 px-4 rounded-l-ful rounded-r-full bg-transparent"
      }
    >
      {text}
    </button>
  );
};

export default memo(Button);
