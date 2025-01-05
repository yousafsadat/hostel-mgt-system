// dashboard.js
import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import OverviewCard from "../components/Dashboard/OverviewCard";
import { FaBed, FaUser, FaUtensils, FaUsers } from "react-icons/fa";
import RoomOccupancyGraph from "../components/Dashboard/Graph";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <>
    <Navbar />
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h2>
        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <OverviewCard title="Total Rooms" value="120" icon={<FaBed />} />
          <OverviewCard title="Total Students" value="250" icon={<FaUser />} />
          <OverviewCard
            title="Mess Stats"
            value="50% Full"
            icon={<FaUtensils />}
          />
          <OverviewCard title="Total Staff" value="30" icon={<FaUsers />} />
        </div>
        {/* More Sections like graphs, charts, etc. will go here */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Room Occupancy Over Time
          </h3>
          <RoomOccupancyGraph />
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
