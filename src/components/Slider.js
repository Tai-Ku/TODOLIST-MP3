import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getArrSlider } from "../untils/fn";
const Slider = () => {
  const { banner } = useSelector((state) => state.app);
  useEffect(() => {
    const sliderEls = document.getElementsByClassName("slider-item");
    let min = 0;
    let max = 2;
    const intervaId = setInterval(() => {
      const list = getArrSlider(min, max, sliderEls.length - 1);
      for (let i = 0; i < sliderEls.length; i++) {
        sliderEls[i].classList.remove(
          "animate-slide-left",
          "order-last",
          "z-20"
        );
        sliderEls[i].classList.remove(
          "animate-slide-left",
          "order-first",
          "z-10"
        );
        sliderEls[i].classList.remove("animate-slide-left", "order-2", "z-10");
        if (list.some((item) => item === i)) {
          sliderEls[i].style.cssText = `display: block`;
        } else {
          sliderEls[i].style.cssText = `display: none`;
        }
      }
      list.forEach((item) => {
        if (item === max) {
          sliderEls[item].classList.add(
            "animate-slide-right",
            "order-last",
            "z-20"
          );
        } else if (item === min) {
          sliderEls[item].classList.add(
            "animate-slide-left",
            "order-first",
            "z-10"
          );
        } else {
          sliderEls[item].classList.add(
            "animate-slide-left",
            "order-2",
            "z-10"
          );
        }
      });
      min = min === sliderEls.length - 1 ? 0 : min + 1;
      max = max === sliderEls.length - 1 ? 0 : max + 1;
    }, 3000);
    return () => {
      intervaId && clearInterval(intervaId);
    };
  }, []);

  return (
    <div className="flex overflow-hidden px-[59px]">
      <div className="flex gap-8 w-full pt-8">
        {banner.map((item, index) => (
          <img
            key={item.encodeId}
            src={item.banner}
            className={`slider-item flex-1 object-contain w-[30%] rounded-lg ${
              index <= 2 ? "block" : "hidden"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
