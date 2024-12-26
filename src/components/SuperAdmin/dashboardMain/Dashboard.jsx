// import React, { useEffect, useState } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   LineChart,
//   Line,
//   ResponsiveContainer,
// } from "recharts";
// import DashboardCard from "../../Reusable Component/DashboardCardCommponent";
// import { RiAdminLine } from "react-icons/ri";
// import Sidebar from "../../Sidebar/Sidebar";
// import Loader from "../../Reusable Component/Loader"; // Import Loader component

// const DashboardComp = () => {
//   const [revenueData, setRevenueData] = useState([]);
//   const [usersData, setUsersData] = useState([]);
//   const [loading, setLoading] = useState(true); // Add loading state

//   // Simulate data fetching with useEffect
//   useEffect(() => {
//     // Simulating an async call
//     setTimeout(() => {
//       setRevenueData([
//         { month: "Jan", revenue: 100, admin: 10, user: 30 },
//         { month: "Feb", revenue: 200, admin: 25, user: 56 },
//         { month: "Mar", revenue: 300, admin: 146, user: 95 },
//         { month: "Apr", revenue: 400, admin: 368, user: 153 },
//         { month: "May", revenue: 500, admin: 643, user: 458 },
//       ]);
//       setUsersData([
//         { day: "Mon", users: 100 },
//         { day: "Tue", users: 200 },
//         { day: "Wed", users: 300 },
//         { day: "Thu", users: 400 },
//         { day: "Fri", users: 500 },
//       ]);
//       setLoading(false); // Stop loading after data is set
//     }, 2000); // Simulate 2 seconds of loading time
//   }, []);

//   return (
//     <div className="flex">
//       <div className="fixed top-0 left-0 h-full sm:h-screen sm:w-72 w-full z-30">
//         {/* Sidebar */}
//         <Sidebar />
//       </div>

//       <div className="p-6 bg-gray-200 sm:ml-72 overflow-x-scroll flex-1 ml-0 max-sm:mt-16 z-10">
//         <div className="bg-gray-200 w-full min-h-screen">
//           <h1 className="text-2xl font-bold mb-7 border-b-2 pb-3 border-slate-600">
//             Dashboard Overview
//           </h1>

//           {/* Cards */}
//           <div className="grid grid-cols-5 gap-3 max-sm:grid-cols-1 justify-center items-center sm:max-[800px]:grid-cols-1 max-lg:grid-cols-2 lg:max-xl:grid-cols-3">
//             <DashboardCard
//               props={{
//                 img: RiAdminLine,
//                 title: "Total Admin",
//                 count: 102,
//                 date: new Date().toISOString().split("T")[0],
//                 color: "border-blue-900",
//               }}
//             />
//             <DashboardCard
//               props={{
//                 img: RiAdminLine,
//                 title: "Total Users",
//                 count: 105,
//                 date: new Date().toISOString().split("T")[0],
//                 color: "border-blue-900",
//               }}
//             />

//             <DashboardCard
//               props={{
//                 img: RiAdminLine,
//                 title: "Total revenue",
//                 count: 150,
//                 date: new Date().toISOString().split("T")[0],
//                 color: "border-blue-900",
//               }}
//             />
//             <DashboardCard
//               props={{
//                 img: RiAdminLine,
//                 title: " Appointments",
//                 count: 104,
//                 date: new Date().toISOString().split("T")[0],
//                 color: "border-blue-900",
//               }}
//             />
//           </div>

//           {/* Show loader while data is loading */}
//           {loading ? (
//             <Loader />
//           ) : (
//             <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-6">
//               {/* Monthly Revenue Chart */}
// <div className="bg-white w-full h-[500px] max-sm:h-[350px] pb-16 rounded-lg p-6 max-sm:px-1 shadow-sm shadow-slate-600 z-10">
//   <h2 className="text-lg font-bold text-gray-800 mb-4">
//     Monthly Revenue
//   </h2>
//   <ResponsiveContainer>
//     <LineChart
//       data={revenueData}
//       margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="month" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Line
//         type="monotone"
//         dataKey="revenue"
//         stroke="#fb923c"
//         name="Revenue"
//       />
//       <Line
//         type="monotone"
//         dataKey="admin"
//         stroke="#4169e1"
//         name="Admin"
//       />
//       <Line
//         type="monotone"
//         dataKey="user"
//         stroke="#32cd32"
//         name="User"
//       />
//     </LineChart>
//   </ResponsiveContainer>
// </div>

