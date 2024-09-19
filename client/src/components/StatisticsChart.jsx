import React from "react";
import { Line } from "react-chartjs-2";
import { Card, CardContent } from "@mui/material";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";

Chart.register(CategoryScale, LinearScale , PointElement, LineElement);
const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Sales Analytics",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

const StatisticsChart = () => {
  return (
    <Card className="w-1/2">
      <CardContent>
        <Line data={data} />
      </CardContent>
    </Card>
  );
};

export default StatisticsChart;
