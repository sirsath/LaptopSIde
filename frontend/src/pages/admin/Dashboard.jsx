import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminGetStatAction } from "../../redux/admin/actions/employeeAction";
import { getEmployeeData } from "../../redux/admin/reducers/employeeReducer";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Doughnut } from "react-chartjs-2";
import Box from "@mui/material/Box";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const { adminstat } = useSelector(getEmployeeData);
  console.log(adminstat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(adminGetStatAction());
  }, []);

  const data = {
    labels: ["online", "COD", `cancele orders`],
    datasets: [
      {
        labels: "# of Votes",
        data: [
          adminstat?.OnlineOrders,
          adminstat?.CodOrders,
          adminstat?.CanceleOrders,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgb(115,65,23 , 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgb(115,65,23 , 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  //  line chart

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const LineData = {
    // labels,
    // data: [adminstat.PaidOrders, adminstat.CodOrders],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        // position: 'top' as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Doughnut data={data} />
        </Grid>
        <Grid item xs={6}>
          {/* <Line options={options} data={LineData} /> */}
        </Grid>
      </Grid>
    </>
  );
}
