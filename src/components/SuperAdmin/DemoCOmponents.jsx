// // import React from "react";
// // import Sidebar from "../Sidebar/Sidebar";
// // import DashboardCard from "../Reusable Component/DashboardCardCommponent";
// // import { RiAdminLine } from "react-icons/ri";
// // import { shadowColor } from "../Reusable Component/ColorSelector";
// // import LineChart from "../charts/LineChart";
// // import DoughnutChart from "../charts/DonughnutChart";

// // const DashboardCompo = () => {
// //   return (
// //     <div className="w-full flex min-h-screen">
// //       {/* Sidebar Section */}
// //       <div className="fixed h-screen sm:w-[300px] w-full z-10 bg-white shadow-md">
// //         <Sidebar />
// //       </div>

// //       {/* Main Content */}
// //       <div className="w-full ml-[300px] p-4 flex flex-col gap-5 max-sm:ml-0 max-sm:mt-[75px] max-sm:p-2 bg-gray-200">
// //         {/* Dashboard Overview */}
// //         <div className="w-full h-14 flex flex-col justify-start items-start border-b-2 border-black border-opacity-65">
// //           <h1 className="text-2xl font-semibold">Dashboard Overview</h1>
// //         </div>

// //         {/* Cards Section */}
// //         <div className="flex flex-wrap justify-start items-start gap-4 max-sm:flex-col max-sm:items-center">
// //           <DashboardCard
// //             props={{
// //               img: RiAdminLine,
// //               title: "Total Admin",
// //               count: 102,
// //               date: "2022-01-01",
// //             }}
// //           />
// //           <DashboardCard
// //             props={{
// //               img: RiAdminLine,
// //               title: "Total Admin",
// //               count: 105,
// //               date: "2022-01-01",
// //             }}
// //           />
// //           <DashboardCard
// //             props={{
// //               img: RiAdminLine,
// //               title: "Total Admin",
// //               count: 180,
// //               date: "2022-01-01",
// //             }}
// //           />
// //           <DashboardCard
// //             props={{
// //               img: RiAdminLine,
// //               title: "Total Admin",
// //               count: 150,
// //               date: "2022-01-01",
// //             }}
// //           />
// //           <DashboardCard
// //             props={{
// //               img: RiAdminLine,
// //               title: "Total Admin",
// //               count: 104,
// //               date: "2022-01-01",
// //             }}
// //           />
// //         </div>

// //         {/* Charts Section */}
// //         <div className="w-full h-auto max-lg:flex-col flex justify-between gap-4 max-sm:flex-col">
// //           <div className={`w-full sm:max-lg:w-full h-[450px] max-lg:w-full bg-white rounded-lg shadow-sm flex justify-center items-center shadow-${shadowColor}`}>
// //             <LineChart />
// //           </div>
// //           <div className={`w-full sm:max-lg:w-full h-[450px] max-lg:w-full bg-white rounded-lg shadow-sm flex justify-center items-center shadow-${shadowColor}`}>
// //             <DoughnutChart />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DashboardCompo;

// import React from "react";
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
// import DashboardCard from "../Reusable Component/DashboardCardCommponent";
// import { RiAdminLine } from "react-icons/ri";

// const OverviewPage = () => {
  
//   const revenueData = [
//     { month: "Jan", revenue: 100, admin: 10, user: 30 },
//     { month: "Feb", revenue: 200, admin: 25, user: 56 },
//     { month: "Mar", revenue: 300, admin: 146, user: 95 },
//     { month: "Apr", revenue: 400, admin: 368, user: 153 },
//     { month: "May", revenue: 500, admin: 643, user: 458 },
//   ];
  

//   const usersData = [
//     { day: "Mon", users: 100 },
//     { day: "Tue", users: 200 },
//     { day: "Wed", users: 300 },
//     { day: "Thu", users: 400 },
//     { day: "Fri", users: 500 },
//   ];

//   return (
//     <div className="p-6 bg-gray-100 w-full min-h-screen">
//       <h1 className="text-2xl font-bold mb-7">Dashboard Overview</h1>

//       <div className="grid grid-cols-5 gap-3 max-sm:grid-cols-1 justify-center max-sm:items-center sm:max-[800px]:grid-cols-1 max-lg:grid-cols-2  lg:max-xl:grid-cols-3">
//         <DashboardCard
//           props={{
//             img: RiAdminLine,
//             title: "Total Admin",
//             count: 102,
//             date: "2022-01-01",
//           }}
//         />
//         <DashboardCard
//           props={{
//             img: RiAdminLine,
//             title: "Total Admin",
//             count: 105,
//             date: "2022-01-01",
//           }}
//         />
//         <DashboardCard
//           props={{
//             img: RiAdminLine,
//             title: "Total Admin",
//             count: 180,
//             date: "2022-01-01",
//           }}
//         />
//         <DashboardCard
//           props={{
//             img: RiAdminLine,
//             title: "Total Admin",
//             count: 150,
//             date: "2022-01-01",
//           }}
//         />
//         <DashboardCard
//           props={{
//             img: RiAdminLine,
//             title: "Total Admin",
//             count: 104,
//             date: "2022-01-01",
//           }}
//         />
//       </div>
//       <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-6">
//         <div className="bg-white w-full h-[500px] max-sm:h-[350px] pb-16 rounded-lg p-6 max-sm:px-1 shadow-sm shadow-slate-600">
//           <h2 className="text-lg font-bold text-gray-800 mb-4">
//             Monthly Revenue
//           </h2>
//           <ResponsiveContainer>
//             <LineChart
//               data={revenueData}
//               margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
//             >
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               {/* Multiple lines for different data sets */}
//               <Line
//                 type="monotone"
//                 dataKey="revenue"
//                 stroke="#fb923c"
//                 name="Revenue"
//               />
//               <Line
//                 type="monotone"
//                 dataKey="admin"
//                 stroke="#4169e1"
//                 name="Admin"
//               />
//               <Line
//                 type="monotone"
//                 dataKey="user"
//                 stroke="#32cd32"
//                 name="User"
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="bg-white w-full h-[500px] max-sm:h-[350px] shadow-sm shadow-slate-600 rounded-lg p-6 max-sm:pb-16 pb-16 max-sm:p-2">
//           <h2 className="text-lg font-bold text-gray-800 mb-4">Daily Users</h2>
//           <ResponsiveContainer>
//             <BarChart
//               data={usersData}
//               margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
//             >
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="day" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="users" fill="#fb923c" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OverviewPage;
