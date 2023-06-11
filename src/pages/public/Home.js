import { Link } from "react-router-dom";
import React from "react";
import Slider from "react-slick";
import {
  Section,
  // Slider,
  NewRelease,
  ChartSection,
  SongHot,
} from "../../components";
import { useSelector } from "react-redux";
function Home() {
  const {
    friday,
    newEveryDay,
    top100,
    album,
    hArtistTheme,
    weekChart,
    alumHot,
  } = useSelector((state) => state.app);
  console.log(alumHot);
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2f283a",
          height: "30px",
          width: "30px",
          borderRadius: "100px",
        }}
        onClick={onClick}
      />
    );
  };
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2f283a",
          height: "30px",
          width: "30px",
          borderRadius: "100px",
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="overflow-y-auto h-full">
        {/* <Slider /> */}
        <Section data={friday} />
        <Section data={newEveryDay} />
        <NewRelease />
        <ChartSection />
        <Section data={top100} />
        <Section data={album} />
        <div className="mt-12 px-[59px] w-full flex flex-col gap-6 ">
          <div className="flex justify-between items-center ">
            <h3 className="text-xl font-medium text-[#ffff]">BXH Nhạc Mới </h3>
            <h2 className="text-[12px] text-[#ffffff80]">TẤT CẢ</h2>
          </div>
          <div className="flex items-center w-[full] p-[5px] gap-6  ">
            <Slider {...settings} className="w-full gap-6 ">
              {alumHot?.map((item, i) => (
                <SongHot
                  title={item.title}
                  rank={i + 1}
                  thumbnailM={item.thumbnailM}
                  artistsNames={item.artistsNames}
                  releaseDate={item.releaseDate}
                />
              ))}
            </Slider>
          </div>
        </div>
        <Section data={hArtistTheme} />
        <div className="flex items-center px-[59px] gap-7 mt-12 ">
          {weekChart.map((item, index) => (
            <Link key={index} to={item?.link?.split(".")[0]}>
              <img
                className="object-cover rounded-md"
                src={item?.cover}
                alt="cover"
              />
            </Link>
          ))}
        </div>

        <div className="h-[100px]"></div>
      </div>
    </>
  );
}

export default Home;
