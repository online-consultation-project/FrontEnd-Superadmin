import React, { useEffect, useState } from "react";
import {
  FaAddressCard,
} from "react-icons/fa";
import Sidebar from "../../Sidebar/Sidebar";
import { FaUserDoctor } from "react-icons/fa6";
import { SubCard } from "../doctor management/SubCard";
import OfflineAppoitnment from "./OfflineAppointment";
import { Link, Outlet, useLocation } from "react-router-dom";

const pharmacyMenu = [
  {
    image: <FaAddressCard className="text-2xl font-semibold" />,
    title: "Offline Appoitnment",
    path: "/appointments",
  },
  {
    image: <FaUserDoctor className="text-2xl font-semibold" />,
    title: "Online Appointment",
    path: "/appointments/onlineappointment",
  },
];

const AppointmentTable = () => {

  const location = useLocation()
  

  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-full sm:h-screen sm:w-72 w-full">
        <Sidebar />
      </div>
      <div className="p-6 bg-gray-200 sm:ml-72 overflow-x-scroll flex-1 ml-0 max-sm:mt-16">
        <div className="bg-gray-200 w-full h-screen">
          <h1 className="text-2xl font-bold mb-7 border-b-2 pb-3 border-slate-600">
            Appointments
          </h1>
          <div className="mx-28 grid grid-cols-2 gap-4 mb-7 max-lg:grid-cols-1 max-lg:mx-14 max-[440px]:mx-5">
            {pharmacyMenu.map((value, index) => (
              <Link to={value.path} key={index}>
                <SubCard
                props={{ ...value }}
                className={`${
                  value.path === location.pathname
                    ? "bg-gradient-to-r from-blue-500 to-blue-900 text-white py-4 px-6 rounded-md shadow-sm justify-center sm:max-lg:gap-4 sm:max-lg:px-3 shadow-slate-600 flex gap-8"
                    : "bg-white py-4 px-6 rounded-md shadow-sm justify-center sm:max-lg:gap-4 sm:max-lg:px-3 shadow-slate-600 flex gap-8 text-blue-900"
                }`}
                />
              </Link>
            ))}
          </div>
          <div>
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentTable;
