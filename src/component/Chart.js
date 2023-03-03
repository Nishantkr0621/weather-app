import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);
const Chart = () => {
  const [data, setData] = useState({
    labels: [
      "12:00",
      "1:00",
      "2:00",
      "3:00",
      "4:00",
      "5:00",
      "6:00",
      "7:00",
      "8:00",
      "9:00",
      "10:00",
      "11:00"
    ],
    datasets: [
      {
        label: "Temperature Dataset",
        data: [10, 20, 30, 42, 51, 20, 40, 85, 45, 30, 24, 37],
        backgroundColor: " rgb(100,149,237)",
        borderColor: "red",
        tension: "0.4",
        fill: true
      }
    ]
  });
  return (
    <div style={{ height: "300px" }}>
      <Line data={data}></Line>
    </div>
  );
};
export default Chart;
