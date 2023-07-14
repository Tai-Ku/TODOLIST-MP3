import React, { useEffect, useState } from "react";
import { apiChartHome } from "../../api";
const ZingChart = () => {
  const [chartData, setChartData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await apiChartHome();
      if (res.data.err === 0) {
        setChartData(res.data.data);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const labels = chartData?.RTChart?.chart?.times
      ?.filter((item) => +item.hour % 2 === 0)
      ?.map((item) => `${item.hour}:00`);
    const datasets = [];
    if (chartData?.RTChart?.chart?.items) {
      for (let i = 0; i < 3; i++) {
        datasets.push({
          data: chartData?.RTChart?.chart?.items[
            Object.keys(chartData?.RTChart?.chart?.items)[i]
          ]
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
      setChartData({ labels, datasets });
    }
  }, [chartData]);
  console.log(chartData);
  // const options = {
  //   responsive: true,
  //   // Bán kính của các điểm trên biểu đồ sẽ bằng 0.
  //   pointRadius: 0,
  //   // Biểu đồ sẽ không giữ nguyên tỷ lệ giữa chiều rộng và chiều cao khi thay đổi kích thước.
  //   maintainAspectRatio: false,
  //   scales: {
  //     y: {
  //       // Không hiển thị các dấu ticks trên trục y.
  //       ticks: { display: false },
  //       //  Định nghĩa màu sắc và các thuộc tính khác cho lưới trên biểu đồ.
  //       grid: { color: "rgba(255,255,255,0.1)", drawTicks: false },
  //       min: chart?.minScore,
  //       max: chart?.maxScore,
  //       border: { dash: [3, 4] },
  //     },
  //     x: {
  //       ticks: { color: "white" },
  //       grid: { color: "transparent" },
  //     },
  //   },
  //   plugins: {
  //     //  Không hiển thị chú thích cho biểu đồ.
  //     legend: false,
  //     tooltip: {
  //       enabled: false,
  //       external: ({ tooltip }) => {
  //         if (!chartRef || chartRef.current)
  //           if (tooltip.opacity === 0) {
  //             if (tooltipState.opacity !== 0)
  //               setTooltipState((state) => ({ ...state, opacity: 0 }));
  //             return;
  //           }
  //         const counter = [];
  //         for (let i = 0; i < 3; i++) {
  //           counter.push({
  //             data: chart?.items[Object.keys(chart?.items)[i]]
  //               ?.filter((item) => +item.hour % 2 === 0)
  //               ?.map((item) => item.counter),
  //             encodeId: Object.keys(chart?.items)[i],
  //           });
  //         }
  //         // console.log(+tooltip.body[0]?.lines[0].replace(",", "");
  //         const rs = counter.find((item) =>
  //           item.data.some(
  //             (n) => n === +tooltip.body[0]?.lines[0].replace(",", "")
  //           )
  //         );
  //         setSelected(rs.encodeId);
  //         const newTooltipData = {
  //           opacity: 1,
  //           left: tooltip.caretX,
  //           top: tooltip.caretY,
  //         };
  //         if (!isEqual(tooltipState, newTooltipData))
  //           setTooltipState(newTooltipData);
  //       },
  //     },
  //   },
  //   hover: {
  //     mode: "dataset",
  //     intersect: false,
  //   },
  // };
  return (
    <div className="px-[60px]">
      <div className="w-full h-[70px] flex flex-col">
        <h3 className="text-3xl font-bold text-chart">#ZingChart</h3>
      </div>
    </div>
  );
};

export default ZingChart;
