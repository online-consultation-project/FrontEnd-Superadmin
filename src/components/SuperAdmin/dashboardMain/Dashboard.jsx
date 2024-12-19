import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import DashboardCard from "../../Reusable Component/DashboardCardCommponent";
import { RiAdminLine } from "react-icons/ri";
import Sidebar from "../../Sidebar/Sidebar";

const DashboardComp = () => {
  const revenueData = [
    { month: "Jan", revenue: 100, admin: 10, user: 30 },
    { month: "Feb", revenue: 200, admin: 25, user: 56 },
    { month: "Mar", revenue: 300, admin: 146, user: 95 },
    { month: "Apr", revenue: 400, admin: 368, user: 153 },
    { month: "May", revenue: 500, admin: 643, user: 458 },
  ];

  const usersData = [
    { day: "Mon", users: 100 },
    { day: "Tue", users: 200 },
    { day: "Wed", users: 300 },
    { day: "Thu", users: 400 },
    { day: "Fri", users: 500 },
  ];

  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-full sm:h-screen sm:w-72 w-full z-30">
        {/* Sidebar */}
        <Sidebar />
      </div>

      <div className="p-6 bg-gray-200 sm:ml-72 overflow-x-scroll flex-1 ml-0 max-sm:mt-16 z-10">
        <div className="bg-gray-200 w-full min-h-screen">
          <h1 className="text-2xl font-bold mb-7 border-b-2 pb-3 border-slate-600">Dashboard Overview</h1>

          {/* Cards */}
          <div className="grid grid-cols-5 gap-3 max-sm:grid-cols-1 justify-center items-center sm:max-[800px]:grid-cols-1 max-lg:grid-cols-2 lg:max-xl:grid-cols-3">
            <DashboardCard
              props={{
                img: RiAdminLine,
                title: "Total Admin",
                count: 102,
                date: new Date().toISOString().split("T")[0],
                color: "border-blue-900"
              }}
            />
            <DashboardCard
              props={{
                img: RiAdminLine,
                title: "Total Admin",
                count: 105,
                date: new Date().toISOString().split("T")[0],
                color: "border-blue-900"
              }}
            />
            <DashboardCard
              props={{
                img: RiAdminLine,
                title: "Total Admin",
                count: 180,
                date: new Date().toISOString().split("T")[0],
                color: "border-blue-900"
              }}
            />
            <DashboardCard
              props={{
                img: RiAdminLine,
                title: "Total Admin",
                count: 150,
                date: new Date().toISOString().split("T")[0],
                color: "border-blue-900"
              }}
            />
            <DashboardCard
              props={{
                img: RiAdminLine,
                title: "Total Admin",
                count: 104,
                date: new Date().toISOString().split("T")[0],
                color: "border-blue-900"
              }}
            />
          </div>

     
          <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-6">
         
            <div className="bg-white w-full h-[500px] max-sm:h-[350px] pb-16 rounded-lg p-6 max-sm:px-1 shadow-sm shadow-slate-600 z-10">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Monthly Revenue</h2>
              <ResponsiveContainer>
                <LineChart
                  data={revenueData}
                  margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#fb923c" name="Revenue" />
                  <Line type="monotone" dataKey="admin" stroke="#4169e1" name="Admin" />
                  <Line type="monotone" dataKey="user" stroke="#32cd32" name="User" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Daily Users Chart */}
            <div className="bg-white w-full h-[500px] max-sm:h-[350px] shadow-sm shadow-slate-600 rounded-lg p-6 max-sm:pb-16 pb-16 max-sm:p-2 z-10">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Daily Users</h2>
              <ResponsiveContainer>
                <BarChart data={usersData} margin={{ top: 5, right: 30, left: 5, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="users" fill="#fb923c" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComp;
