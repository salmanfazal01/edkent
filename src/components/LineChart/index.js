import { withTheme } from "@material-ui/core/styles";
import ReactEcharts from "echarts-for-react";
import React from "react";

const dummyData = {
  xKeys: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  legend: ["Type 1", "Type 2", "Type 3"],
  data: [
    {
      name: "Type 1",
      data: [34, 54, 67, 78, 23, 54, 98, 13, 67, 56, 1, 90],
    },
    {
      name: "Type 2",
      data: [76, 34, 76, 23, 9, 12, 65, 78, 87, 32, 12, 12],
    },
    {
      name: "Type 3",
      data: [98, 76, 54, 67, 54, 76, 32, 1, 10, 90, 70, 1],
    },
  ],
};

const LineChart = (props) => {
  const {
    event,
    style,
    xType = "category",
    xKeys = dummyData.xKeys,
    yType = "value",
    data = dummyData.data,
    smooth = true,
    legend = dummyData.legend,
  } = props;

  const getOption = () => {
    const options = {
      textStyle: {
        color: "black",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: legend,
      },
      xAxis: {
        type: xType,
        data: xKeys,
      },
      yAxis: {
        type: yType,
      },
      series: data?.map((i) => ({
        ...i,
        type: "line",
        smooth: smooth,
        itemStyle: {
          //   color: "blue",
        },
      })),
    };

    return options;
  };

  return (
    <>
      <ReactEcharts option={getOption()} onEvents={event} style={style} />
    </>
  );
};

export default withTheme(LineChart);
