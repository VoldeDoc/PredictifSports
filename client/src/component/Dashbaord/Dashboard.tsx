import { useState } from "react";
import Layout from "../Layout/layout";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";
import { BiCalendar } from "react-icons/bi";
import { FaChevronRight, FaEye } from "react-icons/fa6";
import { CustomFlowbiteTheme, Tabs } from "flowbite-react";
import StackBarChart from "../Chart/StackBarChart";

export default function DashboardContent() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 5)),
  });

  const handleDateChange = (date: Date[]) => {
    setDateRange({
      startDate: date[0],
      endDate: date[1],
    });
  };

  const hours = new Date().getHours();
  let greeting = "";
  if (hours < 12) {
    greeting = "Morning";
  } else if (hours < 18) {
    greeting = "Afternoon";
  } else {
    greeting = "Evening";
  }

  // Stats data
  const GoalsStats: [
    { name: string; data: number[] },
    { name: string; data: number[] }
  ] = [
    {
      name: "Total Goals",
      data: [40, 60, 20, 90, 20, 50, 10],
    },
    {
      name: "Strategies",
      data: [20, 30, 10, 40, 10, 30, 5],
    },
  ];

  const CornerStats: [
    { name: string; data: number[] },
    { name: string; data: number[] }
  ] = [
    {
      name: "Total Corners",
      data: [50, 70, 30, 100, 30, 60, 15],
    },
    {
      name: "Strategies",
      data: [25, 35, 15, 50, 15, 35, 7],
    },
  ];

  const JobsApplied: [
    { name: string; data: number[] },
    { name: string; data: number[] }
  ] = [
    {
      name: "Total Jobs",
      data: [30, 50, 10, 80, 15, 40, 5],
    },
    {
      name: "Strategies",
      data: [15, 25, 5, 40, 7, 20, 3],
    },
  ];

  const customTabTheme: CustomFlowbiteTheme["tabs"] = {
    tablist: {
      tabitem: {
        base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
        variant: {
          underline: {
            base: "rounded-t-lg",
            active: {
              on: "active rounded-t-lg border-b-2 border-[#4640de] text-black",
              off: "border-b-2 border-transparent text-gray-500 hover:border-blue-500 hover:text-black",
            },
          },
        },
      },
    },
  };

  return (
    <Layout toggleSidebar={toggleSidebar}>
      {/* greeting and  date picker */}
      <section className="flex justify-between gap-5 flex-col md:flex-row md:gap-0">
        <div>
          <h1 className="text-2xl font-bold">Good {greeting}, Maria</h1>
          <p className="text-md text-gray-500">
            {dateRange.startDate && dateRange.endDate
              ? `Here is your Predictive report from ${dateRange.startDate.toLocaleDateString(
                  "en-US",
                  { month: "short", day: "numeric" }
                )} - ${dateRange.endDate.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}`
              : "Select a date range to view data"}
          </p>
        </div>
        <div className="flex items-center p-2 justify-center rounded-lg bg-white border border-gray-300 h-fit cursor-pointer">
          <Flatpickr
            className="outline-none"
            options={{
              mode: "range",
              dateFormat: "M j",
              disableMobile: false,
            }}
            value={[dateRange.startDate, dateRange.endDate]}
            onChange={handleDateChange}
          />
          <BiCalendar className="text-2xl text-blue-600" />
        </div>
      </section>

      {/* stats cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white mt-5">
        <div className="bg-[#0C21C1] p-4 rounded-lg flex flex-wrap items-center gap-3 justify-between">
          <div className="contents cursor-pointer">
            <h2 className="text-3xl font-bold">76</h2>
            <p className="text-sm">All Time Strategies</p>
            <FaChevronRight className="text-md" />
          </div>
        </div>
        <div className="bg-[#97060B] p-4 rounded-lg flex flex-wrap items-center gap-3 justify-between">
          <div className="contents cursor-pointer">
            <h2 className="text-3xl font-bold">3</h2>
            <p className="text-sm">Live Matches today</p>
            <FaChevronRight className="text-md" />
          </div>
        </div>
        <div className="bg-[#1F1F21] p-4 rounded-lg flex flex-wrap items-center gap-3 justify-between">
          <div className="contents cursor-pointer">
            <h2 className="text-3xl font-bold">28867</h2>
            <p className="text-sm">Picks Today</p>
            <FaChevronRight className="text-md" />
          </div>
        </div>
      </section>

      {/* charts */}

      <div className="p-3 border border-gray my-5">
        <div className="flex justify-between gap-5 flex-row  md:gap-0">
          <div>
            <h1 className="text-2xl font-bold">Advanced Features</h1>
            <p className="text-gray-500 text-sm">
              Showing Job Statistic{" "}
              {dateRange.startDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}{" "}
              -{" "}
              {dateRange.endDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
          <div className="flex justify-between items-center gap-3 p-2 bg-[#e9ebfd]">
            <div className="px-3 py-2 font-bold text-[#4640de] bg-white text-lg cursor-pointer">
              Week
            </div>
            <div className="text-[#4640de] py-2 px-3 font-bold text-lg cursor-pointer">
              Month
            </div>
            <div className="text-[#4640de] py-2 px-3 font-bold text-lg cursor-pointer">
              Year
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-3  md:gap-0 justify-between items-center">
          <div className="w-3/5">
            <Tabs
              aria-label="Tabs with underline"
              variant="underline"
              theme={customTabTheme}
            >
              <Tabs.Item active title="Goals Stats">
                <StackBarChart series={GoalsStats} />
              </Tabs.Item>
              <Tabs.Item title="Corner Stats">
                <StackBarChart series={CornerStats} />
              </Tabs.Item>
              <Tabs.Item title="Jobs Applied">
                <StackBarChart series={JobsApplied} />
              </Tabs.Item>
            </Tabs>
          </div>
          <div className="w-2/6 space-y-5">
            <div className="border border-gray-500 p-3">
              <div className="flex justify-between items-center gap-3 flex-row">
                <h1 className="font-bold text-2xl">
                  Total Matches
                </h1>
                <span className="rounded-full p-2 text-white bg-[#ffb836]">
                  <FaEye className="text-2xl " />
                </span>
              </div>
            </div>
            <div className="border border-gray-500 p-3"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
