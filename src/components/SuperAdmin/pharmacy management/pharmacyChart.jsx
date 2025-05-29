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


const PharmacyChartComp = () => {

    const revenueData = [
        { day: "MON", revenue: 160, products: 210, customer: 30 },
        { day: "TUE", revenue: 240, products: 225, customer: 56 },
        { day: "WED", revenue: 390, products: 346, customer: 95 },
        { day: "THU", revenue: 470, products: 368, customer: 153 },
        { day: "FRI", revenue: 1500, products: 643, customer: 458 },
        { day: "SAT", revenue: 980, products: 743, customer: 458 },
        { day: "SUN", revenue: 300, products: 643, customer: 458 },
      ];
    
      const usersData = [
        { day: "Mon", users: 180 },
        { day: "Tue", users: 250 },
        { day: "Wed", users: 120 },
        { day: "Thu", users: 588 },
        { day: "Fri", users: 742 },
      ];

    return(
        <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div className="bg-white w-full h-[500px] max-sm:h-[350px] pb-16 rounded-lg p-6 max-sm:px-1 shadow-sm shadow-slate-600">
              <h2 className="text-lg ml-[40%] font-bold text-gray-800 mb-4">
                daily Revenue
              </h2>
              <ResponsiveContainer>
                <LineChart
                  data={revenueData}
                  margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {/* Multiple lines for different data sets */}
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#242424"
                    name="Revenue"
                  />
                  <Line
                    type="monotone"
                    dataKey="products"
                    stroke="#4169e1"
                    name="Products"
                  />
                  <Line
                    type="monotone"
                    dataKey="customer"
                    stroke="#32cd32"
                    name="Customer"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white w-full h-[500px] max-sm:h-[350px] shadow-sm shadow-slate-600 rounded-lg p-6 max-sm:pb-16 pb-16 max-sm:p-2">
              <h2 className="text-lg ml-[40%] font-bold text-gray-800 mb-4">
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
                  <Bar dataKey="users" fill="#4169e1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
    )
}

export default PharmacyChartComp