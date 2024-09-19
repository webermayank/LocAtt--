import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx";
import DashboardCard from "../components/DashboardCard.jsx";
import StatisticsChart from "../components/StatisticsChart.jsx";






const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <Topbar />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <DashboardCard title="Sessions By Channel" value="75%" />
          <DashboardCard title="Events" value="Critical" />
          <DashboardCard title="Device Stats" value="195 Days, 8 hours" />
        </div>
        <div className="mt-6">
          <StatisticsChart />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
