import Chart from "react-apexcharts";

import { ApexOptions } from "apexcharts";

interface Props {
  series: [
    {
      name: string;
      data: number[];
    },
    {
      name: string;
      data: number[];
    }
  ];
}

const StackBarChart = ({ series }: Props) => {
  // const series = [
  //   {
  //     name: "Total Match",
  //     data: [40, 60, 20, 90, 20, 50, 10],
  //   },
  //   {
  //     name: "Strategies",
  //     data: [20, 30, 10, 40, 10, 30, 5],
  //   },
  // ];
  const options: ApexOptions = {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "85%",
      },
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "14px",
      fontFamily: "Inter",
      offsetY: 0,
      markers: {
        offsetY: 0,
        offsetX: -5,
      },
      itemMargin: {
        horizontal: 18,
        vertical: 0,
      },
      labels: {
        colors: "#475569",
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },

    yaxis: {
      show: false,
      min: 0,
      max: 100,
      labels: {
        style: {
          colors: "#475569",
          fontFamily: "Inter",
        },
      },
    },

    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: {
        offsetY: -3,
        style: {
          colors: "#475569",
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },

    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `$ ${val} predicts`;
        },
      },
    },
    colors: ["#7b61ff", "#ffb836"],
    grid: {
      show: true,
      borderColor: "#e2e8e0",
      strokeDashArray: 3,
      position: "back",
    },
  };
  return (
    <>
      <Chart
        options={options}
        series={series}
        type="bar"
        height={410}
        width={"100%"}
      />
    </>
  );
};

export default StackBarChart;