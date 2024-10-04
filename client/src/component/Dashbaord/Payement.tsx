import { useState } from "react";
import Layout from "../Layout/layout";

export default function PaymentContent() {
    const [selectedTab, setSelectedTab] = useState('monthly');
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <Layout toggleSidebar={toggleSidebar}>
      <div className="tabbed text-center">
        <h1 className=" text-3xl font-bold text-black-200">Choose your Plan</h1>
        <div className="tab-panel ">
          <button
            className={`tab-button  ${
              selectedTab === "monthly" ? "active" : ""
            }`}
            onClick={() => setSelectedTab("monthly")}
          >
            Monthly
          </button>
          <button
            className={`tab-button ${selectedTab === "yearly" ? "active" : ""}`}
            onClick={() => setSelectedTab("yearly")}
          >
            Yearly <span className="text-green-400">(save 2.5%)</span>
          </button>
        </div>
        <h1 className="text-2xl my-2">
          <span className="text-blue-300">Best Plans For</span>{" "}
          <span className=""> Predictive Sport</span>
        </h1>
      </div>

      <div className="tab-content">
        {selectedTab === "monthly" && (
          <div className="monthly-plan">
            {/* Monthly plan content goes here */}
            <div className="row container mx-auto">
              <div className="col-lg-4 flex justify-center pb-5 mt-5">
                <div className="plan-card border-2 rounded-lg  px-6 mb-3">
                  <button className="px-4 py-2 border-2 rounded-lg font-bold text-xl my-3">
                    Basic
                  </button>
                  <h1 className="text-4xl font-bold mb-2">£7</h1>
                  <h5 className="mb-3">User/Month</h5>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/3.svg" alt="" />
                    <p>Back testing</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/3.svg" alt="" />
                    <p>Valuebet finder</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/3.svg" alt="" />
                    <p>Streaks and Trends</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/two.svg" alt="" />
                    <p>Chat support</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/ond.svg" alt="" />
                    <del>Smart AI bots</del>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/ond.svg" alt="" />
                    <del>Zero Limitations</del>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/ond.svg" alt="" />
                    <del>Pre match odds</del>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/ond.svg" alt="" />
                    <del>fixtures</del>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/ond.svg" alt="" />
                    <del>Lineup</del>
                  </div>
                  <button className="btn px-4 py-2 border-2 rounded-lg  text-xl my-3 bg-blue-300">
                    Choose Plan
                  </button>
                </div>
              </div>

              <div className="col-lg-4 flex justify-center pb-5 mt-2">
                <div className="plan-card border-2 rounded-lg  shadow-md bg-blue-700 text-white ">
                  <button className="px-4 py-2 border-2 rounded-lg font-bold text-xl my-3">
                    Advanced
                  </button>
                  <h1 className="text-4xl font-bold mb-2">£12</h1>
                  <h5 className="mb-3">User/Month</h5>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/4.svg" alt="" />
                    <p>League</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/4.svg" alt="" />
                    <p>Livescore</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/4.svg" alt="" />
                    <p>Head 2 Head</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/4.svg" alt="" />
                    <p>Top scorers</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/4.svg" alt="" />
                    <p>Player transfers</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/4.svg" alt="" />
                    <p>In-play odds</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/4.svg" alt="" />
                    <p>Sideline news</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/ond.svg" alt="" />
                    <del>Statistics</del>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/ond.svg" alt="" />
                    <del>Prematch news</del>
                  </div>
                  <button className="btn px-4 py-2 border-2 rounded-lg  text-xl my-3 bg-white self-end ">
                    Choose Plan
                  </button>
                </div>
              </div>

              <div className="col-lg-4 flex justify-center pb-5 mt-5">
                <div className="plan-card border-2 rounded-lg p-4 px-6 ">
                  <button className="px-4 py-2 border-2 rounded-lg font-bold text-xl my-3">
                    Premium
                  </button>
                  <h1 className="text-4xl font-bold mb-2">£25</h1>
                  <h5 className="mb-3">User/Month</h5>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/3.svg" alt="" />
                    <p>League</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/3.svg" alt="" />
                    <p>Livescore</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/3.svg" alt="" />
                    <p>Top scorers</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/3.svg" alt="" />
                    <p>Injuries</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/3.svg" alt="" />
                    <p>In-play</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/3.svg" alt="" />
                    <p>pre-match</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/3.svg" alt="" />
                    <p>Statsitics</p>
                  </div>
                  <button className="btn px-4 py-2 border-2 rounded-lg  text-xl my-3 bg-blue-300">
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedTab === "yearly" && (
          <div className="yearly-plan">
            {/* Yearly plan content goes here */}
            <div className="row container mx-auto">
              <div className="col-lg-4 flex justify-center pb-5 mt-5">
                <div className="plan-card border-2 rounded-lg  px-6 mb-3">
                  <button className="px-4 py-2 border-2 rounded-lg font-bold text-xl my-3">
                    Basic
                  </button>
                  <h1 className="text-4xl font-bold mb-2">£70</h1>
                  <h5 className="mb-3">User/Year</h5>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/3.svg" alt="" />
                    <p>Back testing</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/3.svg" alt="" />
                    <p>Valuebet finder</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/3.svg" alt="" />
                    <p>Streaks and Trends</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/two.svg" alt="" />
                    <p>Chat support</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/ond.svg" alt="" />
                    <del>Smart AI bots</del>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/ond.svg" alt="" />
                    <del>Zero Limitations</del>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/ond.svg" alt="" />
                    <del>Pre match odds</del>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/ond.svg" alt="" />
                    <del>fixtures</del>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/ond.svg" alt="" />
                    <del>Lineup</del>
                  </div>
                  <button className="btn px-4 py-2 border-2 rounded-lg  text-xl my-3 bg-blue-300">
                    Choose Plan
                  </button>
                </div>
              </div>

              <div className="col-lg-4 flex justify-center pb-5 mt-2">
                <div className="plan-card border-2 rounded-lg  shadow-md bg-blue-700 text-white ">
                  <button className="px-4 py-2 border-2 rounded-lg font-bold text-xl my-3">
                    Advanced
                  </button>
                  <h1 className="text-4xl font-bold mb-2">£120</h1>
                  <h5 className="mb-3">User/Year</h5>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/4.svg" alt="" />
                    <p>League</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/4.svg" alt="" />
                    <p>Livescore</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/4.svg" alt="" />
                    <p>Head 2 Head</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/4.svg" alt="" />
                    <p>Top scorers</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/4.svg" alt="" />
                    <p>Player transfers</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/4.svg" alt="" />
                    <p>In-play odds</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/4.svg" alt="" />
                    <p>Sideline news</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/ond.svg" alt="" />
                    <del>Statistics</del>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/ond.svg" alt="" />
                    <del>Prematch news</del>
                  </div>
                  <button className="btn px-4 py-2 border-2 rounded-lg  text-xl my-3 bg-white self-end ">
                    Choose Plan
                  </button>
                </div>
              </div>

              <div className="col-lg-4 flex justify-center pb-5 mt-5">
                <div className="plan-card border-2 rounded-lg p-4 px-6 ">
                  <button className="px-4 py-2 border-2 rounded-lg font-bold text-xl my-3">
                    Premium
                  </button>
                  <h1 className="text-4xl font-bold mb-2">£250</h1>
                  <h5 className="mb-3">User/Year</h5>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/3.svg" alt="" />
                    <p>League</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/3.svg" alt="" />
                    <p>Livescore</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/3.svg" alt="" />
                    <p>Top scorers</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/3.svg" alt="" />
                    <p>Injuries</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/3.svg" alt="" />
                    <p>In-play</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/3.svg" alt="" />
                    <p>pre-match</p>
                  </div>
                  <div className="flex items-center space-x-4 justify-start">
                    <img src="/3.svg" alt="" />
                    <p>Statsitics</p>
                  </div>
                  <button className="btn px-4 py-2 border-2 rounded-lg  text-xl my-3 bg-blue-300">
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
