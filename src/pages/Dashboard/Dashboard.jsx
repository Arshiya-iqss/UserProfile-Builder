import React from "react";
import "./DashboardStyles.scss";
import UserDetails from "../UserDetails/UserDetails";
import Navbar from "../Navbar/Navbar";
import Opportunities from "../../components/Opportunities/Opportunities";
import Connections from "../../components/Connections/Connections";
import Notifications from "../../components/Notifications/Notifications";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const { state: userData } = useLocation();

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <div className="dp">
          <img src={userData.img} />
        </div>
      </div>

      <div className="mainContent">
        <div className="left-div">
          <Opportunities />
          <Connections />
        </div>
        <div className="center-div">
          <UserDetails userData={userData} />
        </div>
        <div className="right-div">
          <Notifications />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
