import React, { useState } from "react";
import "./Dashboard.css";
import Navigation from "../Navigation/Navigation";
import SoldOutBanner from "../SoldOutBanner/SoldOutBanner";
function Dashboard(props) {
  return (
    <div id="dashboard" className="py-5">
      <div id="home">
        <Navigation></Navigation>
        <DashboardInner></DashboardInner>
      </div>
    </div>
  );
}

export default Dashboard;

const DashboardInner = () => {
  const [tabIndex, setTabIndex] = useState(1);
  return (
    <div className="DashboardInner">
      <h3 className="text-center">Dashboard</h3>

      <div className="container">
        <div className="tab_wrapper mt-3 mt-md-5">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <div className="tab_btn_wrapper mb-3">
              <button
                onClick={() => setTabIndex(1)}
                className={`tab_btn ${tabIndex === 1 && "active_tab"}`}
              >
                Heroes
              </button>
              <button
                onClick={() => setTabIndex(2)}
                className={`tab_btn ${tabIndex === 2 && "active_tab"}`}
              >
                Trainers
              </button>
              <button
                onClick={() => setTabIndex(3)}
                className={`tab_btn ${tabIndex === 3 && "active_tab"}`}
              >
                Lands
              </button>
            </div>
            <div className="form_wrapper mb-3">
              <input type="text" placeholder="Search here..." />
              <svg
                className="search_icon"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L16.514 16.506L21 21ZM19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z"
                  stroke="#0BC2DC"
                  strokeOpacity="0.75"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="tab_content_wrapper">
            {tabIndex === 1 && (
              <div className="tab_card_wrapper">
                <div className="card_wrapper">
                  <div className="card_title"></div>
                  <div className="card_content"></div>
                </div>
              </div>
            )}

            {tabIndex === 2 && (
              <div className="tab_card_wrapper">
                <div className="card_wrapper">
                  <div className="card_title"></div>
                  <div className="card_content"></div>
                </div>
              </div>
            )}
            {tabIndex === 3 && (
              <div className="tab_card_wrapper">
                <div className="card_wrapper">
                  <div className="card_title"></div>
                  <div className="card_content"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