//               {/* Daily Users Chart */}
//               <div className="bg-white w-full h-[500px] max-sm:h-[350px] shadow-sm shadow-slate-600 rounded-lg p-6 max-sm:pb-16 pb-16 max-sm:p-2 z-10">
//                 <h2 className="text-lg font-bold text-gray-800 mb-4">
//                   Daily Users
//                 </h2>
//                 <ResponsiveContainer>
//                   <BarChart
//                     data={usersData}
//                     margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
//                   >
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="day" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="users" fill="#fb923c" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardComp;
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DashboardCard from "../../Reusable Component/DashboardCardCommponent";
import { RiAdminLine } from "react-icons/ri";
import Sidebar from "../../Sidebar/Sidebar";
import Loader from "../../Reusable Component/Loader";

const DashboardComp = () => {
  const [usersData, setUsersData] = useState([]); // Daily users state
  const [totalUsers, setTotalUsers] = useState(0); // Total users state
  const [totalAdmins, setTotalAdmins] = useState(0); // Total admins state
  const [totalAppointments, setTotalAppointments] = useState(0); // Total appointments state
  const [loading, setLoading] = useState(true); // Loader state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [adminsRes, dailyUsersRes, totalUsersRes, appointmentsRes] =
          await Promise.all([
            axios.get("http://localhost:7000/api/dashboard/admins"),
            axios.get("http://localhost:7000/api/dashboard/users"),
            axios.get("http://localhost:7000/api/dashboard/totalusers"),
            axios.get("http://localhost:7000/api/dashboard/appointment"),
          ]);

        setTotalAdmins(adminsRes.data.totalAdmins);
        setUsersData(dailyUsersRes.data); // Assuming this contains daily users data
        setTotalUsers(totalUsersRes.data.totalUsers); // Correctly set totalUsers
        setTotalAppointments(appointmentsRes.data.totalAppointments);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-full sm:h-screen sm:w-72 w-full z-30">
        <Sidebar />
      </div>

      <div className="p-6 bg-gray-200 sm:ml-72 overflow-x-scroll flex-1 ml-0 max-sm:mt-16 z-10">
        <div className="bg-gray-200 w-full min-h-screen">
          <h1 className="text-2xl font-bold mb-7 border-b-2 pb-3 border-slate-600">
            Dashboard Overview
          </h1>

          <div className="grid grid-cols-4 gap-3 max-sm:grid-cols-1 justify-center items-center sm:max-[800px]:grid-cols-1 max-lg:grid-cols-2 lg:max-xl:grid-cols-3">
            <DashboardCard
              props={{
                img: RiAdminLine,
                title: "Total Admins",
                count: totalAdmins,
                date: new Date().toISOString().split("T")[0],
                color: "border-blue-900",
              }}
            />
            <DashboardCard
              props={{
                img: RiAdminLine,
                title: "Total Appointments",
                count: totalAppointments,
                date: new Date().toISOString().split("T")[0],
                color: "border-green-900",
              }}
            />
            <DashboardCard
              props={{
                img: RiAdminLine,
                title: "Total Users",
                count: totalUsers, // Correctly display totalUsers
                date: new Date().toISOString().split("T")[0],
                color: "border-blue-900",
              }}
            />
          </div>

          {loading ? (
            <Loader />
          ) : (
            <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div className="bg-white w-full h-[500px] rounded-lg p-6 shadow-sm shadow-slate-600">
                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Daily Users
                </h2>
                <ResponsiveContainer>
                  <BarChart
                    data={usersData}
                    margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
                  >
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
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardComp;
