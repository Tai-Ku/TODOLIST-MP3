import React, { memo, useEffect, useRef } from "react";
import isEqual from "lodash/isEqual";
import bgChart from "../assets/bg-chart.jpg";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { useState } from "react";
import { useSelector } from "react-redux";
import SongItem from "./SongItem";
const ChartSection = () => {
  const absoluteChart = "absolute top-0 left-[59px] right-[59px] bottom-0";
  const [data, setData] = useState(null);
  const { chart, rank } = useSelector((state) => state.app);
  const chartRef = useRef(null);
  const [tooltipState, setTooltipState] = useState({
    opacity: 0,
    top: 0,
    left: 0,
  });
  const [selected, setSelected] = useState(null);
  const options = {
    responsive: true,
    // Bán kính của các điểm trên biểu đồ sẽ bằng 0.
    pointRadius: 0,
    // Biểu đồ sẽ không giữ nguyên tỷ lệ giữa chiều rộng và chiều cao khi thay đổi kích thước.
    maintainAspectRatio: false,
    scales: {
      y: {
        // Không hiển thị các dấu ticks trên trục y.
        ticks: { display: false },
        //  Định nghĩa màu sắc và các thuộc tính khác cho lưới trên biểu đồ.
        grid: { color: "rgba(255,255,255,0.1)", drawTicks: false },
        min: chart?.minScore,
        max: chart?.maxScore,
        border: { dash: [3, 4] },
      },
      x: {
        ticks: { color: "white" },
        grid: { color: "transparent" },
      },
    },
    plugins: {
      //  Không hiển thị chú thích cho biểu đồ.
      legend: false,
      tooltip: {
        enabled: false,
        external: ({ tooltip }) => {
          if (!chartRef || chartRef.current)
            if (tooltip.opacity === 0) {
              if (tooltipState.opacity !== 0)
                setTooltipState((state) => ({ ...state, opacity: 0 }));
              return;
            }
          const counter = [];
          for (let i = 0; i < 3; i++) {
            counter.push({
              data: chart?.items[Object.keys(chart?.items)[i]]
                ?.filter((item) => +item.hour % 2 === 0)
                ?.map((item) => item.counter),
              encodeId: Object.keys(chart?.items)[i],
            });
          }
          // console.log(+tooltip.body[0]?.lines[0].replace(",", "");
          const rs = counter.find((item) =>
            item.data.some(
              (n) => n === +tooltip.body[0]?.lines[0].replace(",", "")
            )
          );
          setSelected(rs.encodeId);
          const newTooltipData = {
            opacity: 1,
            left: tooltip.caretX,
            top: tooltip.caretY,
          };
          if (!isEqual(tooltipState, newTooltipData))
            setTooltipState(newTooltipData);
        },
      },
    },
    hover: {
      mode: "dataset",
      intersect: false,
    },
  };
  useEffect(() => {
    const labels = chart?.times
      ?.filter((item) => +item.hour % 2 === 0)
      ?.map((item) => `${item.hour}:00`);
    const datasets = [];
    if (chart?.items) {
      for (let i = 0; i < 3; i++) {
        datasets.push({
          data: chart?.items[Object.keys(chart?.items)[i]]
            ?.filter((item) => +item.hour % 2 === 0)
            ?.map((item) => item.counter),
          borderColor: i === 0 ? "#4a90e2" : i === 1 ? "#50e3c2" : "#e35050",
          tension: 0.2,
          borderWidth: 2,
          pointBackgroundColor: "white",
          pointHoverRadius: 4,
          pointBorderColor:
            i === 0 ? "#4a90e2" : i === 1 ? "#50e3c2" : "#e35050",
          pointHoverBorderWidth: 4,
        });
      }
      setData({ labels, datasets });
    }
  }, [chart]);
  console.log(rank);
  return (
    <div className="px-[59px] mt-3 relative max-h-[400px] rounded-md">
      <img
        src={bgChart}
        className="w-full object-contain  rounded-md max-h-[400px]"
      />
      <div
        className={`${absoluteChart}  bg-[rgba(77,34,104,0.9)] rounded-md`}
      ></div>
      <div className={`${absoluteChart} p-5 flex flex-col gap-8 rounded-md`}>
        <h3 className="text-2xl font-bold text-[#ffff]">#zingchart</h3>
        <div className="flex gap-4 h-full ">
          <div className="flex-3 flex flex-col gap-4">
            {rank?.slice(0, 3).map((item, index) => (
              <SongItem
                rank={index + 1}
                key={item.encodeId}
                artistsNames={item?.artistsNames}
                title={item?.title}
                thumbnail={item?.thumbnail}
                releaseDate={item?.releaseDate}
                sid={item.encodeId}
                score={Math.round((item?.score / chart?.totalScore) * 100)}
                style="text-white bg-overplay-30"
              />
            ))}
          </div>
          <div className="flex-7 h-[90%] relative">
            {data && <Line data={data} ref={chartRef} options={options} />}
            <div
              className="tooltip "
              style={{
                top: tooltipState.top,
                left: tooltipState.left,
                opacity: tooltipState.opacity,
                position: "absolute",
              }}
            >
              <SongItem
                key={rank?.find((i) => i.encodeId === selected)?.encodeId}
                artistsNames={
                  rank?.find((i) => i.encodeId === selected)?.artistsNames
                }
                title={rank?.find((i) => i.encodeId === selected)?.title}
                thumbnail={
                  rank?.find((i) => i.encodeId === selected)?.thumbnail
                }
                sid={rank?.find((i) => i.encodeId === selected)?.encodeId}
                style="bg-overplay-30"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ChartSection);
