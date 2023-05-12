import React, { useEffect } from "react";
import * as api from "../../api";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const WeekRank = () => {
  const { weekChart } = useSelector((state) => state.app);
  const { title, pid } = useParams();
  console.log(pid);
  useEffect(() => {
    const fetchWeekChart = async () => {
      const response = await api.apiChartWeek(pid);
      console.log(response.data.data.weekChart);
    };
    fetchWeekChart();
  }, [pid]);
  return <div></div>;
};

export default WeekRank;
