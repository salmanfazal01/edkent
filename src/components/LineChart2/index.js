import React from "react";
import { ResponsiveLine } from "@nivo/line";

const dummyData = [
  {
    id: "Type 1",
    data: [
      {
        x: "Jan",
        y: 47,
      },
      {
        x: "Feb",
        y: 206,
      },
      {
        x: "Mar",
        y: 143,
      },
      {
        x: "Apr",
        y: 0,
      },
      {
        x: "May",
        y: 261,
      },
      {
        x: "Jun",
        y: 218,
      },
      {
        x: "Jul",
        y: 124,
      },
      {
        x: "Aug",
        y: 95,
      },
      {
        x: "Sep",
        y: 254,
      },
      {
        x: "Oct",
        y: 204,
      },
      {
        x: "Nov",
        y: 276,
      },
      {
        x: "Dec",
        y: 158,
      },
    ],
  },
  {
    id: "Type 2",
    data: [
      {
        x: "Jan",
        y: 28,
      },
      {
        x: "Feb",
        y: 228,
      },
      {
        x: "Mar",
        y: 195,
      },
      {
        x: "Apr",
        y: 229,
      },
      {
        x: "May",
        y: 37,
      },
      {
        x: "Jun",
        y: 120,
      },
      {
        x: "Jul",
        y: 238,
      },
      {
        x: "Aug",
        y: 259,
      },
      {
        x: "Sep",
        y: 99,
      },
      {
        x: "Oct",
        y: 126,
      },
      {
        x: "Nov",
        y: 233,
      },
      {
        x: "Dec",
        y: 122,
      },
    ],
  },
  {
    id: "Type 3",
    data: [
      {
        x: "Jan",
        y: 293,
      },
      {
        x: "Feb",
        y: 20,
      },
      {
        x: "Mar",
        y: 78,
      },
      {
        x: "Apr",
        y: 53,
      },
      {
        x: "May",
        y: 160,
      },
      {
        x: "Jun",
        y: 116,
      },
      {
        x: "Jul",
        y: 180,
      },
      {
        x: "Aug",
        y: 198,
      },
      {
        x: "Sep",
        y: 250,
      },
      {
        x: "Oct",
        y: 200,
      },
      {
        x: "Nov",
        y: 32,
      },
      {
        x: "Dec",
        y: 248,
      },
    ],
  },
];

const LineChart2 = ({ data }) => {
  return (
    <ResponsiveLine
      data={data || dummyData}
      margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      pointSize={0}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "top",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 0,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart2;
